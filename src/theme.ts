import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#F97516",
      // main: "#4682b4",
    },
    secondary: {
      // main: "#028387",
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
