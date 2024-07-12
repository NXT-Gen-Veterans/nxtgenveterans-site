import { H2 } from '@/components/Headings/Headings';
import { Typography, Stack } from '@mui/material';

function Dei() {
  return (
    <Stack
      component="section"
      spacing={{ xs: 5, lg: 6 }}
      alignItems={'center'}
      sx={{
        textAlign: 'center',
      }}
      py={7}
      px={5}
      p={{lg: 12}}
    >
      <H2>Diversity and Inclusion Statement</H2>
      <Typography width={{lg: 'min(80%, 80rem)'}}>
        We are committed to fostering a culture of diversity, equity, and inclusion in all aspects of our work. 
        We believe that every individual, regardless of race, ethnicity, gender identity, sexual orientation, 
        religion, age, ability, or veteran status, brings unique perspectives and experiences that enrich our 
        organization and the communities we serve. We are dedicated to creating an environment where all voices 
        are heard, valued, and respected, and where everyone has equal opportunities to thrive. Through our 
        commitment to diversity and inclusion, we strive to create positive change, build stronger communities, 
        and empower military veterans of all backgrounds to achieve their fullest potential.
      </Typography>
    </Stack>
  );
}

export default Dei