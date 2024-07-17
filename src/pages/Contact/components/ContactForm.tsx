import { FormEvent, useEffect, useRef, useState } from "react";

import Button from "components/Button/Button";
import { makeKey } from "@/store";
import { CircularProgress, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";

export type ContactFormType = "Volunteer" | "Partner" | "General";

interface ContactFormProps {
  type: ContactFormType;
  thanks?: boolean;
}

interface FormPurposeType {
  title: string;
  isPartner?: boolean;
}

interface FormDetailsType {
  name: string;
  email: string;
  number: string;
  message: string;
  organization?: string;
}

function ContactForm({type, thanks}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [formPurpose, setFormPurpose] = useState<FormPurposeType>({
    title: "",
    isPartner: false,
  });

  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    name: "",
    email: "",
    number: "",
    organization: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const inputStyle = {sx: {
    "& .MuiInputBase-root": {
      bgcolor: "white !important",
    }
  }}

  const types:ContactFormType[] = ["Volunteer", "Partner", "General"]

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
    // console.log(event.nativeEvent.target)
    // const formDetails = new FormData(event.nativeEvent.target as HTMLFormElement)
    // console.table(Object.fromEntries(formDetails))
    formRef.current && formRef.current.submit();
  }

  useEffect(() => {
    setFormPurpose({
      title: type,
      isPartner: type === "Partner",
    });
  }, [type])

  return thanks ? (
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
        ref={formRef}
        component="form"
        spacing={2}
        action={`${import.meta.env.VITE_FORM_ACTION}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_next" value={`${import.meta.env.VITE_APP_BASE_URL}/contact/thanks`} />
        <input type="hidden" name="_replyto" value={formDetails.email} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_honey" value="" />
        <input type="hidden" name="_subject" value={`${formDetails.name} reached out on the site [${formPurpose.title}]`} />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="Name"
            onChange={(e)=>{updateFormDetail("name", e.target.value)}}
            value={formDetails.name}
            name="name"
            required
            placeholder="Full Name"
            fullWidth
            {...inputStyle}
          />
          <TextField
            label="Email"
            onChange={(e)=>{updateFormDetail("email", e.target.value)}}
            value={formDetails.email}
            name="email"
            type="email"
            required
            placeholder="email@adress.com"
            fullWidth
            {...inputStyle}
          />
        </Stack>
        <Stack direction={{ xs: 'column', md: formPurpose.isPartner ? 'column' : 'row' }} spacing={2}>
        {
          formPurpose.isPartner ?
          (
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <TextField
                label="Phone Number"
                onChange={(e)=>{updateFormDetail("number", e.target.value)}}
                value={formDetails.number}
                name="number"
                type="tel"
                required
                placeholder="+123-phone-number"
                fullWidth
                {...inputStyle}
              />
              <TextField
                label="Organization"
                onChange={(e)=>{updateFormDetail("organization", e.target.value)}}
                value={formDetails.organization}
                name="organization"
                required
                placeholder="Your Organization Inc."
                fullWidth
                {...inputStyle}
              />
            </Stack>
          ) : (
            <TextField
              label="Phone Number"
              onChange={(e)=>{updateFormDetail("number", e.target.value)}}
              value={formDetails.number}
              name="number"
              type="tel"
              required
              placeholder="+123-phone-number"
              fullWidth
              {...inputStyle}
            />
          )
        }
          <TextField
            label="Your Message"
            onChange={(e)=>{updateFormDetail("message", e.target.value)}}
            value={formDetails.message}
            name="message"
            required
            placeholder="Leave us a message..."
            multiline
            rows={4}
            fullWidth
            {...inputStyle}
          />
        </Stack>
        <Button type="submit" disabled={isLoading}>
          { isLoading ? <CircularProgress color="secondary" size={24} /> : "Submit" }
        </Button>
      </Stack>
    </Stack>
  )
}

export default ContactForm