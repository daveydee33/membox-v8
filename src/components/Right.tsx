import { Grid, Box, Paper, styled, ThemeProvider } from "@mui/material";

import React from "react";

export const Right = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   height: 60,
  //   lineHeight: "60px",
  // }));

  const items = Array(1000).fill("The");

  const Card = (title: string) => {
    return (
      <Box
        sx={{
          backgroundColor: "darkcyan",
          width: "100px",
          height: "50px",
        }}
      >
        hi
      </Box>
    );
  };

  return (
    <Box
      sx={{
        // flex: 1,
        display: "flex",
        flexWrap: "wrap",
        // padding: 1,
        gap: 1,
        alignContent: "flex-start",
      }}
    >
      {items.map((item) => (
        <Card>hi</Card>
      ))}
    </Box>

    // <Grid container spacing={2}>
    //   <Grid item xs={6}>
    //     <ThemeProvider theme={"dark"}>
    //       <Box
    //         sx={{
    //           p: 2,
    //           bgcolor: "background.default",
    //           display: "grid",
    //           gridTemplateColumns: { md: "1fr 1fr" },
    //           gap: 2,
    //         }}
    //       >
    //         {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
    //           <Item key={elevation} elevation={elevation}>
    //             {`elevation=${elevation}`}
    //           </Item>
    //         ))}
    //       </Box>
    //     </ThemeProvider>
    //   </Grid>
    // </Grid>
  );
};
