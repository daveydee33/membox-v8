import { Box, Grid, Paper, styled, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";

export const Root = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {props.children}
    </Box>
  );
};

export const Header = (props: { children: ReactNode }) => {
  // return <header>Header</header>;

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "primary.dark",
      }}
    >
      {props.children}
    </Box>
  );
};

export const Main = (props: { children: ReactNode }) => {
  // return <main>Main</main>;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {props.children}
      {/* <Grid container spacing={2}>
        <Grid item xs={6}>
          <ThemeProvider theme={"dark"}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export const Footer = () => {
  return <footer>Footer</footer>;
};
