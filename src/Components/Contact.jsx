import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, sm: 6, md: 10 },
        backgroundColor: '#f9fbff',
        fontFamily: 'Poppins, sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#003366"
        gutterBottom
      >
        Contact Us
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ color: '#666', mb: 6 }}
      >
        We'd love to hear from you. Reach out or fill out the form below.
      </Typography>

      {/* Contact Info */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <EmailIcon color="primary" />
            <Box>
              <Typography fontWeight={600}>Email</Typography>
              <Typography variant="body2">info@umbrellawebfx.com</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <PhoneIcon color="primary" />
            <Box>
              <Typography fontWeight={600}>Phone</Typography>
              <Typography variant="body2">+91 98765 43210</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <LocationOnIcon color="primary" />
            <Box>
              <Typography fontWeight={600}>Address</Typography>
              <Typography variant="body2">123 Umbrella Street, Pune, India</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Contact Form */}
      <Box display="flex" justifyContent="center">
        <Paper
          elevation={0}
          sx={{
            width: { xs: '100%', md: '50%' },
            p: { xs: 3, sm: 5 },
            borderRadius: 3,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
          }}
        >
          <form>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField fullWidth label="Name" variant="outlined" required />
              </Grid>
              <Grid item>
                <TextField fullWidth label="Email" type="email" variant="outlined" required />
              </Grid>
              <Grid item>
                <TextField fullWidth label="Phone" type="tel" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#0072ff',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                    textTransform: 'none',
                    px: 5,
                    '&:hover': {
                      backgroundColor: '#005fcc',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
