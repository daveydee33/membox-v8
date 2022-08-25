import { Box, Chip, Typography } from "@mui/material";
import { useItemContext } from "@/hooks/useItemContext";
import AudioPlayer from "./AudioPlayer";
import { wrap } from "module";

const ItemDetail = () => {
  const { selectedItem } = useItemContext();

  const getItemUrls = (title: string) => [
    `https://lla-audio.s3.amazonaws.com/B/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/A/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/C/${title}.mp3`,
    `https://lla-audio.s3.amazonaws.com/D/${title}.mp3`,
  ];

  if (!selectedItem)
    return (
      <p style={{ flex: 1, textAlign: "center" }}>Click an item for details</p>
    );

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "secondary.main",
        // px: 5, // can't do this because it causes some problems when selecting and un-selecting values.  This panel grows too much
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 1,
        minHeight: 0,
        overflow: "auto",
      }}
    >
      {/* <Typography variant="h6">Item Detail</Typography> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <AudioPlayer urls={getItemUrls(selectedItem.title)} />
        <Typography variant="h4" component="h1">
          {selectedItem.title}
        </Typography>
        <div>
          <Typography variant="h6" sx={{ fontWeight: "normal" }}>
            {selectedItem.description}
          </Typography>
        </div>
      </Box>

      {selectedItem.details && (
        <Box sx={{ border: "1px solid gray", px: 2, py: 1, borderRadius: 3 }}>
          <Typography variant="subtitle1">{selectedItem.details}</Typography>
        </Box>
      )}

      <div>
        <Typography variant="h6">Examples:</Typography>
        {selectedItem.examples &&
          selectedItem.examples.map((example) => {
            const regexTitle = new RegExp(selectedItem.title, "gi");
            const titleWithBold = example.title.replace(
              regexTitle,
              `<u>$&</u>`
            );
            const regexDescription = new RegExp(
              `\\b(${selectedItem.description.split("; ").join("|")})\\b`,
              "gi"
            );
            const descriptionWithBold = example.description.replace(
              regexDescription,
              `<u>$&</u>`
            );
            return (
              <div
                key={(example.title, example.description)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: titleWithBold }} />
                <div
                  dangerouslySetInnerHTML={{ __html: descriptionWithBold }}
                />
              </div>
            );
          })}
      </div>

      <div>
        <Typography variant="h6">Tags: </Typography>
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
                sx={{ m: 0.25 }}
              />
            ))}
      </div>

      <div>
        <Typography variant="h6">Related:</Typography>
        {/* <Typography>{JSON.stringify(selectedItem.related)}</Typography> */}
        {selectedItem.related &&
          selectedItem.related
            .filter((v) => v)
            .map((word) => (
              <Chip
                key={word}
                label={word}
                variant="filled"
                color="info"
                sx={{ m: 0.25 }}
              />
            ))}
      </div>

      <div>
        <Typography variant="h6">See Also: </Typography>
        {/* <Typography>{JSON.stringify(selectedItem.seeAlso)}</Typography> */}
        {selectedItem.seeAlso?.map((word) => (
          <Chip
            key={word}
            label={word}
            variant="outlined"
            color="primary"
            size="medium"
          />
        ))}
      </div>

      {/* <div>
        {selectedItem.images.map((image) => (
          <img src={image}></img>
        ))}
      </div> */}

      {/* <Typography>ID: {selectedItem.id}</Typography> */}
      {/* <Typography>Audio: {selectedItem.audio}</Typography> */}
      {/* <Typography>Images: {selectedItem.images}</Typography> */}
    </Box>
  );
};

export default ItemDetail;
