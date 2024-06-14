import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import BookConsultation from "components/BookConsultation/BookConsultation";

function HeroSection() {
  return (
    <Box component="section" sx={{ 
      backgroundImage: "url('/assets/hero.png')",
      bgcolor: "rgb(219 234 254 / 0.3)", // light blue
      backgroundBlendMode: "lighten",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
     }}>
      <Box sx={theme => ({
        px: "1.5rem",
        py: "4rem",
        [theme.breakpoints.up('lg')]: {
          px: "3rem",
          py: "6rem",
        },
        display: "flex",
        flexDirection: "column",

      })}>
        <Typography variant="subtitle2" component="span">
          Welcome to NXT Gen Veterans
        </Typography>

        <Box component="div" sx={{ marginBlock: "1rem" }}>
          <Typography variant="h3" component="h2">
            You've served us,
          </Typography>

          <Typography variant="h3" component="h2" fontWeight="bold">
            now let us serve you
          </Typography>
        </Box>

        <Typography variant="subtitle1" component="span">
          We assist you on your next career step. Book a one-on-one consultation with a  member of our team to get started!
        </Typography>

        <Box sx={theme => ({
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up('sm')]: {
            flexDirection: "row",
            justifyContent: "start",
          },
          gap: "1.25rem",
          my: "1.25rem",
        })}>
          <Button variant="contained" component={Link} to="/about" color="secondary">Find out more</Button>
          <BookConsultation />
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSection