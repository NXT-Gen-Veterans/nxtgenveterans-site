import { forwardRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Dialog, DialogContent, IconButton, Link, LinkProps, List, ListItem, ListItemIcon, ListItemText, Paper, Slide, Stack, Toolbar, Typography } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import { H2, H3 } from "../Headings/Headings";
import { Circle } from "@mui/icons-material";
import { makeKey } from "@/store";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PrivacyPolicyProps extends LinkProps {}

export default function PrivacyPolicy(props: PrivacyPolicyProps) {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = (e: Event) => {
        e.preventDefault();
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const whyWeCollectData = [
      "Book a Consultation",
      "Sign up for our newsletter",
      "Volunteer with us",
      "Make donations",
      "Send enquiries via our contact form",
      "Register for events or programs",
    ];

    const howWeUseData = [
      "Process donations and send donation receipts",
      "Communicate with you about our programs, events, and volunteer opportunities",
      "Improve our website and services",
      "Comply with legal obligations",
      "Sharing Your Information",
    ];

    return (
        <>
            <Link component="button" {...props} sx={{fontSize: 'inherit', lineHeight: 'inherit', p: 0, m: 0}} onClick={handleDialogOpen}>
                Privacy Policy
            </Link>
            <Dialog
                open={dialogOpen}
                fullScreen
                onClose={handleDialogClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative", bgcolor: "white", color: "black" }}>
                    <Toolbar>
                        <H2>Privacy Policy</H2>
                        <IconButton
                            aria-label="close"
                            edge="end"
                            onClick={handleDialogClose}
                            sx={{
                                position: "absolute",
                                right: { xs:16, sm:24 },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent sx={{ p:0 }}>
                  <Paper sx={{
                    p: {xs: 3, sm: 5},
                    "& h3": {
                      mt: {xs: 3, sm: 5},
                    },
                  }}>
                    <Typography variant={'caption'} fontWeight={'900'} my={-5}>Effective Date: Monday, 22nd July, 2024</Typography>

                    <H3>Introduction</H3>
                    <Typography>
                      NXT Gen Veterans ("we," "our," or "us") is committed to protecting your privacy.&nbsp;
                      This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website,&nbsp;
                      <Link href={import.meta.env.VITE_APP_BASE_URL}>{import.meta.env.VITE_APP_BASE_URL.split("").splice(8).join("")}</Link>, and interact with our services.
                    </Typography>

                    <H3>Information We Collect</H3>
                    <Typography>
                      We may collect personal information that you provide to us, such as your name, email address,&nbsp;
                      postal address, phone number, and payment information when you:
                    </Typography>
                    <List>
                      {whyWeCollectData.map(reason => (
                        <ListItem key={makeKey(reason)} disablePadding disableGutters>
                          <ListItemIcon sx={{display:'flex', justifyContent: 'center'}}>
                            <Circle sx={{fontSize:{xs: 6, sm: 8}}} />
                          </ListItemIcon>
                          <ListItemText primary={reason} />
                        </ListItem>
                      ))}
                    </List>
                    <Typography fontWeight={500}>
                      We also automatically collect certain information through cookies and similar technologies,&nbsp;
                      including your IP address, browser type, and access times.
                    </Typography>

                    <H3>How We Use Your Information</H3>
                    <Typography>
                      We use your personal information to:
                    </Typography>
                    <List>
                      {howWeUseData.map(reason => (
                        <ListItem key={makeKey(reason)} disablePadding disableGutters>
                          <ListItemIcon sx={{display:'flex', justifyContent: 'center'}}>
                            <Circle sx={{fontSize:{xs: 6, sm: 8}}} />
                          </ListItemIcon>
                          <ListItemText primary={reason} />
                        </ListItem>
                      ))}
                    </List>
                    <Typography fontWeight={500}>
                      We do not sell or trade your personal information.&nbsp;
                      We may share your information with trusted third parties who assist us in operating our website,&nbsp;
                      conducting our business, or providing services to you, as long as those parties agree to keep this information confidential.
                    </Typography>

                    <H3>Data Security</H3>
                    <Typography>
                      We implement a variety of security measures to maintain the safety of your personal information.&nbsp;
                      However, no data transmission over the Internet can be guaranteed to be 100% secure.
                    </Typography>

                    <H3>Your Rights</H3>
                    <Typography>
                      You have the right to access, correct, or delete your personal information.&nbsp;
                      You may also opt-out of receiving communications from us at any time.
                    </Typography>

                    <H3>Changes to This Privacy Policy</H3>
                    <Typography>
                      We may update this Privacy Policy periodically.&nbsp;
                      We will notify you of any changes by posting the new Privacy Policy on our website.&nbsp;
                      Your continued use of the site after any changes indicates your acceptance of the new terms.
                    </Typography>

                    <H3>Contact Us</H3>
                    <Typography>
                      If you have any questions about this Privacy Policy, please contact us at:
                    </Typography>

                    <Stack mt={1}>
                      <Typography>NXT Gen Veterans</Typography>
                      <Typography>[address]</Typography>
                      <Typography>Leesburg, VA [ZIP Code]</Typography>
                      <Link href="">[email]</Link>
                      <Link href="">[phone number]</Link>
                    </Stack>
                  </Paper>
                </DialogContent>
            </Dialog>
        </>
    )
}
