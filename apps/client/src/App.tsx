import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', bgcolor: 'primary.main', }}>
          <Header />
          <Toolbar />

          {/* Main content Box */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: '100%', // Ensure full width
              bgcolor: 'transparent', // Optional: set background color as needed
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Box>
        </Box>

        {/* Footer should be outside the flex container for full width */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
