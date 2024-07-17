import { H2 } from "@/components/Headings/Headings"
import { Box, Stack, Theme, Typography, alpha } from "@mui/material"
import { makeKey } from "@/store";

function Mission() {
  return (
    <Stack
      component="section"
      sx={theme => ({
        background: {
          xs: `linear-gradient(to bottom right, ${alpha(theme.palette.secondary.light, 1)}, #fff, #fff, ${alpha(theme.palette.primary.light, 0.7)})`,
          md: 'white',
        }
      })}
      direction={{ xs: 'column', md: 'row'}}
      textAlign={{ xs: 'center', md: 'left' }}
      justifyContent={{ md: 'center'}}
      alignItems={'center'}
      spacing={{ md: 10 }}
      p={{ xs: 7, xl: 12}}
    >
      <Stack width={{ xs: '100%', md: 'min(45%,40rem)'}}>
        <H2>Our Mission</H2>
        <Typography>
          We are dedicated to empowering military veterans in their transition to civilian life 
          by providing personalized one-on-one consulting services. Our mission is to assist 
          veterans in advancing their career plans and goals through comprehensive support and 
          educational resources. By offering tailored guidance and access to valuable tools, we 
          aim to facilitate a smooth and successful transition, enabling veterans to achieve their 
          full potential in their post-military careers.
        </Typography>
      </Stack>
      <Box width={210} sx={{display: {xs: "none", md: "block"}}}>
        <Stack
          spacing={'6px'}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent={'space-between'}
        >
          {missionImages.map(image => (
            <Box key={makeKey(image.title)} sx={{ ...image.imgStyles }}>
              <img
                src={image.img}
                alt={image.title}
                loading="lazy"
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

const missionImages = [
  {
    img: "assets/mission1.png",
    title: "a blue sky with streaky clouds",
    imgStyles: {
      borderRadius: "10px 0 0 0",
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
      overflow: "hidden",
      "& img": {
        width: "98px",
      }
    },
  },
  {
    img: "assets/mission2.png",
    title: "the top of a tree",
    imgStyles: {
      borderRadius: "0 10px 0 0",
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
      overflow: "hidden",
      "& img": {
        width: "98px",
      }
    },
  },
  {
    img: "assets/mission3.png",
    title: "a long road stretching into the distance",
    imgStyles: {
      borderRadius: "0 0 10px 10px",
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
      overflow: "hidden",
      "& img": {
        width: "208px",
      }
    },
  },
]

export default Mission