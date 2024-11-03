import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: '#6200ea',  // Set your custom primary color here
      },
      secondary: {
        main: '#03dac6',  // Set your custom secondary color here
      },
      text: {
        primary: '#000000',  // Default text color
        secondary: '#757575', // Secondary text color
      },
    },
});

export default theme;