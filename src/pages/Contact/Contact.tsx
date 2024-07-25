import { useParams } from "react-router-dom"
import ContactForm, { ContactFormType } from "./components/ContactForm"
import { Link, Stack, Typography, alpha, colors } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const type = useRef(useParams().type);
  const [thanks, setThanks] = useState(false);
  const [formProps, setFormProps] = useState<{
    type: ContactFormType,
    parentThanksSetter: (state: boolean) => void
  }>({ type: "General", parentThanksSetter: setThanks });

  useEffect(() => {

    if (type.current) type.current = type.current.split("").map((c,i)=>i===0?c.toUpperCase():c).join("");
  
    const formType: ContactFormType = 
      (type.current === "Volunteer" || type.current === "Partner") 
      ? type.current
      : "General"
  
    setFormProps(state => ({ ...state, type: formType }));

  }, [setFormProps])

  return (
    <Stack
      component="section"
      sx={{
        backgroundImage: 'url(/assets/contact.png)',
        bgcolor: alpha(colors.teal[100], 0.7),
        backgroundBlendMode: "soft-light",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: thanks ? "500px" : { xs: '1200px', sm: '1120px', md: '1000px' },
        width: '100%',
        textAlign: 'center',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 6 },
      }}
      spacing={6}
      alignItems="center"
    >
      <ContactForm {...formProps} />
      <Stack alignItems="center" justifyContent="center">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ md: 2 }} alignItems="center" justifyContent="center">
          <Link fontWeight="bold" color="primary.main" target="_blank" rel="noopener noreferrer" href={`tel:${import.meta.env.VITE_ORG_PHONE}`}>{import.meta.env.VITE_ORG_PHONE_TEXT}</Link>
          <Link fontWeight="bold" color="primary.main" target="_blank" rel="noopener noreferrer" href={`mailto:${import.meta.env.VITE_ORG_EMAIL}`}>{import.meta.env.VITE_ORG_EMAIL}</Link>
        </Stack>
        <Typography fontWeight={'medium'}>Headquarters in Leesburg, Virginia</Typography>
      </Stack>
    </Stack>
  )
}

export default Contact
