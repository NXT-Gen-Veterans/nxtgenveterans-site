import { useParams } from "react-router-dom"
import ContactForm, { ContactFormType } from "./components/ContactForm"
import { Link, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const type = useRef(useParams().type);
  const [formProps, setFormProps] = useState<{type: ContactFormType, thanks?: boolean}>({type: "General"});

  useEffect(() => {

    if (type.current) type.current = type.current.split("").map((c,i)=>i===0?c.toUpperCase():c).join("");
  
    const formType: ContactFormType = 
      (type.current === "Volunteer" || type.current === "Partner") 
      ? type.current
      : "General"
  
    setFormProps({ type: formType });

  }, [setFormProps])

  return (
    <Stack
      component="section"
      sx={{
        backgroundImage: 'url(/assets/contact.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: type.current === "Thanks" ? "500px" : { xs: '1100px', sm: '1020px', md: '900px' },
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
          <Link href="tel:+18047188630" target="_blank" rel="noopener noreferrer">+1 (804) 718 8630</Link>
          <Link href="mailto:nxtgenveterans@gmail.com" target="_blank" rel="noopener noreferrer">nxtgenveterans@gmail.com</Link>
        </Stack>
        <Typography fontWeight={'medium'}>Headquarters in Leesburg, Virginia</Typography>
      </Stack>
    </Stack>
  )
}

export default Contact
