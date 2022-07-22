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

  console.log("query.error", query.error);
  console.log("query.isError", query.isError);
  console.log("query.data", query.data);
  console.log("query.status", query.status);
  console.log("query", query);
  // if (query.error) return `Error fetching data.`;
  if (!query.data) return query.status;

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
      {query.data?.results?.map((item, index) => (
        <ItemCard key={item.id}>{item.title}</ItemCard>
      ))}
    </Box>
  );
};
