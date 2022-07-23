import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useFilter } from "../hooks/useFilter";
import ClearIcon from "@mui/icons-material/Clear";

const Left = () => {
  const { query, setQuery } = useFilter();

  return (
    <Box
      sx={{
        minWidth: "250px",
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Filter"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: true ? (
            <IconButton size="small" onClick={() => setQuery("")}>
              <ClearIcon />
            </IconButton>
          ) : undefined,
        }}
      />
    </Box>
  );
};

export default Left;
