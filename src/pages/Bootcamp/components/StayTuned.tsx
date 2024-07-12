import { H2 } from "@/components/Headings/Headings";
import { Stack, Typography } from "@mui/material";

function StayTuned() {
  return (
    <Stack
      alignItems={'center'}
      spacing={4}
      sx={{
        backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        px: { xs: 4, sm: 6, md: 10 },
        py: 14,
      }}
    >
      <Stack alignItems={'center'}>
        <H2>Stay Tuned!</H2>
        <Typography variant="h5" component="p" fontWeight={500}>IT Bootcamp coming soon</Typography>
      </Stack>
      <Typography align="center">
        Currently, we are in the process of developing content for our upcoming IT bootcamps. 
        These boot camps will offer 8 and 12-week programs covering various IT industries. 
        In the meantime, we're excited to announce that we've obtained permission from 
        professional YouTube instructors to provide access to their full programming language 
        courses. Rest assured, we will keep you updated on our progress as we prepare to launch 
        our bootcamps. It's important to note that our IT bootcamps will only be accessible and 
        provided free of charge to our veterans.
      </Typography>
    </Stack>
  )
}

export default StayTuned