import React, { useEffect } from 'react';
import { Grid, Typography, Box, Button, Stack } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homePageImage from '../../Images/portrait-happy-woman-with-digital-tablet.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Gradient */}
        <Box
          sx={{
            padding: '7vmin',
            background: `linear-gradient(to bottom,
              #f3faff 0%,
              #e1f1fb 40%,
              #dceeff 60%,
              #ffffff 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Image Section with Dotted Box Behind (left side) */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              {/* Dotted Square (left side) */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 300,
                  height: 300,
                  backgroundImage: 'radial-gradient(#8bbbe8 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                  opacity: 0.7,
                  zIndex: 0,
                }}
              />
              {/* Image */}
              <Box
                component="img"
                data-aos="zoom-in"
                src={homePageImage}
                alt="Corporate Woman"
                sx={{
                  width: 250,
                  height: 250,
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: 5,
                  zIndex: 1,
                }}
              />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6} paddingLeft={"10vmin"}>
              <Box sx={{ pr: { md: 6 } }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#004c99',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 1,
                    fontSize: '0.9rem',
                    fontFamily: 'Poppins',
                  }}
                >
                  Choose the best IT service company
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#003366',
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
                    color: '#004c99',
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    fontFamily: 'Poppins',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Delivering smart, scalable, and secure IT solutions that fuel <br /> business transformation and long-term success.
                </Typography>

                {/* Contact + Call Section */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems="center"
                  mt={4}
                >
                  {/* Contact Us Button */}
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
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

                  {/* Call Info */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneInTalkIcon sx={{ color: '#0072ff' }} />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#004c99',
                          fontWeight: 500,
                          fontFamily: 'Poppins',
                          lineHeight: 1.2,
                        }}
                      >
                        Call for help
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#003366',
                          fontWeight: 600,
                          fontFamily: 'Poppins',
                        }}
                      >
                        +91 98765 43210
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Wavy Top Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 0,
            opacity: 0.4,
          }}
        >
          <svg viewBox="0 0 1440 320" style={{ width: '100%', height: 'auto' }}>
            <path
              fill="#dceeff"
              d="M0,96L80,106.7C160,117,320,139,480,160C640,181,800,203,960,192C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </div>
  );
};

export default HomeAbout;
