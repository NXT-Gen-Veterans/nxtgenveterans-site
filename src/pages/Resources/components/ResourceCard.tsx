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

    return (
        <div className={`bg-[${bgImage}] bg-image w-full lg:w-[min(45%,35rem)] h-56 text-center rounded-2xl`}>
        <div className={`bg-grad-blue/80 backdrop-blur-[4.5px] w-full h-full p-5 text-center rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-5 relative`}>
            {/* Front of card */}
            <div className={`${isFlipped ? "hidden" : "flex flex-col w-full h-full items-center justify-center"}`}>
                <h6 className="">{title}</h6>
                <a href={link} target="_blank" rel="noopener noreferrer" className="[word-break:break-all] text-ngv-blue hover:text-ngv-hover font-bold">{link}</a>
            </div>
            {/* Back of card */}
            <div className={`${isFlipped ? "flex flex-col h-fit w-full p-5" : "hidden"} overflow-y-scroll card-scrollbar`}>
                <p className="h-fit">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-ngv-blue hover:text-ngv-hover sub-heading font-bold">Go to site</a>
            </div>
            <div className="h-fit absolute bottom-3 right-3 mt-5">
                <FlipButton
                    onClick={() => {setFlipped(state => !state)}}
                >
                    {isFlipped ? "Less info" : "More Info"}
                </FlipButton>
            </div>
        </div>
        </div>
    )
}

export default ResourceCard