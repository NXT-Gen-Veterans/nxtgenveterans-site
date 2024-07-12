import { H2 } from "@/components/Headings/Headings";
import { Box, Stack, Typography, alpha } from "@mui/material";

function ResourceHero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(assets/rsrc-hero.png)',

      }}
    >
      <Stack
        alignItems={'center'}
        spacing={4}
        sx={{
          backgroundColor: theme => alpha(theme.palette.secondary.light, 0.85),
          backdropFilter: {xs: 'blur(7.5px)', xl:'blur(15px)'},
          px: { xs: 4, sm: 6, md: 10 },
          py: 14,
        }}
      >
        <H2>Resources</H2>
        <Typography align="center" sx={{ width: { xs: '80%', lg: 'min(70%, 65rem)' } }}>
          Explore our resource links to access valuable information, tools, and 
          resources tailored to support military veterans in their transition to 
          civilian life. From career guidance and educational opportunities to 
          financial assistance and mental health resources, our carefully curated 
          collection offers a wealth of support to help you thrive post-service. 
          Whether you're just starting your transition journey or seeking additional 
          support along the way, our resource links are your gateway to valuable information 
          and support. Click here to discover the resources available to you and take control 
          of your transition today.
        </Typography>
      </Stack>
    </Box>
  )
}

export default ResourceHero