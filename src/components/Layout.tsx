import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export const Root = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
        backgroundColor: "secondary.main",
        "> div": {
          flex: 1,
        },
      }}
    >
      {props.children}
    </Box>
  );
};

export const Main = (props: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        minHeight: 0,
        "@media (max-width: 768px)": {
          flexDirection: "column",
        },
      }}
    >
      {props.children}
    </Box>
  );
};

export const Footer = () => {
  return <footer>Footer</footer>;
};
