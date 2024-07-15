import { H2 } from '@/components/Headings/Headings';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import BookConsultation from "components/BookConsultation/BookConsultation";
import Button from 'components/Button/Button';
import { makeKey } from "@/store";

type Service = {
  title: string;
  imgAlt: string;
  btnUrl?: string;
  btnText?: string;
};

type ServiceCardProps = {
  service: Service;
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
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

  return (
    <Box component="section" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      textAlign: 'center',
      py: 8,
      px: 5,
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
          <ServiceCard key={makeKey(service.title)} service={service} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default ServicesSection;
