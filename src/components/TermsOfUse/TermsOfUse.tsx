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

interface TermsOfUseProps extends LinkProps {}

export default function TermsOfUse(props: TermsOfUseProps) {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = (e: Event) => {
        e.preventDefault();
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const disallowedSiteUsage = [
      "In any way that violates any applicable federal, state, local, or international law or regulation",
      "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site",
      "To impersonate or attempt to impersonate NXT Gen Veterans, a NXT Gen Veterans employee, another user, or any other person or entity",
    ];

    return (
        <>
            <Link component="button" {...props} sx={{fontSize: 'inherit', lineHeight: 'inherit', p: 0, m: 0}} onClick={handleDialogOpen}>
                Terms of Use
            </Link>
            <Dialog
                open={dialogOpen}
                fullScreen
                onClose={handleDialogClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative", bgcolor: "white", color: "black" }}>
                    <Toolbar>
                        <H2>Terms of Use</H2>
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
                    "&>p, &>ul": {
                      mb: {xs: 3, sm: 5},
                    },
                  }}>

                    <H3>Introduction</H3>
                    <Typography>
                      Welcome to the NXT Gen Veterans website ("Site").&nbsp;
                      By accessing or using our Site, you agree to comply with and be bound by these Terms of Use ("Terms").&nbsp;
                      If you do not agree to these Terms, please do not use our Site.
                    </Typography>

                    <H3>Use of Site</H3>
                    <Typography>
                      You may use our Site for lawful purposes and in accordance with these Terms. You agree not to use the Site:
                    </Typography>
                    <List>
                      {disallowedSiteUsage.map(reason => (
                        <ListItem key={makeKey(reason)} disablePadding disableGutters>
                          <ListItemIcon sx={{display:'flex', justifyContent: 'center'}}>
                            <Circle sx={{fontSize:{xs: 6, sm: 8}}} />
                          </ListItemIcon>
                          <ListItemText primary={reason} />
                        </ListItem>
                      ))}
                    </List>

                    <H3>Intellectual Property Rights</H3>
                    <Typography>
                      The content on our Site, including text, graphics, logos, and images, is the property of NXT Gen Veterans&nbsp;
                      and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create&nbsp;
                      derivative works from this content without our prior written permission.
                    </Typography>

                    <H3>Links to Third-Party Websites</H3>
                    <Typography>
                      Our Site may contain links to third-party websites for your convenience.&nbsp;
                      These links do not signify our endorsement of such sites, and we have no control over their content or privacy practices.
                    </Typography>

                    <H3>Limitation of Liability</H3>
                    <Typography>
                      In no event shall NXT Gen Veterans, its affiliates, or their respective directors, officers, employees, or agents be liable&nbsp;
                      for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our Site.
                    </Typography>

                    <H3>Indemnification</H3>
                    <Typography>
                      You agree to indemnify, defend, and hold harmless NXT Gen Veterans and its affiliates from and against any claims, liabilities, damages,&nbsp;
                      judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Site.
                    </Typography>

                    <H3>Governing Law</H3>
                    <Typography>
                      These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia,&nbsp;
                      without regard to its conflict of law principles.
                    </Typography>

                    <H3>Changes to These Terms</H3>
                    <Typography>
                      We may revise these Terms at any time by updating this posting.&nbsp;
                      Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
                    </Typography>

                    <H3>Contact Us</H3>
                    <Typography>
                      If you have any questions about these Terms, please contact us at:
                    </Typography>

                    <Stack>
                      <Typography>NXT Gen Veterans</Typography>
                      <Typography>Leesburg, VA {import.meta.env.VITE_ORG_ZIP_CODE}, US</Typography>
                      <Link target="_blank" rel="noopener noreferrer" href={`mailto:${import.meta.env.VITE_ORG_EMAIL}`}>{import.meta.env.VITE_ORG_EMAIL}</Link>
                      <Link target="_blank" rel="noopener noreferrer" href={`tel:${import.meta.env.VITE_ORG_PHONE}`}>{import.meta.env.VITE_ORG_PHONE_TEXT}</Link>
                    </Stack>
                  </Paper>
                </DialogContent>
            </Dialog>
        </>
    )
}
