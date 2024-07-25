import { ResourceCardType } from "../data/resourceInfo"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { Box, Card, CardContent, Link, LinkProps, Stack, Typography, alpha } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { useGlobalStore } from "@/store";

function ResourceCard({title, link, description, bgImage}:ResourceCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const screen = useGlobalStore(state => state.screen);
    const md = screen == "md" || screen == "lg";

    const templateProps = {
        bgImage,
        isFlipped,
        setIsFlipped,
    }

    return (
        <ReactCardFlip containerStyle={{width: md ? 'min(45%, 35rem)' : '100%' }} flipDirection="horizontal" isFlipped={isFlipped}>
            <CardTemplate {...templateProps}>
                <Stack height={'100%'} justifyContent="center" alignItems="center" spacing={2}>
                    <Typography variant="h6" component="h6" fontWeight="bold">{title}</Typography>
                    <Link fontWeight="bold" href={link} target="_blank" rel="noopener noreferrer" sx={{wordBreak: 'break-all'}}>{link}</Link>
                </Stack>
            </CardTemplate>
            <CardTemplate {...templateProps}>
                <Stack className="card-scrollbar" sx={{
                    height: '100%',
                    width: '100%',
                    padding: 2.5,
                    overflowY: 'scroll',
                    "&.MuiStack-root": {
                        overflowY: 'scroll',
                    }
                }}>
                    <Typography height="fit-content">{description}</Typography>
                    <Link fontWeight="bold" href={link} target="_blank" rel="noopener noreferrer">Go to site</Link>
                </Stack>
            </CardTemplate>
        </ReactCardFlip>
    )
}

function CardTemplate({children, bgImage, isFlipped, setIsFlipped}: CardTemplateProps) {
    return (
        <Card
            sx={{
                backgroundImage: bgImage,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "100%",
                height: 250,
                textAlign: 'center',
                borderRadius:'1.2rem',
            }}
        >
            <CardContent
                sx={{
                    bgcolor: theme => alpha(theme.palette.secondary.light, 0.8),
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(4.5px)',
                    position: 'relative',
                    overflow: 'hidden',
                    p: 3,
                    "&.MuiCardContent-root:last-child": {
                        pb: 5
                    }
                }}
            >
                {children}
                <Box sx={{
                    height: 'fit-content',
                    position: 'absolute',
                    bottom: '10px',
                    right: '20px',
                }}>
                    <FlipButton onClick={()=>{setIsFlipped(state => !state)}}>
                        { isFlipped ? "Less info" : "More info" }
                    </FlipButton>
                </Box>
            </CardContent>
        </Card>
    )
}



function FlipButton({children, ...props}:FlipButtonProps) {
    return (
        <Link
            component="button"
            {...props}
            fontSize=".75rem"
            fontWeight="bold"
            underline="hover"
        >
            {children}
        </Link>
    )
}

interface FlipButtonProps extends LinkProps {
    children: ReactNode;
}

interface ResourceCardProps extends ResourceCardType {
    bgImage: string;
}

interface CardTemplateProps {
    children: ReactNode;
    bgImage: string;
    isFlipped: boolean;
    setIsFlipped: Dispatch<SetStateAction<boolean>>;
}

export default ResourceCard