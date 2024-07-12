import { makeKey } from "store"
import { youtubeVideos } from "./data/LearningVideos"
import YoutubeEmbed from "./components/YoutubeEmbed"
import StayTuned from "./components/StayTuned"
import ThankYou from "./components/ThankYou"
import { Stack, Typography } from "@mui/material"
import { H2, H3 } from "@/components/Headings/Headings"

function Bootcamp() {
  return (
    <>
    <StayTuned/>
    <Stack
      component="section"
      alignItems={'center'}
      spacing={6}
      p={{ xs: '10px 5px', lg: 12 }}
    >
      <H2>A few videos to get you started</H2>
      <Stack
        width={{ xs: '100%', md: 'min(100%, 60rem)' }}
        spacing={{ xs: 6, sm: 10, md: 14 }}
      >
        {youtubeVideos.map(video => (
          <Stack key={makeKey(video.title)} spacing={3}>
            <H3>{video.title}</H3>
            <Typography>{video.description}</Typography>
            <YoutubeEmbed embedId={video.embedUrl} />
          </Stack>
        ))}
      </Stack>
    </Stack>
    <ThankYou />
    </>
  )
}

Bootcamp.propTypes = {}

export default Bootcamp
