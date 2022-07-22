import { Grid, Box, Paper, styled, ThemeProvider } from "@mui/material";

import React, { ReactNode } from "react";

export const Right = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   height: 60,
  //   lineHeight: "60px",
  // }));

  const items = Array(500).fill("nothing");

  // const ItemCard = styled(Paper)(({ theme }) => {
  //   return {
  //     ...theme.typography.body1,
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //     p: 1,
  //   };
  // });

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
    <ThemeProvider>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexWrap: "wrap",
          padding: 1,
          gap: 1,
          alignContent: "flex-start",
          backgroundColor: "lightgray",
        }}
      >
        {items.map((item, index) => (
          <ItemCard>{index}</ItemCard>
        ))}
      </Box>
    </ThemeProvider>
  );
};
