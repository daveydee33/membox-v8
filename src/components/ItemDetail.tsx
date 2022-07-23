import { Box, Chip, Typography } from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* <Typography variant="h6">Item Detail</Typography> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h1">
          {selectedItem.title}
        </Typography>
        <Typography variant="subtitle1">{selectedItem.description}</Typography>
      </Box>
      <Typography variant="subtitle2">{selectedItem.details}</Typography>
      {/* <Typography>{JSON.stringify(selectedItem.examples)}</Typography> */}

      <div>
        <Typography>Examples:</Typography>
        {selectedItem.examples &&
          selectedItem.examples.map((example) => (
            <div
              key={(example.title, example.description)}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <div>{example.title}</div>
              <div>
                <i>{example.description}</i>
              </div>
            </div>
          ))}
      </div>

      <div>
        <Typography>Tags: </Typography>
        {/* <Typography>{JSON.stringify(selectedItem.tags)}</Typography> */}
        {selectedItem.tags &&
          selectedItem.tags
            .filter((v) => v)
            .map((word) => (
              <Chip
                key={word}
                label={word}
                variant="outlined"
                color="info"
                size="medium"
                sx={{ m: 0.5 }}
              />
            ))}
      </div>

      <div>
        <Typography>Related: </Typography>
        {/* <Typography>{JSON.stringify(selectedItem.related)}</Typography> */}
        {selectedItem.related &&
          selectedItem.related
            .filter((v) => v)
            .map((word) => <Chip label={word} variant="filled" color="info" />)}
      </div>

      <div>
        <Typography>See Also: </Typography>
        {/* <Typography>{JSON.stringify(selectedItem.seeAlso)}</Typography> */}
        {selectedItem.seeAlso?.map((word) => (
          <Chip label={word} variant="outlined" color="primary" size="medium" />
        ))}
      </div>

      {/* <Typography>ID: {selectedItem.id}</Typography> */}
      {/* <Typography>Audio: {selectedItem.audio}</Typography> */}
      {/* <Typography>Images: {selectedItem.images}</Typography> */}
    </Box>
  );
};

export default ItemDetail;
