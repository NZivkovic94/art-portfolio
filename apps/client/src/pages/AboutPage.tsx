import { Box, Typography } from '@mui/material';

function AboutPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Here’s a short bio or personal story.
      </Typography>
    </Box>
  );
}

export default AboutPage;
