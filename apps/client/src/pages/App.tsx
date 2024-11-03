import { ThemeProvider } from "@emotion/react";
import Header from "../components/Header";
import theme from "../theme";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Footer from "../components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Toolbar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            pb: 8, // Add padding to avoid overlap with fixed footer
          }}
        >
          <h1>Welcome to MyApp</h1>
          <p>This is your main application content.</p>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
