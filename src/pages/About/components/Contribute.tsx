import { H2 } from '@/components/Headings/Headings';
import { Typography, Button, Stack, alpha } from '@mui/material';

function Contribute() {
  return (
    <Stack
      component="section"
      sx={{
        backgroundImage: 'url(/assets/partner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme => alpha(theme.palette.primary.dark, 0.3),
        backgroundBlendMode: 'overlay',
        color: 'white',
      }}
      alignItems="center"
    >
      <Stack
        spacing={{ xs: 5, lg: 6 }}
        alignItems="center"
        sx={{
          textAlign: { xs: 'center', lg: 'left' },
          width: {lg: 'min(80%, 80rem)'}
        }}
        py={7}
        px={5}
        p={{lg: 12}}
      >
        <H2>Want to contribute to NXT Gen Veterans?</H2>
        <Typography>
          A donation to NXT Gen Veterans will enable our organization to take a significant 
          step forward in providing new educational tools and services. Your contribution will 
          make a big difference in the lives of the members who come through our program, helping 
          them transition into civilian life and the workforce with ease. Whether you choose to donate 
          or not, we are deeply grateful and thankful for your continued support in helping our veterans.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={{xs: 2, md: 3}}>
          <Button href="" variant="contained" color="secondary">
            PayPal
          </Button>
          <Button href="" variant="contained" color="secondary">
            Venmo
          </Button>
          <Button href="" variant="contained" color="secondary">
            Cashapp
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Contribute