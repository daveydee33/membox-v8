import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getItems, getTags } from "@/api";
import { useFilter } from "@/hooks/useFilter";
import { useItemContext } from "@/hooks/useItemContext";
import { Item } from "@/types";

import React, { ReactNode } from "react";

const Right = () => {
  const { selectedItem, setSelectedItem } = useItemContext();
  const { query: filter, imagesOnly, selectedTags } = useFilter();

  // Queries
  const query = useQuery(["items"], getItems);

  if (!query.data)
    return (
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        {query.status}
      </div>
    );

  // Handle the filters
  // 1
  const filterLowerCase = filter.toLocaleLowerCase();
  let filteredItems = query.data?.results?.filter((item: Item) => {
    const itemTitle = item.title.toLowerCase();
    const itemDescription = item.description.toLowerCase();
    return (
      itemTitle.includes(filterLowerCase) ||
      itemDescription.includes(filterLowerCase)
    );
  });
  // 2 - Tags
  if (selectedTags.length) {
    filteredItems = filteredItems.filter((item: Item) => {
      let count = 0;
      item.tags.forEach((tag) => {
        if (selectedTags.includes(tag)) count += 1;
        if (count > 0) return true;
      });
      return count > 0;
    });
  }
  // 3
  filteredItems = filteredItems.filter((item: Item) => {
    if (imagesOnly) return item.images.length > 0;
    return true;
  });

  const ItemCard = (props: { children: ReactNode; item: Item }) => {
    return (
      <Paper
        sx={{
          // backgroundColor: "darkcyan",
          fontSize: "large",
          p: 1,
          textAlign: "center",
          border: "3px solid transparent",
          color: "theme.palette.primary.main",
          ...(props.item.id === selectedItem?.id && {
            backgroundColor: "lightcoral",
            borderColor: "primary.main",
            fontWeight: "bold",
          }),
          ":hover": {
            fontWeight: "bold",
            cursor: "pointer",
            borderColor: "lightcoral",
          },
        }}
        component="button"
        elevation={8}
        onClick={() => {
          if (selectedItem?.id === props.item.id) {
            setSelectedItem(null);
          } else {
            setSelectedItem(props.item);
          }
        }}
      >
        {props.children}
      </Paper>
    );
  };

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: 0,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: 2,
          gap: 1.25,
          alignContent: "flex-start",
          backgroundColor: "secondary.main",
          minHeight: 0,
          overflow: "auto",
        }}
      >
        {filteredItems.map((item: Item) => {
          const replacement = `<u>${filter.toLowerCase()}</u>`;
          return (
            <ItemCard key={item.id} item={item}>
              <span
                dangerouslySetInnerHTML={{
                  __html: `${item.title.replace(
                    filter.toLowerCase(),
                    replacement
                  )}`,
                }}
              ></span>
            </ItemCard>
          );
        })}
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography variant="caption">
          {filteredItems.length} results
        </Typography>
      </Box>
    </Box>
  );
};

export default Right;
