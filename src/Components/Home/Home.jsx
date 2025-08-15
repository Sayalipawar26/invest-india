import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import homePageImage from '../../Images/portrait-happy-woman-with-digital-tablet.jpg'
import Services from '../HomeServices/HomeServices';
import HomeAbout from './HomeAbout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceDetails from '../HomeServices/ServiceDetails';



const Home = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, 
  });
}, []);

  return (
    <div>
      <Box
        sx={{
            padding:'7vmin',
  background: `linear-gradient(to bottom, 
      #003366 0%, 
      #004c99 33%, 
      #0072ff 60%, 
      #00c6ff 70%, 
      #ffffff 100%)`,          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center" >
          {/* Text Section */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box sx={{ pr: { md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Think Big. We make <br /> IT, Possible!
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: '#e0f7fa',
                  fontSize: { xs: '0.95rem', sm: '1.1rem' },
                  fontFamily: 'Poppins',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Empowering your business with cutting-edge IT solutions <br /> that drive innovation and success.
              </Typography>

              <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                    backgroundColor: '#fff',
                    color: '#0072ff',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box
              component="img"
              src={homePageImage}
              alt="Corporate Woman"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '450px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: 5,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Services/>
      <HomeAbout/>
      <ServiceDetails/>
    </div>
  );
};

export default Home;
