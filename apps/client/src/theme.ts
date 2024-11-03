import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEDDD',
    },
    secondary: {
      main: '#4a90e2',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
    },
  },
});

export default theme;
