import {
  Box,
  FormControlLabel,
  IconButton,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { useFilter } from "../hooks/useFilter";
import ClearIcon from "@mui/icons-material/Clear";

const Left = () => {
  const { query, setQuery, imagesOnly, toggleImagesOnly } = useFilter();

  return (
    <Box
      sx={{
        minWidth: "250px",
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
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

      <FormControlLabel
        control={<Switch checked={imagesOnly} onChange={toggleImagesOnly} />}
        label="Images Only"
      />
    </Box>
  );
};

export default Left;
