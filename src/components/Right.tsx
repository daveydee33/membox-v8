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

  if (!query.data) return <p>{query.status}</p>;

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
          p: 1,
          textAlign: "center",
          border: "2px solid transparent",
          color: "theme.palette.primary.main",
          backgroundColor: props.item.id === selectedItem.id && "lightcyan",
          ":hover": {
            fontWeight: "bold",
            cursor: "pointer",
            // (props.item.id === selectedItem.id) && backgroundColor: "lightcyan",
            borderColor: "primary.main",
          },
        }}
        elevation={8}
        onClick={() => setSelectedItem(props.item)}
      >
        {props.children}
      </Paper>
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        padding: 1,
        gap: 1,
        alignContent: "flex-start",
        backgroundColor: "secondary.main",
        // width: "25%",
        width: "400px",
      }}
    >
      {filteredItems.map((item, index) => {
        const replacement = `<u>${filter.toLowerCase()}</u>`;
        return (
          <ItemCard key={item.id} item={item}>
            <p
              dangerouslySetInnerHTML={{
                __html: `${item.title.replace(
                  filter.toLowerCase(),
                  replacement
                )}`,
              }}
            ></p>
          </ItemCard>
        );
      })}
    </Box>
  );
};

export default Right;
