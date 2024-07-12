import { Link, Stack, Typography } from "@mui/material"


function ThankYou() {
  return (
    <Stack
      spacing={6}
      alignItems={'center'}
      p={'64px 20px'}
      sx={{backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,}}
    >
      <Typography align="center" width={{ xs: '100%', md: 'min(80%, 65rem)' }} fontWeight={'bold'} variant="h6">
        We would like to express our gratitude to Programming with Mosh 
        for generously providing us with some of his tutorials. 
        For additional videos similar to these, please visit his YouTube channel.
      </Typography>
      <Link fontWeight={'bold'} href="https://www.youtube.com/@programmingwithmosh" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@programmingwithmosh</Link>
    </Stack>
  )
}

export default ThankYou