import { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography } from '@mui/material';
import OdometerComponent from "components/Odometer/Odometer";
import { H2 } from "@/components/Headings/Headings";

function BannerSection() {
    const [value, setValue] = useState(0);
    const containerRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      if (!containerRef.current) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          setValue(entry.isIntersecting ? 200 : 0);
        },
        {
          threshold: 0.5,
        }
      );
      
      observer.observe(containerRef.current);
  
      return () => {
        observer.disconnect();
      }
    }, []);

  return (
    <Stack
      ref={containerRef}
      component="section"
      direction={{ md: 'row-reverse' }}
      justifyContent={{ xs: 'space-around', xl: 'center' }}
      spacing={{ xs: 6, lg: 16 }}
      px={5}
      py={7}
    >
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minWidth="fit-content">
        <OdometerComponent value={value} />
        <Typography variant="h6" fontWeight={"bold"} sx={{ color: { xs: 'primary.main', lg: 'black' } }}>
          in resource material
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'start'},
        textAlign: { xs: 'center', md: 'left' },
        width: {md: "min(60%,35rem)"}
      }}>
        <H2>
          Learn a new tech skill with ease
        </H2>
        <Typography>
          We offer dozens of resources and tutorials plus a curriculum tailored to meet you where you are.
        </Typography>
      </Box>
    </Stack>
  );
}

export default BannerSection;
