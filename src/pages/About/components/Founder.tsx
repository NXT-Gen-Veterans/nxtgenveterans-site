import { H2 } from "@/components/Headings/Headings";
import { Card, CardContent, CardMedia, CardProps, Stack, Typography, alpha, colors } from "@mui/material";
import { ReactNode, useState } from "react";
import ReactCardFlip from "react-card-flip";

function Founder() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(state => !state);
  }

  return (
    <Stack
      component="section"
      alignItems="center"
      justifyContent="center"
      spacing={6}
      p={{ xs: 3, xl: 12 }}
      sx={({
        backgroundColor: colors.blue[50],
      })}
    >
      <H2>Meet our Founder</H2>
      <ReactCardFlip containerStyle={{ width: "min(100%, 500px)" }} flipDirection="horizontal" isFlipped={isFlipped}>
        <CardTemplate front onClick={handleClick}>
          <Typography fontWeight="bold" align="center">Thirulok Balakumar</Typography>
          <Typography fontSize={12} fontWeight="bold" align="center">Founder, NXT Gen Veterans</Typography>
          <Typography m={0.5} fontSize={8} color={colors.grey[700]} fontWeight="bold" align="center">Tap for more info</Typography>
        </CardTemplate>
        <CardTemplate onClick={handleClick}>
          <Stack className="card-scrollbar" sx={{
            height: '100%',
            width: '100%',
            padding: 2,
            overflowY: 'scroll',
            "&.MuiStack-root": {
                overflowY: 'scroll',
            }
          }}>
            <Typography height="fit-content" align="justify" variant="caption">
              Thirulok Balakumar, originally from Leesburg, Virginia, is a recent graduate of Virginia Commonwealth University.&nbsp;
              He envisioned a solution to one of the most pressing challenges facing servicemen and women today:&nbsp;
              transitioning to civilian life seamlessly and successfully. With a deep understanding of the complexities&nbsp;
              involved in this transition, Thirulok embarked on a mission to create a program that would empower fellow&nbsp;
              veterans with the skills, resources, and support needed to thrive in their post-military careers.&nbsp;
              The inspiration for this project came from his time in a military community in Arkansas, where he witnessed&nbsp;
              the challenges within the community when it came to job search and transitioning to the workforce.&nbsp;
              He established in-person workshops and one-on-one consulting to assist individuals, including veterans,&nbsp;
              in creating resumes and securing entry-level jobs. With NXT Gen Veterans, the vision is to provide veterans&nbsp;
              across the country with easy access to one-on-one consulting and resources to help them plan out their careers&nbsp;
              after the military.
            </Typography>
          </Stack>
        </CardTemplate>
      </ReactCardFlip>
    </Stack>
  )
}

function CardTemplate({front, children, ...props}: CardTemplateProps) {
  return (
    <Card {...props} sx={theme => ({
      height: 500,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "min(100%, 500px)",
      background: front ? 
        `linear-gradient(to bottom, 
          ${alpha(theme.palette.primary.main, 0.8)},
          ${alpha(theme.palette.primary.main, 0.5)}, 
          ${alpha(theme.palette.secondary.dark, 0.4)}, 
          ${alpha(theme.palette.primary.light, 0.3)}
        )` :
        `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.primary.main, 0.3)}, ${alpha(theme.palette.secondary.dark, 0.6)}, ${alpha(theme.palette.secondary.dark, 0.4)}, ${alpha(theme.palette.primary.light, 0.3)})`,
      px: 2,
      py: front ? 2 : 2,
      mx: "auto",
      borderRadius: 4,
    })}>
      { front ? (
        <CardMedia
          component="img"
          sx={{ width: 'min(100%, 200px)', height: "min(auto, 200px)", borderRadius: 3, objectFit: "cover", mx: "auto" }}
          image="assets/founder.png"
          title="Thirulok in a white dress shirt and a blue tie"
        />
      ) : "" }
      <CardContent sx={{
        overflow:"hidden",
        width: "100%",
        height: "fit-content",
      }}>
        {children}
      </CardContent>
    </Card>
  )
}

interface CardTemplateProps extends CardProps {
  front?: boolean;
  children: ReactNode;
}

export default Founder