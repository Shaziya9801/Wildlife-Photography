import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Blog Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Blog Name
            </Typography>
            <Typography variant="body2">
              Sharing insights, tips, and stories on various topics. 
              Stay tuned for more updates and happy reading!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" variant="body2" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/about" color="inherit" variant="body2" underline="hover">
              About
            </Link>
            <br />
            <Link href="/blog" color="inherit" variant="body2" underline="hover">
              Blog
            </Link>
            <br />
            <Link href="/contact" color="inherit" variant="body2" underline="hover">
              Contact
            </Link>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Blog Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
