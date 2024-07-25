import { H2 } from '@/components/Headings/Headings';
import { Box, colors, Slide, Stack, Typography, useTheme } from '@mui/material';
import Button from "components/Button/Button";
import { makeKey, useGlobalStore } from "@/store";
import { useEffect, useRef, useState } from 'react';

type Position = "tl" | "tr" | "bl" | "br";

type DecorativeDivProps = {
  withImage?: boolean;
  imageAlt?: string;
  position: Position;
};

const DecorativeDiv = ({ withImage, imageAlt, position }: DecorativeDivProps) => {
  const theme = useTheme();
  const sizeAndBorderStyle = position === "tl"
    ? {
      backgroundColor: colors.blue[100],
      borderRadius: '6.25rem 0 1.25rem 0',
      width: '11.25rem',
      height: '11.25rem',
    } : position === "tr"
    ? {
      backgroundColor: colors.blue[100],
      borderRadius: '0 6.25rem 0 1.25rem',
      border: `.25rem solid ${colors.blue[100]}`,
      width: '14.375rem',
      height: '14.375rem',
    } : position === "bl"
    ? {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0 1.25rem 0 6.25rem',
      border: `.25rem solid ${theme.palette.primary.main}`,
      width: '13.75rem',
      height: '13.75rem',
    } : position === "br"
    ? {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '1.25rem 0 6.25rem 0',
      width: '12.5rem',
      height: '12.5rem',
    } : {};

  return (
    <Box sx={{ ...sizeAndBorderStyle }} display="flex" justifyContent="center" alignItems="center">
      {withImage ? (
        <img
          src={`/assets/nxtstep-${position}.png`}
          alt={imageAlt}
          style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
        />
      ) : ("")}
    </Box>
  );
};

function OfferSection() {
  const [transition, startTransition] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const lg = useGlobalStore(state => state.screen) == "lg";
  const positions: Position[] = ["tl", "tr", "bl", "br"];

  const handleRenderDecorativeDivs = (position: Position) => {
    return (
      <DecorativeDiv
        key={makeKey(position)}
        withImage={position === "tr" || position === "bl"}
        position={position}
      />
    );
  };

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        startTransition(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <Stack
      ref={containerRef}
      component="section"
      sx={theme => ({
        background: 'rgba(255, 255, 255, 0.4)',
        backgroundBlendMode: 'overlay',
        backgroundImage: `linear-gradient(to ${lg ? "bottom" : "bottom left"}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        py: 7,
        px: 5,
        p: { xl: 12 },
        userSelect: 'none',
        overflow: 'hidden',
      })}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      spacing={{ lg: 6, xl: 10 }}
    >
      <Stack
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2.5}
        width={"34.375rem"}
        px={5}
      >
        <Box
          display={"flex"}
          gap={2.5}
          width={"100%"}
          justifyContent={"end"}
          alignItems={"end"}
        >
        { positions.slice(0,2).map(handleRenderDecorativeDivs) }
        </Box>
        <Box
          display={"flex"}
          gap={2.5}
          width={"100%"}
          justifyContent={"start"}
          alignItems={"start"}
        >
        { positions.slice(2).map(handleRenderDecorativeDivs) }
        </Box>
      </Stack>
      <Slide {...(lg ? {direction: "left"} : {direction:"up"})} in={transition} {...(transition ? {timeout: 500} : {})} container={containerRef.current}>
        <Stack
          width={{
            md: "80%",
            lg: "min(40%,31rem)"
          }}
          alignItems={{ xs: 'center', lg: 'start' }}
          textAlign={{ xs: 'center', lg: 'left' }}
          gap={5}
        >
          <H2>Let us be your next step</H2>
          <Typography>
            We are dedicated to providing the most up-to-date educational tools and resources for the men and women who have served our country,
            helping them transition into the civilian workforce with ease and at no cost. We aim to make our resources easily accessible and free of charge,
            as a tribute and gesture of gratitude for their sacrifices. We are truly grateful and thankful for their service.
          </Typography>
          <Button link="/contact">Get in touch</Button>
        </Stack>
      </Slide>
    </Stack>
  );
}

export default OfferSection;
