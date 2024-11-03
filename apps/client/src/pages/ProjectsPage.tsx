import { Box, Typography } from '@mui/material';

function ProjectsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" color="text.secondary">
        A list or grid of projects would go here.
      </Typography>
    </Box>
  );
}

export default ProjectsPage;
