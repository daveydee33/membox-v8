import { Box, TextField } from "@mui/material";
import React from "react";
import { useFilter } from "../hooks/useFilter";

const Left = () => {
  const { query, setQuery } = useFilter();

  return (
    <Box
      sx={{
        minWidth: "250px",
        backgroundColor: "secondary.main",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
};

export default Left;
