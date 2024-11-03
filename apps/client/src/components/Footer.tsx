import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <AppBar
      position="fixed" // Stick to the bottom
      color="primary"
      component="footer"
      sx={{
        top: 'auto',
        bottom: 0,
        width: '100%', // Full width
        p: 2, // Padding for inner content
        textAlign: 'center',
      }}
    >
      <Toolbar sx={{ flexDirection: 'column' }}>
        
        {/* Footer Links */}
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 1 }}>
          <Link href="#" color="inherit" underline="hover">Home</Link>
          <Link href="#" color="inherit" underline="hover">About</Link>
          <Link href="#" color="inherit" underline="hover">Services</Link>
          <Link href="#" color="inherit" underline="hover">Contact</Link>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
          <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener">
            <LinkedInIcon />
          </IconButton>
        </Box>
        
        {/* Copyright */}
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
