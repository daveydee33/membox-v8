import { Grid, Box, Paper, styled } from "@mui/material";
import axios from "axios";

import React, { ReactNode, useEffect, useState } from "react";
import theme from "../theme";

export const Right = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   height: 60,
  //   lineHeight: "60px",
  // }));

  // const items = Array(500).fill("nothing");

  // const ItemCard = styled(Paper)(({ theme }) => {
  //   return {
  //     ...theme.typography.body1,
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //     p: 1,
  //   };
  // });

  const [items, itemsSetter] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      "https://membox-v7-staging.herokuapp.com/v1/items?limit=9999"
    );
    itemsSetter(res.data.results);
  };

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
      {items.map((item, index) => (
        <ItemCard key={item.id}>{item.title}</ItemCard>
      ))}
    </Box>
  );
};
