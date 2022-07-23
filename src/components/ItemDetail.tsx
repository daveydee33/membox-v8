import { Box, Typography } from "@mui/material";
import { useItemContext } from "../hooks/useItemContext";

const ItemDetail = () => {
  const { selectedItem, clearSelectedItem } = useItemContext();

  return (
    <Box
      sx={{
        flexGrow: 1,
        // display: "flex",
        // flexWrap: "wrap",
        // padding: 1,
        // gap: 1,
        // alignContent: "flex-start",
        backgroundColor: "secondary.main",
        width: "400px",
      }}
    >
      {/* <Typography variant="h6">Item Detail</Typography> */}
      <Typography variant="h6" component="h1">
        {selectedItem.title}
      </Typography>
      <Typography variant="subtitle1">{selectedItem.description}</Typography>
      <Typography variant="subtitle2">{selectedItem.details}</Typography>
      <Typography>{JSON.stringify(selectedItem.examples)}</Typography>
      <Typography>{JSON.stringify(selectedItem.related)}</Typography>
      <Typography>{JSON.stringify(selectedItem.seeAlso)}</Typography>
      {/* <Typography>ID: {selectedItem.id}</Typography> */}
      {/* <Typography>Audio: {selectedItem.audio}</Typography> */}
      {/* <Typography>Images: {selectedItem.images}</Typography> */}
    </Box>
  );
};

export default ItemDetail;
