import { Grid, Box, Paper, styled } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getItems } from "../api";

import React, { ReactNode } from "react";

export const Right = () => {
  // const [items, itemsSetter] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await getItems();
  //   itemsSetter(res.results);
  // };

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery(["items"], getItems);

  // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries(["todos"]);
  //   },
  // });

  if (!query.data) return "...";

  const ItemCard = (props: ReactNode) => {
    return (
      <Paper
        sx={{
          // backgroundColor: "darkcyan",
          backgroundColor: "white",
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
      {(items || []).map((item, index) => (
        <ItemCard key={item.id}>{item.title}</ItemCard>
      ))}
    </Box>
  );
};
