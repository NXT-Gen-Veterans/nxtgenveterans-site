import { Box, Button, Divider, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoLink from 'components/LogoLink/LogoLink';
import BookConsultation from 'components/BookConsultation/BookConsultation';
import TermsOfUse from '../TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { Email, LinkedIn, Phone } from '@mui/icons-material';

export default function Footer() {
  return (
    <Stack
      component="footer"
      justifyContent="center"
      p={5}
      px={{md:7}}
      width="100%"
      color="black"
      sx={{
        backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        "& a": {
          lineBreak: "strict"
        }
      }}
    >
      <Stack direction={{xs: "column", md:"row"}} spacing={{xs:5, md:10}} justifyContent={{md:"space-between", lg: "center"}} alignItems="start">
        {/* Company ID */}
        <Stack minWidth="fit-content">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: "fit-content" }}>
            <LogoLink />
            <Box>
              <Typography>Proudly serving our heroes</Typography>
              <Typography>We are a Virginia 501(c)3 nonprofit</Typography>
            </Box>
            <BookConsultation />
          </Box>
        </Stack>
        {/* Info Blocks */}
        <Stack direction={{xs: "column", md: "row"}} flexWrap="wrap" justifyContent={{xs: "center", sm: "space-between"}} useFlexGap gap={5}>
          {/* Services Block */}
          <Stack spacing={1} minWidth="fit-content">
            <Typography variant="h6">Services</Typography>
            <Stack>
              <MuiLink component={Link} to="/bootcamp" color="inherit">IT Bootcamp</MuiLink>
              <MuiLink component={Link} to="/resources" color="inherit">Resources</MuiLink>
            </Stack>
          </Stack>
          {/* Organization Block */}
          <Stack spacing={1} minWidth="fit-content">
            <Typography variant="h6">Organization</Typography>
            <Stack>
              <MuiLink component={Link} to="/about" color="inherit">About Us</MuiLink>
              <MuiLink component={Link} to="/contact" color="inherit">Partner with Us</MuiLink>
            </Stack>
          </Stack>
          {/* Legal Block */}
          <Stack spacing={1} minWidth="fit-content">
            <Typography variant="h6">Legal</Typography>
            <Stack>
              <TermsOfUse color="inherit" width="fit-content" />
              <PrivacyPolicy color="inherit" width="fit-content" />
            </Stack>
          </Stack>
          {/* Contact Block */}
          <Stack spacing={1} minWidth="fit-content">
            <Typography variant="h6">Contact</Typography>
            <Stack>
              <MuiLink color="inherit" target="_blank" rel="noopener noreferrer" href={`tel:${import.meta.env.VITE_ORG_PHONE}`}>
                <Phone sx={{mr:1}} />
                {import.meta.env.VITE_ORG_PHONE_TEXT}
              </MuiLink>
              <MuiLink color="inherit" target="_blank" rel="noopener noreferrer" href={`mailto:${import.meta.env.VITE_ORG_EMAIL}`}>
                <Email sx={{mr:1}} />
                {import.meta.env.VITE_ORG_EMAIL}
              </MuiLink>
              <MuiLink color="inherit" target="_blank" rel="noopener noreferrer" href={`${import.meta.env.VITE_ORG_LINKEDIN}`}>
                <LinkedIn sx={{mr:1}} />
                LinkedIn
              </MuiLink>
              <Button component={Link} to="/contact" variant="contained" color="primary" sx={{mt:2}}>Contact Us</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* Copyright */}
      <Box sx={{ width: '100%', mt: 5 }}>
        <Divider />
        <Typography align="center" sx={{ py: 2 }}>Copyright © 2024 NXT Gen Veterans</Typography>
      </Box>
    </Stack>
  );
}

