import { FormEvent, useEffect, useState } from "react";

import Button from "components/Button/Button";
import { makeKey } from "@/store";
import { Box, CircularProgress, Link, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { H2 } from "@/components/Headings/Headings";


function ContactForm({type}: ContactFormProps) {

  const [formPurpose, setFormPurpose] = useState<FormPurposeType>({
    title: "",
    isPartner: false,
  });

  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isThanks, setIsThanks] = useState(false);

  const inputProps = {
    sx: {
      "& .MuiInputBase-root": {
        bgcolor: "secondary.main",
      }
    },
    fullWidth: true,
    required: true,
  };

  const types:ContactFormType[] = ["Volunteer", "Partner", "General"];

  function toggleType(event: SelectChangeEvent) {
    setFormPurpose({
        title: event.target?.value,
        isPartner: event.target?.value === "Partner",
    });
  }

  function updateFormDetail<T extends keyof FormDetailsType>(detail: T, newValue: string) {
    setFormDetails(state => ({...state, [detail]: newValue}));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const fields = Array.from(Object.entries(formDetails)).map(field => ({
      objectTypeId: import.meta.env.VITE_CONTACT_OBJECT_TYPE_ID,
      name: field[0],
      value: field[1]
    }));

    const body = JSON.stringify({
      fields,
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow NXT Gen Veterans to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from NXT Gen Veterans."
            }
          ]
        }
      }
    });

    fetch(import.meta.env.VITE_FORM_ACTION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    })
    .then(response => {
      setIsLoading(false);
      if (response.ok) {
        setIsThanks(true);
      } else {
        return response.json().then(err => {
          throw new Error(err.message || 'Form response not ok');
        });
      }
    })
    .catch(error => {
      console.error("The form did not send:", error.message);
    });
  }

  useEffect(() => {
    setFormPurpose({
      title: type,
      isPartner: type === "Partner",
    });
  }, [type])

  return (
    <Stack
      spacing={{ xs: 6, md: 8 }}
      alignItems={'center'}
      width='100%'
    >
      <H2>{isThanks ? "Thanks for reaching out!" : "We'd love to hear from you!"}</H2>
      { isThanks ? (
        <Stack
          spacing={3}
          sx={{
            bgcolor: "#ffffff80",
            borderRadius: { xs: '0.75rem', lg: '1.5rem' },
            padding: 6,
            width: { md: "min(70%, 50rem)" },
          }}
        >
          <Typography>We've received your message and will get back to you soon!</Typography>
        </Stack>
      ) : (
        <Stack
          spacing={3}
          sx={{
            bgcolor: "#ffffff80",
            borderRadius: { xs: '0.75rem', lg: '1.5rem' },
            padding: 6,
            width: { md: "min(70%, 50rem)" },
          }}
        >
          <Select
            sx={{
              fontWeight: 'bold',
              width: 'fit-content',
              "& .MuiInputBase-root": {
                border: '2px solid primary.main',
              },
            }}
            value={formPurpose.title}
            displayEmpty
            onChange={toggleType}
          >
            {types.map(title => (
              <MenuItem
                value={title}
                key={makeKey(title)}
                {...{
                  disabled: title !== formPurpose.title ?
                    false : true
                }}
              >{title}</MenuItem>
            ))}

          </Select>

          <Stack
            component="form"
            spacing={2}
            onSubmit={handleSubmit}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <TextField
                label="First Name"
                onChange={(e)=>{updateFormDetail("firstname", e.target.value)}}
                value={formDetails.firstname}
                name="firstname"
                placeholder="First Name"
                {...inputProps}
              />
              <TextField
                label="Last Name"
                onChange={(e)=>{updateFormDetail("lastname", e.target.value)}}
                value={formDetails.lastname}
                name="lastname"
                placeholder="Last Name"
                {...inputProps}
              />
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <TextField
                label="Email"
                onChange={(e)=>{updateFormDetail("email", e.target.value)}}
                value={formDetails.email}
                name="email"
                type="email"
                placeholder="email@adress.com"
                {...inputProps}
              />
              <TextField
                label="Phone Number"
                onChange={(e)=>{updateFormDetail("phone", e.target.value)}}
                value={formDetails.phone}
                name="phone"
                type="tel"
                placeholder="+123-phone-number"
                {...inputProps}
              />
            </Stack>
            <Stack direction="column" spacing={2}>
            { formPurpose.isPartner ? (
              <TextField
                label="Organization"
                onChange={(e)=>{updateFormDetail("organization", e.target.value)}}
                value={formDetails.organization}
                name="organization"
                placeholder="Your Organization Inc."
                {...inputProps}
              />
            ) : ""}
              <TextField
                label="Your Message"
                onChange={(e)=>{updateFormDetail("message", e.target.value)}}
                value={formDetails.message}
                name="message"
                placeholder="Leave us a message..."
                multiline
                rows={4}
                {...inputProps}
              />
            </Stack>

            <Box mt={4} px={{xs:2,sm:4}}>
              <Typography sx={{fontSize: 10, lineHeight: 1.5}} textAlign={{xs:'justify', sm:'center'}} id="ewf_datadisclaimer">
                We use HubSpot as an automation service. By submitting this form, you agree that the information you provide will be transferred to HubSpot for processing in accordance with their&nbsp;
                <Link href="https://legal.hubspot.com/privacy-policy" target="_blank">Privacy Policy</Link>.
              </Typography>
            </Box>

            <Button type="submit" disabled={isLoading}>
              { isLoading ? <CircularProgress color="secondary" size={24} /> : "Submit" }
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}

export type ContactFormType = "Volunteer" | "Partner" | "General";

interface ContactFormProps {
  type: ContactFormType;
}

interface FormPurposeType {
  title: string;
  isPartner?: boolean;
}

interface FormDetailsType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  organization?: string;
}

export default ContactForm