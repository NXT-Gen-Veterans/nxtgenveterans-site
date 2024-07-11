import { useParams } from "react-router-dom"
import ContactForm, { ContactFormType } from "./components/ContactForm"
import { Link, Stack, Typography } from "@mui/material";
import { H2 } from "@/components/Headings/Headings";

function Contact() {
  let { type } = useParams();

  type = type && type.split("").map((c,i)=>i===0?c.toUpperCase():c).join("");

  const formType: ContactFormType = (type === "Volunteer" || type === "Partner") ? type : "General";

  return (
    <Stack
      component="section"
      sx={{
        backgroundImage: 'url(/assets/contact.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: { xs: '1000px', md: '900px' },
        width: '100%',
        textAlign: 'center',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 6 },
      }}
      spacing={{ xs: 6, md: 8 }}
      alignItems="center"
    >
      <H2>We'd love to hear from you!</H2>
      <ContactForm type={formType} />
      <Stack alignItems="center" justifyContent="center">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ md: 2 }} alignItems="center" justifyContent="center">
          <Link href="tel:+18047188630" target="_blank" rel="noopener noreferrer">+1 (804) 718 8630</Link>
          <Link href="mailto:nxtgenveterans@gmail.com" target="_blank" rel="noopener noreferrer">nxtgenveterans@gmail.com</Link>
        </Stack>
        <Typography fontWeight={'medium'}>Headquarters in Leesburg, Virginia</Typography>
      </Stack>
    </Stack>
  )
}

export default Contact
