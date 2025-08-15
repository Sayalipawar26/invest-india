import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import WebIcon from '@mui/icons-material/Public';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SearchIcon from '@mui/icons-material/Search';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';

const cardData = [
  {
    icon: <WebIcon sx={{ fontSize: 48, color: '#ff7043' }} />,
    title: 'Web Development',
    description:
      'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 48, color: '#66bb6a' }} />,
    title: 'Mobile Development',
    description:
      'Create complex enterprise software, ensure reliable software integration, modernize your legacy system.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: '#ffca28' }} />,
    title: 'UI/UX Design',
    description:
      'Build the product you need on time with an experienced team that uses a clear and effective design process.',
  },
  {
    icon: <SearchIcon sx={{ fontSize: 48, color: '#26c6da' }} />,
    title: 'QA & Testing',
    description:
      'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 48, color: '#ab47bc' }} />,
    title: 'IT Consultancy',
    description:
      'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: '#ffa726' }} />,
    title: 'Dedicated Team',
    description:
      'Over the past decade, our customers succeeded by leveraging our process of building and motivating teams.',
  },
];

const OurServices = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: '#f9fbff',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#003366', mb: 1 }}
      >
        OUR SERVICES
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ color: '#444', mb: 6, fontWeight: 500 }}
      >
        We Offer a Wide Variety of IT Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index} data-aos="fade-up">
            <Card
              sx={{
                height: 270,
                p: 3,
                borderRadius: 4,
                background: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 70,
                  height: 70,
                  borderRadius: '16px',
                  background: 'linear-gradient(145deg, #f0faff, #dceeff)',
                  boxShadow:
                    'inset 4px 4px 8px #d1e6ff, inset -4px -4px 8px #ffffff',
                  mx: 'auto',
                  mb: 2,
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                {card.icon}
              </Box>

              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Poppins',
                    color: '#003366',
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    width:'220px',
                    color: '#555',
                    fontFamily: 'Poppins',
                    fontSize: '0.95rem',
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Floating Keyframe */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </Box>
  );
};

export default OurServices;
