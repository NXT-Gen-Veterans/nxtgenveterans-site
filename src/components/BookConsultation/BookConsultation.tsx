import { useState } from "react";
import { InlineWidget } from "react-calendly";

import CloseIcon from "@mui/icons-material/Close";
import { Button, ButtonProps, Dialog, DialogContent, IconButton } from "@mui/material";

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
            <Dialog open={dialogOpen} fullWidth={true} maxWidth="md">
                <IconButton
                    aria-label="close"
                    onClick={handleDialogClose}
                    sx={{
                        position: "absolute",
                        left: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ height: "90dvh" }}>
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
