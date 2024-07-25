import { H2 } from '@/components/Headings/Headings';
import { Box, Card, CardMedia, CardContent, Typography, Grow } from '@mui/material';
import BookConsultation from "components/BookConsultation/BookConsultation";
import Button from 'components/Button/Button';
import { makeKey } from "@/store";
import { useEffect, useRef, useState } from 'react';

type Service = {
  title: string;
  imgAlt: string;
  btnUrl?: string;
  btnText?: string;
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard ({ service, index }: ServiceCardProps) {
  return (
    <Card sx={{ display: 'flex', width: 'fit-content', flexDirection: 'column', alignItems: 'center', gap: 1, boxShadow: 0 }}>
      <Box
        sx={{
          p: 0.25,
          borderRadius: index === 1 ? '2rem' : '1.5rem',
          background: 'linear-gradient(to bottom right, #3A8DFF, #0033A0)'
        }}
      >
        <CardMedia
          component="img"
          image={`/assets/services${index + 1}.png`}
          alt={service.imgAlt}
          sx={{
            width: { xs: 160, lg: index === 1 ? 256 : 208 },
            height: 'auto',
            borderRadius: index === 1 ? '2rem' : '1.5rem'
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="subtitle1" component="p" align="center" fontWeight={600} mb={2.5}>
          {service.title}
        </Typography>
        {
          service.btnUrl && service.btnText ? (
            <Button link={service.btnUrl}>
              {service.btnText}
            </Button>
          ) : (
            <BookConsultation />
          )
        }
      </CardContent>
    </Card>
  );
}

function ServicesSection() {
  const [transition, startTransition] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      title: "IT Bootcamp",
      imgAlt: "",
      btnUrl: "/bootcamp",
      btnText: "Learn More",
    },
    {
      title: "One-on-One Consultation",
      imgAlt: "",
    },
    {
      title: "Dozens of Online Resources",
      imgAlt: "",
      btnUrl: "/resources",
      btnText: "Browse Now",
    },
  ];

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
  }, [containerRef])

  return (
    <Box component="section" ref={containerRef} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      textAlign: 'center',
      py: 8,
      px: 5,
      overflow: "hidden",
    }}>
      <H2>
        We meet you where you are
      </H2>
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: {xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: {xs: 5, lg: 6 },
      }}>
        {services.map((service, index) => (
          <Grow key={makeKey(service.title)} in={transition} {...(transition ? {timeout: 700 * (index + 1)} : {})} style={{ transformOrigin: '0 0 0'}}>
            {ServiceCard({service, index})}
          </Grow>
        ))}
      </Box>
    </Box>
  );
}

export default ServicesSection;
