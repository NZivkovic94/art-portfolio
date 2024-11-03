// Example for AboutPage
import { Box } from '@mui/material';

function AboutPage() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'transparent', // Adjust based on your theme
        color: 'text.primary',
        width: '100%', // Ensure full width
      }}
    >
      <h1>About Me</h1>
      <p>This is the about me page content.</p>
    </Box>
  );
}

export default AboutPage;
