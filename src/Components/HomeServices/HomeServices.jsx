import React, { useEffect } from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsightsIcon from '@mui/icons-material/Insights';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    icon: DesignServicesIcon,
    title: (
      <>
        UI/UX Design <br /> Services
      </>
    ),
  },
  {
    icon: BusinessCenterIcon,
    title: (
      <>
        Business <br /> Consultation
      </>
    ),
  },
  {
    icon: LanguageIcon,
    title: (
      <>
        Website <br /> Development
      </>
    ),
  },
  {
    icon: SupportAgentIcon,
    title: (
      <>
        Support <br /> Management
      </>
    ),
  },
  {
    icon: InsightsIcon,
    title: (
      <>
        Market <br /> Research
      </>
    ),
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
      }}
      data-aos="fade-up"
    >
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {cardData.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Grid item xs={6} sm={4} md={2.2} key={index}>
              <Card
                sx={{
                  width: '170px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  boxShadow: 'none',
                  background: `linear-gradient(to bottom, 
                    rgba(0, 114, 255, 0.05) 0%, 
                    #ffffff 50%, 
                    rgba(0, 114, 255, 0.05) 100%)`,
                  borderRadius: '16px',
                }}
                data-aos="zoom-in-up"
              >
                <IconComponent
                  className="icon3D"
                  sx={{
                    fontSize: 40,
                    color: '#0072ff',
                    transition: 'transform 0.6s ease, filter 0.6s ease',
                    filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))',
                  }}
                />

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 1.5,
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      color: '#000',
                      fontFamily: 'Poppins',
                    }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Global 3D hover animation style */}
      <style>{`
        .icon3D:hover {
          transform: scale(1.15) rotateX(15deg) rotateY(15deg);
          filter: drop-shadow(4px 8px 12px rgba(0,0,0,0.3));
        }
      `}</style>
    </Box>
  );
};

export default Services;
