import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import Button from 'components/Button/Button';
import { H2 } from '../Headings/Headings';

function NewsLetter() {
  return (
    <Box component="section" sx={{ bgcolor: 'white', py: 7 }}>
      <Stack
        alignItems='center'
        gap={4}
        px={{ xs: '10%', md: 'min(10rem,20%)' }}
      >
        <H2>
          Sign up for our Newsletter
        </H2>
        <Typography align="center">
          Stay informed and connected by subscribing to our website! Receive monthly newsletters filled with the latest news, events, and updates directly to your inbox. Don't miss out on important information that can benefit you on your journey. Subscribe now and stay in the loop!
        </Typography>
        <Box component="form" sx={{ maxWidth: '400px', width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                id="first_name"
                label="First name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                id="last_name"
                label="Last name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email address"
                type="email"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Box mt={4} display='flex' justifyContent='center'>
            <Button type="submit">
              Sign up
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default NewsLetter;
