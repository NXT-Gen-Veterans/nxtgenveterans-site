import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';

function NewsLetter() {
  return (
    <Box sx={{ bgcolor: 'white', py: 7 }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, px: { xs: '10%', md: '20%' } }}>
        <Typography variant="h6" align="center" sx={{ fontSize: { lg: '1.75rem' } }}>
          Sign up for our Newsletter
        </Typography>
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
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NewsLetter;
