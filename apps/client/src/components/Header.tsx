import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Header() {
  return (
    <AppBar position="fixed" color="primary" sx={{ width: '100%' }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Marina Živković 
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Info</Button>
            <Button color="inherit">Contact</Button>
            
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
