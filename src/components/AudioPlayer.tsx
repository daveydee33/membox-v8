import ReactPlayer from "react-player/file";
import React, { useState, useEffect } from "react";
// import buttonImg from "../assets/audio.png";
const buttonImg = "./assets/audio.png";

function AudioPlayer({ urls }: { urls: string | string[] }) {
  // state hooks
  const [playing, setPlaying] = useState(false);
  const [controls, setControls] = useState(false); // probably false, because we don't need the progress bar and buttons for such short audio clips.  for longer audio phrases and videos or dialoges we will probably set this to true.
  const [light, setLight] = useState(buttonImg); // we can set this to true, or a url for a preview image. if true, it will fetch the thumbnail image (but not good for 1000 items on a page).  But if we set it to false, then it doesn't display the play button on top of the image.  I tried setting this to any image, but it doesn't display for audio anyway, so I'm just going to use the same button image for now.
  // const [light, setLight] = useState(
  //   "https://avatars.githubusercontent.com/u/1926029?s=48&v=4"
  // ); // this is good because it won't load the full player untill someone has clicked on it (good for when I'm loading 1000 items on a page, it doesn't load the full player for each of these, only when the user clicks on one.)
  const [playIndex, setPlayIndex] = useState(0);

  useEffect(() => {
    setPlaying(false);
    setPlayIndex(0);
  }, [urls]);

  const nextAudio = () => {
    setPlaying(false);
    const lastItem = urls.length - 1;
    if (playIndex !== lastItem) {
      setPlayIndex(playIndex + 1);
    } else {
      setPlaying(false);
      setPlayIndex(0);

      // a hack that seems to get the preview play button to load again at the end of playing the array.  might not always work, and probably should be a useEffect, but it works for now.
      // setLight(false);
      // setLight(true);
      // setLight("./audio.png");
    }
  };

  return (
    <ReactPlayer
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        setPlaying((v) => !v);
      }}
      url={urls[playIndex]}
      onEnded={nextAudio}
      // config={{
      //   file: {
      //     forceAudio: true,
      //   },
      // }}
      playing={playing}
      loop={false}
      controls={controls} // Set to true or false to display native player controls.  For Vimeo videos, hiding controls must be enabled by the video owner.
      // light={light} // Set to true to show just the video thumbnail, which loads the full player on click.  Pass in an image URL to override the preview image
      // volume
      // muted
      // playbackRate
      // width
      // height
      style={{
        backgroundImage: `url("${buttonImg}")`,
        backgroundSize: "cover",
        cursor: "pointer",
      }}
      width="50px"
      height="50px"
      onError={(error) => console.error("React-Player error: ", error)}
      // progressInterval
      // playsinline
      // pip
      // stopOnUnmount
      // fallback
      // wrapper
      // playIcon
      // previewTabIndex
      // config
    />
  );
}

export default AudioPlayer;
