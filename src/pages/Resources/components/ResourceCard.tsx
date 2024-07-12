import { ResourceCardType } from "../data/resourceInfo"
import { ReactNode, useState } from "react"
import { Box, Card, CardContent, Link, Stack, Typography, alpha } from "@mui/material";

interface FlipButtonProps {
    children: ReactNode;
    onClick: ()=>void;
}

interface ResourceCardProps extends ResourceCardType {
    bgImage: string;
}

function FlipButton({children, onClick}:FlipButtonProps) {
    return (
        <Link
            component="button"
            onClick={onClick}
            fontSize=".75rem"
            fontWeight="bold"
            underline="hover"
        >
            {children}
        </Link>
    )
}

function ResourceCard({title, link, description, bgImage}:ResourceCardProps) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <Card
            sx={{
                backgroundImage: bgImage,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: { xs: '100%', md: 'min(45%, 35rem)' },
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
                {isFlipped ? (
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
                ) : (
                    <Stack height={'100%'} justifyContent="center" alignItems="center" spacing={2}>
                        <Typography variant="h6" component="h6" fontWeight="bold">{title}</Typography>
                        <Link fontWeight="bold" href={link} target="_blank" rel="noopener noreferrer" sx={{wordBreak: 'break-all'}}>{link}</Link>
                    </Stack>
                )}
                <Box sx={{
                    height: 'fit-content',
                    position: 'absolute',
                    bottom: '10px',
                    right: '20px',
                }}>
                    <FlipButton onClick={()=>{setFlipped(state => !state)}}>
                        { isFlipped ? "Less info" : "More info" }
                    </FlipButton>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ResourceCard