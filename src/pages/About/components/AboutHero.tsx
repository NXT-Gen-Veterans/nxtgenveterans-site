import { H2 } from "@/components/Headings/Headings";
import { Box, Stack, Typography } from "@mui/material";

function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(assets/about-hero.png)',

      }}
    >
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        spacing={4}
        sx={{
          backdropFilter: 'blur(5px)',
          px: { xs: 4, sm: 6, md: 10 },
          py: 14,
          textAlign: 'center',
        }}
      >
        <H2>About NXT Gen Veterans</H2>
        <Typography align="center" sx={{ width: { xs: '80%', md: 'min(70%, 65rem)' } }}>
          We are dedicated to providing the most up-to-date educational tools and resources 
          for the men and women who have served our country, helping them transition into the 
          civilian workforce with ease and at no cost. We aim to make our resources easily 
          accessible and free of charge, as a tribute and gesture of gratitude for their 
          sacrifices. We are truly grateful and thankful for their service.
        </Typography>
      </Stack>
    </Box>
  )
}

export default AboutHero