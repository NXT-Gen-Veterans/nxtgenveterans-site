import { useEffect, useState } from "react";

import Button from "components/Button/Button";
import { makeKey } from "store";
import { MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";

export type ContactFormType = "Volunteer" | "Partner" | "General";

interface ContactFormProps {
  type: ContactFormType;
}

interface FormPurposeType {
  title: string;
  isPartner?: boolean;
}

function ContactForm({type}: ContactFormProps) {
  const [formPurpose, setFormPurpose] = useState<FormPurposeType>({
    title: "",
    isPartner: false,
  });

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

  useEffect(() => {
    setFormPurpose({
      title: type,
      isPartner: type === "Partner",
    });
  }, [type])

  return (
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
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField label="Name" required placeholder="Full Name" fullWidth {...inputStyle} />
          <TextField label="Email" type="email" required placeholder="email@adress.com" fullWidth {...inputStyle} />
        </Stack>
        <Stack direction={{ xs: 'column', md: formPurpose.isPartner ? 'column' : 'row' }} spacing={2}>
        {
          formPurpose.isPartner ?
          (
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <TextField label="Phone Number" type="tel" required placeholder="+123-phone-number" fullWidth {...inputStyle} />
              <TextField label="Organization" required placeholder="Your Organization Inc." fullWidth {...inputStyle} />
            </Stack>
          ) : (
            <TextField label="Phone Number" type="tel" required placeholder="+123-phone-number" fullWidth {...inputStyle} />
          )
        }
          <TextField label="Your Message" required placeholder="Leave us a message..." multiline rows={4} fullWidth {...inputStyle} />
        </Stack>
        <Button type="submit">Submit</Button>
      </Stack>
  </Stack>
  )
}

export default ContactForm