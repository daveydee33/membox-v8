import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  IconButton,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { useFilter } from "../hooks/useFilter";
import ClearIcon from "@mui/icons-material/Clear";
import { getTags } from "../api";
import { useQuery } from "@tanstack/react-query";

const Left = () => {
  const {
    query,
    setQuery,
    imagesOnly,
    toggleImagesOnly,
    selectedTags,
    toggleSelectedTag,
    reset,
  } = useFilter();
  const tags = useQuery(["tags"], getTags);

  return (
    <Box
      sx={{
        flex: 0,
        minWidth: "250px",
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 2,
        m: 1,
      }}
    >
      <TextField
        label="Filter"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: query && (
            <IconButton size="small" onClick={() => setQuery("")}>
              <ClearIcon />
            </IconButton>
          ),
        }}
      />

      <FormControlLabel
        control={<Switch checked={imagesOnly} onChange={toggleImagesOnly} />}
        label="Images Only"
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.25,
        }}
      >
        {tags?.data
          ?.filter((v) => v)
          .map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant={selectedTags.includes(tag) ? "filled" : "outlined"}
              color="primary"
              size="small"
              onClick={() => toggleSelectedTag(tag)}
            />
          ))}
      </Box>

      <Button onClick={reset}>Reset</Button>
    </Box>
  );
};

export default Left;
