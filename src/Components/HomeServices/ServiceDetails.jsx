import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsightsIcon from '@mui/icons-material/Insights';

const cardData = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: '#0072ff' }} />,
    title: 'UI/UX Design Services',
    description: 'We craft intuitive, engaging interfaces that deliver seamless user experiences across all platforms.',
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 48, color: '#0072ff' }} />,
    title: 'Business Consultation',
    description: 'Strategic guidance to help streamline your business operations and boost growth through technology.',
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 48, color: '#0072ff' }} />,
    title: 'Website Development',
    description: 'We build fast, secure, and responsive websites tailored to your brand and business goals.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#0072ff' }} />,
    title: 'Support Management',
    description: '24/7 support and maintenance to keep your systems running smoothly with minimal downtime.',
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 48, color: '#0072ff' }} />,
    title: 'Market Research',
    description: 'In-depth analysis and reports that empower you to make data-driven business decisions.',
  },
];

const ServiceDetails = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 10 }, backgroundColor: '#f9fbff' }}>
     

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                background: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                transform: 'perspective(1000px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateX(4deg) rotateY(4deg)',
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
                  boxShadow: 'inset 4px 4px 8px #d1e6ff, inset -4px -4px 8px #ffffff',
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
                    color: '#555',
                    width: '220px',
                    fontFamily: 'Poppins',
                    fontSize: '0.95rem',
                    margin: '0 auto',
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Keyframes animation */}
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

export default ServiceDetails;
