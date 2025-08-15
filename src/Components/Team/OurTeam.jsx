import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import team1 from '../../Images/portrait-happy-woman-with-digital-tablet.jpg';
import team2 from '../../Images/portrait-happy-woman-with-digital-tablet.jpg';
import team3 from '../../Images/portrait-happy-woman-with-digital-tablet.jpg';

const teamData = [
  {
    name: 'Mrs. Preeti Mali',
    title: 'Founder',
    description: 'A visionary leader with a passion for innovation, driving excellence in every project we undertake.',
    image: team1,
  },
  {
    name: 'Mr. Akshay',
    title: 'Digital Transformation Manager',
    description: 'Expert in digital strategy and implementation, leading our transformation initiatives.',
    image: team2,
  },
  {
    name: 'Mr. Sangram',
    title: 'VFX Project Manager',
    description: 'Creative genius in visual effects, bringing extensive experience to our visual experiences.',
    image: team3,
  },
];

const OurTeam = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: '#f9fbff',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" color="#003366" gutterBottom>
        MEET OUR EXPERTS
      </Typography>
      <Typography variant="h5" sx={{ color: '#444', mb: 6 }}>
        The Minds Behind <br /> Our Success
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {teamData.map((member, index) => (
          <Grid item xs={12} md={10} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
              }}
            >
              {/* Circular Image */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                data-aos="fade-left"
                data-aos-duration="1000"
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: 4,
                }}
              />

              {/* Text Content */}
              <Box
                data-aos="fade-right"
                data-aos-duration="1000"
                sx={{ textAlign: { xs: 'center', sm: 'left' },fontFamily:'poppins' }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#003366', fontSize: '1.5rem' }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#0072ff', fontSize: '1.1rem', mb: 1 }}>
                  {member.title}
                </Typography>
                <Divider sx={{ width: 250, borderBottomWidth: 2, borderColor: '#0072ff', mb: 1, mx: { xs: 'auto', sm: 0 } }} />
                <Typography variant="body1" sx={{ color: '#555', maxWidth: 600, fontSize: '1rem' }}>
                  {member.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;
