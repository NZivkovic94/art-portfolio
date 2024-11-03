import { Box, Grid, Card, CardMedia } from '@mui/material';

function HomePage() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'transparent', // Make sure it's transparent or use theme colors as needed
        color: 'text.primary',
        width: '100%', // Ensure full width
      }}
    >
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://via.placeholder.com/300?text=Image+${item}`}
                alt={`Image ${item}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
