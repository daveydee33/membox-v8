import { Box, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api";
import { useFilter } from "../hooks/useFilter";

import React, { ReactNode } from "react";

export const Right = () => {
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
        }}
        elevation={8}
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
      }}
    >
      {filteredItems.map((item, index) => (
        <ItemCard key={item.id}>{item.title}</ItemCard>
      ))}
    </Box>
  );
};
