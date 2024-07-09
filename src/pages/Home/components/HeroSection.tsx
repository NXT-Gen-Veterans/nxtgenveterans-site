import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import BookConsultation from "components/BookConsultation/BookConsultation";

function HeroSection() {
  return (
    <Box component="section" sx={{ 
      backgroundImage: "url('/assets/hero.png')",
      bgcolor: "#e3f2fd80", // colors.blue[100] at 50% alpha transparency
      backgroundBlendMode: "soft-light",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
     }}>
      <Stack
        px={{ xs: '1.5rem', lg: '3rem' }}
        py={{ xs: '4rem', lg: '6rem'}}
        spacing={2}
      >
        <Typography variant="subtitle2" component="p">
          Welcome to NXT Gen Veterans
        </Typography>

        <Box my="1rem">
          <Typography variant="h3" component="p">
            You've served us,
          </Typography>

          <Typography variant="h3" component="p" fontWeight="bold">
            now let us serve you
          </Typography>
        </Box>

        <Typography variant="subtitle1" component="p">
          We assist you on your next career step. Book a one-on-one consultation with a  member of our team to get started!
        </Typography>

        <Stack
          direction="row"
          justifyContent={{ sm: 'start' }}
          spacing={2}
        >
          <Button variant="contained" component={Link} to="/about" color="secondary">Find out more</Button>
          <BookConsultation />
        </Stack>
      </Stack>
    </Box>
  )
}

export default HeroSection