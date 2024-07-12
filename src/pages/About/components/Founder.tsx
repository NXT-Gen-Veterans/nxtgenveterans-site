import { H2 } from "@/components/Headings/Headings";
import { Card, CardContent, CardMedia, Stack, Typography, alpha } from "@mui/material";

function Founder() {
  return (
    <Stack
      component="section"
      alignItems="center"
      justifyContent="center"
      spacing={6}
      p={{ xs: 7, xl: 12 }}
      sx={theme => ({
        background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.light, 0.3)}, ${alpha(theme.palette.secondary.dark, 0.4)}, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.primary.main, 0.8)})`
      })}
    >
      <H2>Meet our Founder</H2>
      <Card sx={{
        maxWidth: 400,
        backgroundColor: 'transparent',
        boxShadow: "none",
      }}>
        <CardMedia
          sx={{ height: 350, borderRadius: 8 }}
          image="assets/founder.png"
          title="Thirulok in a white dress shirt and a blue tie"
        />
        <CardContent sx={{
         fontWeight: "bold"
        }}>
          <Typography fontWeight="bold" align="center">Thirulok Balakumar</Typography>
          <Typography fontWeight="bold" align="center">Founder, NXT Gen Veterans</Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Founder