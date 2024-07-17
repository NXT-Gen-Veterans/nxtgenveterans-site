import blackLogo from "assets/Logo/Black.png";
import whiteLogo from "assets/Logo/White.png";

import { Link } from "@mui/material";
import { Link as NavLink } from "react-router-dom";

import { useGlobalStore } from "@/store";

interface LogoLinkProps {
    variant?: boolean
}

export default function LogoLink(props: LogoLinkProps) {
    const { setNavTabValue } = useGlobalStore(state => state);
    return (
        <Link component={NavLink} to="/" onClick={() => {setNavTabValue("home")}} sx={{ width: "fit-content" }}>
            <img src={props.variant ? whiteLogo : blackLogo} alt="logo" className={`w-14 lg:w-16`} />
        </Link>
    )
}