import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)',
        
        px: 4
      }}
    >
      <Grid
        container
        
        sx={{
          maxWidth: '1200px',
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' } // 🔧 Key line
        }}
      >
        {/* Left: Text */}
        <Grid item xs={12} md={8}>
          <Box sx={{ pr: { md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Think Big. We make IT, Possible!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: '#e0f7fa',
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontFamily: 'Poppins'
              }}
            >
              Empowering your business with cutting-edge IT solutions that drive innovation and success.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                backgroundColor: '#fff',
                color: '#0072ff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#e3f2fd'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={4} sx={{ mt: { xs: 4, md: 0 } }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80"
            alt="Corporate Woman"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '450px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: 5
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
