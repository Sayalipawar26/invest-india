import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'rgba(0, 114, 255, 0.1)', // semi-transparent bluish
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: '#003366',
        px: { xs: 3, sm: 6, md: 10 },
        py: 6,
        mt: 8,
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated dotted square */}
      <Box
        sx={{
          position: 'absolute',
          width: 120,
          height: 120,
          backgroundImage: 'radial-gradient(#0072ff30 1px, transparent 1px)',
          backgroundSize: '10px 10px',
          animation: 'moveDots 15s linear infinite',
          top: 24,
          left: 24,
          zIndex: 0,
        }}
      />

      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {/* Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Umbrella WebFX
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            Digital Innovation & Visual Magic
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            sales@umbrellawebfx.com
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            +91 89285 19729
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Follow Us
          </Typography>
          <Box>
            {[FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: '#003366',
                  m: 0.5,
                  background: 'linear-gradient(145deg, #cce6ff, #e6f3ff)',
                  boxShadow: '4px 4px 10px #a0c9e8, -4px -4px 10px #ffffff',
                  borderRadius: '10px',
                  p: 1.1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) rotateY(6deg)',
                    boxShadow: '6px 6px 14px #80bfff',
                  },
                }}
              >
                <Icon sx={{ fontSize: 22 }} />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        sx={{
          mt: 5,
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: '0.9rem', color: '#003366' }}
        >
          © {new Date().getFullYear()} Umbrella WebFX. All rights reserved.
        </Typography>
      </Box>

      {/* Moving dot animation */}
      <style>{`
        @keyframes moveDots {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100px 100px;
          }
        }
      `}</style>
    </Box>
  );
};

export default Footer;
