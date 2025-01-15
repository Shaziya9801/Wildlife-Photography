import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '300px',                
        backgroundImage: `url(https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg)`, 
        backgroundSize: 'cover',        
        backgroundPosition: 'center',   
        display: 'flex',                
        alignItems: 'center',           
        justifyContent: 'center',       
        color: 'white',                 
      }}
    >
      <Container>
        {/* <Typography variant="h2" align="center" sx={{ fontWeight: 'bold' }}>
          Your Banner Title
        </Typography> */}
        {/* <Typography variant="subtitle1" align="center">
          A catchy subtitle or tagline can go here.
        </Typography> */}
      </Container>
    </Box>
  );
};

export default Banner;
