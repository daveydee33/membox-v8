import { Box, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api";
import { useFilter } from "../hooks/useFilter";
import { useItemContext } from "../hooks/useItemContext";

import React, { ReactNode } from "react";

const Right = () => {
  const { selectedItem, setSelectedItem } = useItemContext();
  const { query: filter } = useFilter();

  // Queries
  const query = useQuery(["items"], getItems);

  if (!query.data) return <div style={{ flex: 1 }}>{query.status}</div>;

  const filterLowerCase = filter.toLocaleLowerCase();
  const filteredItems = query.data?.results?.filter((item) => {
    const itemTitle = item.title.toLowerCase();
    const itemDescription = item.description.toLowerCase();

    return (
      itemTitle.includes(filterLowerCase) ||
      itemDescription.includes(filterLowerCase)
    );
  });

  const ItemCard = (props: { children: ReactNode }) => {
    return (
      <Paper
        sx={{
          // backgroundColor: "darkcyan",
          fontSize: "large",
          p: 1,
          textAlign: "center",
          border: "2px solid transparent",
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
            // margin: "1px",
            // (props.item.id === selectedItem.id) && backgroundColor: "lightcyan",
            // borderColor: "primary.main",
          },
        }}
        component="button"
        elevation={8}
        onClick={() => {
          console.log("selectedItem", props.item);
          setSelectedItem(props.item);
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
        display: "flex",
        flexWrap: "wrap",
        padding: 1,
        gap: 1,
        alignContent: "flex-start",
        backgroundColor: "secondary.main",
        minHeight: 0,
        overflow: "auto",
      }}
    >
      {filteredItems.map((item, index) => {
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
  );
};

export default Right;
