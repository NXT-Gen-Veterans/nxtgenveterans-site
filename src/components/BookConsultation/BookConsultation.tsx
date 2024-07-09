import { forwardRef, useState } from "react";
import { InlineWidget } from "react-calendly";

import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Button, ButtonProps, Dialog, DialogContent, IconButton, Slide, Toolbar } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import { H2 } from "../Headings/Headings";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface BookConsultationProps {
    variant?: boolean;
}

export default function BookConsultation(props: BookConsultationProps) {
    const style = props.variant ? {color: "secondary"} as ButtonProps : null;

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    return (
        <>
            <Button variant="contained" {...style} onClick={handleDialogOpen}>
                Book Consultation
            </Button>
            <Dialog
                open={dialogOpen}
                fullScreen
                onClose={handleDialogClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative", bgcolor: "white", color: "black" }}>
                    <Toolbar>
                        <H2>Book a Consultation</H2>
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
                    <InlineWidget
                        url="https://calendly.com/nxtgenveterans/veteran-consultation?primary_color=020281"
                        styles={{
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}
