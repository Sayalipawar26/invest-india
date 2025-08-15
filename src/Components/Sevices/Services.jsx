import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Box, Grid, Typography, Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import service from '../../Images/portrait-happy-woman-with-digital-tablet.jpg'
import OurServices from './OurServices';

const HeroSection = () => (
  <Box
    sx={{
      px: '7vmin',
      py: 6,
      background: `linear-gradient(to bottom right, #d0f0f8, #a0e1eb, #b8e9f0)`,
      maxWidth: '100%',
      overflowX: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      {/* LEFT: Text */}
      <Grid item xs={12} md={6} data-aos="fade-right">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            color: '#003c5e',
            fontSize: { xs: '1.6rem', sm: '2rem', md: '2.3rem' },
            lineHeight: 1.3,
            textAlign: { xs: 'center', md: 'left' },
            fontFamily: 'Poppins',
          }}
        >
          Empowering Your Business <br /> with Smart IT Solutions
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#333',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            textAlign: { xs: 'center', md: 'left' },
            fontFamily: 'Poppins',
          }}
        >
          We deliver cutting-edge IT services and infrastructure support <br />
          to streamline your operations and protect your assets.
        </Typography>

        <Grid container spacing={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          {[['11', 'Years Experience'], ['25', 'Products'], ['100+', 'Projects Completed']].map(([num, label], i) => (
            <Grid item key={i}>
              <Box>
                <Typography variant="h6" fontWeight="bold" color="black">
                  {num}
                </Typography>
                <Typography variant="body2">{label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* RIGHT: Circular Image */}
      <Grid item xs={12} md={6} data-aos="fade-left">
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Box
            component="img"
            src={service}
            alt="IT Services Hero"
            sx={{
              width: '80%',
              maxWidth: 450,
              borderRadius: '50%',
              mx: 'auto',
              display: 'block',
              boxShadow: 5,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);




const whyChoosePoints = [
  '23 Years of Experience',
  '24/7 Customer Support',
  'Certified IT Professionals',
  'Tailored Solutions for Every Business',
  'Cutting-edge Technology',
  'Proven Track Record of Success',
];

const AboutSection = () => (
  <Box sx={{ py: { xs: 10, md: 8 }, backgroundColor: '#f0f7ff', fontFamily: 'Poppins, sans-serif', px: { xs: 9, md: 2, lg: 1 } }}>
    <Grid container alignItems="center" justifyContent="center" spacing={1}>

      {/* Left: Image */}
      <Grid item xs={12} md={4} data-aos="fade-right" >
        <Box
          component="img"
          src={service}
          alt="About"
          sx={{
            width: '80%',
            maxWidth: 300,
            borderRadius: 2,
            boxShadow: 4,
            mx: 'auto',
            display: 'block',
          }}
        />
      </Grid>

      {/* Right: Cards */}
      <Grid item xs={12} md={8}>
        <Grid container spacing={1}>

          {/* About Us Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', color: '#00264d' }}
              >
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We are a trusted IT solutions provider, dedicated to helping businesses thrive  <br />in today’s digital era.
                Our team delivers end-to-end technology services including custom  <br /> software development, cloud
                infrastructure, cybersecurity, data management, and IT consulting.   <br />We combine technical expertise with a
                deep understanding of business challenges   <br />to design scalable and secure solutions tailored to
                your specific needs. Whether you're a startup,  <br /> SME, or enterprise, we ensure
                seamless IT operations, continuous innovation, and   <br /> reliable support so
                you can focus on what matters most—growing your business.              </Typography>
            </Card>
          </Grid>

          {/* Why Choose Us Card */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Card sx={{ p: 1, borderRadius: 3, boxShadow: 3, backgroundColor: '#e6f2ff' }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)', color: '#003366' }}
              >
                Why Choose Us
              </Typography>
              <List dense>
                {whyChoosePoints.map((point, index) => (
                  <ListItem key={index} disablePadding sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ color: '#0072ff', minWidth: 32 }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">{point}</Typography>} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  </Box>
);



export default function CCTVLayout() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f9fc', color: '#003366' }}>
      <HeroSection />
      <OurServices/>
      <AboutSection />
    </Box>
  );
}
