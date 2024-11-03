import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      component="footer"
      sx={{
        top: 'auto',
        bottom: 0,
        width: '100%',
      }}
    >
      <Toolbar sx={{ flexDirection: 'column', textAlign: 'center', width: '100%' }}>
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 1 }}>
          <Link href="/" color="inherit" underline="hover">Home</Link>
          <Link href="/projects" color="inherit" underline="hover">Projects</Link>
          <Link href="/about" color="inherit" underline="hover">About Me</Link>
          {/* <Link href="#" color="inherit" underline="hover">Contact</Link> */}
        </Box>

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

        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
