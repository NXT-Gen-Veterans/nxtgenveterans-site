import { H2 } from '@/components/Headings/Headings';
import { Typography, Button, Stack, alpha, colors } from '@mui/material';

function PartnerSection() {
  return (
    <Stack
      component="section"
      sx={{
        backgroundImage: 'url(/assets/partner.png)',
        bgcolor: alpha(colors.cyan[200], 0.3),
        backgroundBlendMode: "soft-light",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
      alignItems="center"
    >
      <Stack
        spacing={{ xs: 5, lg: 6 }}
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        sx={{
          textAlign: { xs: 'center', lg: 'left' },
          width: {lg: 'min(80%, 80rem)'}
        }}
        py={7}
        px={5}
        p={{lg: 12}}
      >
        <H2>We would love to partner with you</H2>
        <Typography>
          Partnering with NXT Gen Veterans offers a unique opportunity to make a tangible difference in the lives of military veterans transitioning to civilian life. By joining forces with us, you can amplify your impact and contribute to the empowerment, education, and support of those who have bravely served our country. You may have resources that we may not have. Together, we can create meaningful change, build stronger communities, and honor the sacrifices of our veterans. Partner with us and be a part of a movement that transforms lives and fosters a brighter future for those who have served. We would love to get in touch with you to make this happen.
        </Typography>
        <Button href="/contact/partner" variant="contained" color="secondary">
          Get in touch
        </Button>
      </Stack>
    </Stack>
  );
}

export default PartnerSection;
