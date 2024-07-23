import React from 'react';
import { Container, Grid, Typography, Box, Divider, Link as MuiLink, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoLink from 'components/LogoLink/LogoLink';
import BookConsultation from 'components/BookConsultation/BookConsultation';
import TermsOfUse from '../TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'primary.main', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
          {/* Company ID */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: "fit-content" }}>
              <LogoLink variant />
              <Box>
                <Typography>Proudly serving our heroes</Typography>
                <Typography>We are a Virginia 501(c)3 nonprofit</Typography>
              </Box>
              <BookConsultation variant />
            </Box>
          </Grid>
          {/* Info Blocks */}
          <Grid item xs={12} lg={9}>
            <Grid container spacing={5}>
              {/* Services Block */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h6">Services</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MuiLink component={Link} to="/bootcamp" color="inherit">IT Bootcamp</MuiLink>
                    <MuiLink component={Link} to="/resources" color="inherit">Resources</MuiLink>
                  </Box>
                </Box>
              </Grid>
              {/* Organization Block */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h6">Organization</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MuiLink component={Link} to="/about" color="inherit">About Us</MuiLink>
                    <MuiLink component={Link} to="/contact" color="inherit">Partner with Us</MuiLink>
                  </Box>
                </Box>
              </Grid>
              {/* Legal Block */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h6">Legal</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TermsOfUse color="inherit" width="fit-content" />
                    <PrivacyPolicy color="inherit" width="fit-content" />
                  </Box>
                </Box>
              </Grid>
              {/* Contact Block */}
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: "fit-content" }}>
                  <Typography variant="h6">Contact</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MuiLink href="tel:+18047188630" color="inherit">+1 (804) 718 8630</MuiLink>
                    <MuiLink href="mailto:nxtgenveterans@gmail.com" color="inherit">nxtgenveterans@gmail.com</MuiLink>
                    <Button component={Link} to="/contact" variant="contained" color="secondary">Contact Us</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Copyright */}
        <Box sx={{ width: '100%', mt: 5 }}>
          <Divider sx={{ bgcolor: 'white' }} />
          <Typography align="center" sx={{ py: 2 }}>Copyright © 2024 NXT Gen Veterans</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

