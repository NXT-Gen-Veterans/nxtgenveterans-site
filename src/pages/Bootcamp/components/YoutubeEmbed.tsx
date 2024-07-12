import { Box } from "@mui/material";

interface YoutubeEmbedProps {
    embedId: string;
}

function YoutubeEmbed({embedId}: YoutubeEmbedProps) {
  return (
    <Box p={{ xs: 1, sm: 2.5}} border={'2px solid black'}>
      <Box position={'relative'} width={'100%'} sx={{ aspectRatio: '16 / 9' }}>
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube.com/embed/${embedId}`}
          className="absolute top-0 left-0 bg-black w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Box>
    </Box>
  )
}

export default YoutubeEmbed