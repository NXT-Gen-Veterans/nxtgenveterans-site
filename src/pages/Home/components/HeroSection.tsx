import { Link } from "react-router-dom";
import { alpha, Box, Button, colors, Slide, Stack, Typography } from "@mui/material";
import BookConsultation from "components/BookConsultation/BookConsultation";
import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [transition, startTransition] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        startTransition(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );
    
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    }
  }, [])
  
  return (
    <Box component="section" ref={containerRef} sx={{ 
      backgroundImage: "url('/assets/hero.png')",
      bgcolor: alpha(colors.teal[100], 0.5),
      backgroundBlendMode: "soft-light",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "hidden",
     }}>
      <Slide direction="up" in={transition} {...(transition ? {timeout: 500} : {})} container={containerRef.current}>
        <Stack
          px={{ xs: '1.5rem', lg: '3rem' }}
          py={{ xs: '6rem', md: '7rem' }}
          spacing={2}
        >
          <Typography variant="h5" component="p">
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

          <Typography variant="h6" fontWeight={500} component="p">
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
      </Slide>
    </Box>
  )
}

export default HeroSection