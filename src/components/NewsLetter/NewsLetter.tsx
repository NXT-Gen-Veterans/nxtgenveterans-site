import { Box, CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material';
import Button from 'components/Button/Button';
import { H2 } from '../Headings/Headings';
import { FormEvent, useEffect, useState } from 'react';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from '../TermsOfUse/TermsOfUse';

function NewsLetter() {
  const [isLoading, setIsLoading] = useState(false);
  const [isThanks, setIsThanks] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    firstname: "",
    lastname: "",
    email: "",
  });

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
    });

    fetch(import.meta.env.VITE_NEWSLETTER_ACTION, {
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
        localStorage.setItem("user", JSON.stringify({
          ...(JSON.parse(localStorage.getItem("user") as string) || {}),
          subscribed: true,
        }))
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
    const {subscribed} = JSON.parse(localStorage.getItem("user") as string) || { subscribed: false };
    setIsSubscribed(subscribed);
  }, [setIsSubscribed])

  return isSubscribed ? "" : (
    <Stack
      component="section"
      justifyContent="center"
      alignItems="center"
      sx={{ bgcolor: 'white', p: {xs: 7, xl: 12}  }}
    >
      <Stack
        alignItems="center"
        textAlign="center"
        gap={4}
        width={{ xs: '100%', md: 'min(45%,40rem)'}}
      >
        <H2>
          { isThanks ? 
            "You subscribed to our newsletter!" :
            "Subscribe to our Newsletter"
          }
        </H2>
        <Typography align="center">
          { isThanks ?
            "Thanks for subscribing! We've sent you a welcome email." :
            `
              Stay informed and connected by subscribing to our website!
              Receive monthly newsletters filled with the latest news, events, and updates directly to your inbox.
              Don't miss out on important information that can benefit you on your journey.
              Subscribe now and stay in the loop!
            `
          }
        </Typography>
        { isThanks ? "" : (
          <Box
            component="form"
            sx={{ maxWidth: '400px', width: '100%' }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={e=>updateFormDetail(e.target.name as keyof FormDetailsType, e.target.value)}
                  inputProps={{
                    maxLength: "100",
                    size: "20"
                  }}
                  fullWidth
                  required
                  name="firstname"
                  label="First Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={e=>updateFormDetail(e.target.name as keyof FormDetailsType, e.target.value)}
                  inputProps={{
                    maxLength: "100",
                    size: "20"
                  }}
                  fullWidth
                  required
                  name="lastname"
                  label="Last Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e=>updateFormDetail(e.target.name as keyof FormDetailsType, e.target.value)}
                  inputProps={{
                    maxLength: "81",
                    size: "20"
                  }}
                  fullWidth
                  required
                  name="email"
                  label="Email address"
                  type="email"
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Box mt={4} px={{xs:2,sm:2}}>
              <Typography sx={{fontSize: 10, lineHeight: 1.5}} textAlign={{xs:'justify', sm:'center'}}>
                By submitting this form, you agree that the information you provide will be processed in accordance with our&nbsp;
                <PrivacyPolicy fontWeight="bold" /> and <TermsOfUse fontWeight="bold" />.
              </Typography>
            </Box>
            <Box mt={4} display='flex' justifyContent='center'>
              <Button type="submit" disabled={isLoading}>
                { isLoading ? <CircularProgress color="secondary" size={24} /> : "Subscribe" }
              </Button>
            </Box>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

interface FormDetailsType {
  firstname: string;
  lastname: string;
  email: string;
}

export default NewsLetter;
