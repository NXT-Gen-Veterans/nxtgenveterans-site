import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";

import { makeKey, useGlobalStore, RouteType } from "store";
import LogoLink from "components/LogoLink/LogoLink";
import BookConsultation from "components/BookConsultation/BookConsultation";

import MenuCloseIcon from "@mui/icons-material/ChevronRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { AppBar, Backdrop, Drawer, IconButton, List, ListItem, ListItemText, Tab, Tabs, Toolbar } from "@mui/material";

function a11yProps(route: RouteType) {
    return {
        id: `${route}-tab`,
        'aria-controls': `${route}-panel`,
    }
}

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {isPageScrolled, navTabValue, screen, setNavTabValue} = useGlobalStore(state => state);
    
    const routes: RouteType[] = ['home', 'about', 'contact', 'resources', 'bootcamp'];

    const navStyles = { 
        backgroundColor: isPageScrolled ? "rgba(255,255,255,.5)" : "transparent",
        boxShadow: "none",
        backdropFilter: isPageScrolled ? "blur(20px)" : "",
    };

    function handleDrawerToggle() {
        setDrawerOpen(!drawerOpen);
    }

    function handleTabChange(event: SyntheticEvent, newValue: RouteType) {
        event;
        setNavTabValue(newValue);
    }

    function handleDrawerListClick(route: RouteType) {
        setNavTabValue(route)
        handleDrawerToggle();
    }

    return (
        screen != "lg" ? (
            <>
            <AppBar position="fixed" sx={navStyles}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <LogoLink />
                    <IconButton
                        aria-label="open-menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuOpenIcon
                            sx={{ color: "black" }}
                            fontSize="large"
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                variant="persistent"
                PaperProps={{
                    sx: {
                        bgcolor: "#020281",
                        width: "min(70dvw,20rem)",
                        padding: "1rem",
                        alignItems: "start",
                        gap: "2rem",
                    },
                    onClick: () => setDrawerOpen(false)
                }}
            >
                <IconButton
                    edge="start"
                    aria-label="close-menu"
                    onClick={handleDrawerToggle}
                >
                    <MenuCloseIcon
                        color="secondary"
                        fontSize="large" 
                    />
                </IconButton>
                <List>
                    {routes.map(route => (
                        <ListItem
                            key={makeKey(route)}
                            component={NavLink}
                            to={`/${route === 'home' ? '' : route}`}
                            onClick={() => handleDrawerListClick(route)}
                            { ...a11yProps(route) }
                            sx={{
                                borderLeft: navTabValue === route ? "5px solid white" : "",
                                mb: "1rem",
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    color: "secondary",
                                    fontWeight: "bold"
                                }}
                                primary={route.toUpperCase()}
                            />
                        </ListItem>
                    ))}
                </List>
                <div className={`${!drawerOpen ? "max-lg:hidden" : ""}`} onClick={() => {setDrawerOpen(false)}}>
                    <BookConsultation variant />
                </div>
            </Drawer>
            <Backdrop
                open={drawerOpen}
                onClick={handleDrawerToggle}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                    bgcolor: "rgba(255,255,255,.5)",
                    backdropFilter: "blur(15px)",
                }}
            />
            </>
        ) : (
            // Tabs for larger screens
            <AppBar position="fixed" sx={{ ...navStyles,
                
            }}>
                <Toolbar sx={{ justifyContent: "space-around" }}>
                    <LogoLink />
                    <Tabs value={navTabValue} onChange={handleTabChange} aria-label="navigation tabs" centered>
                        {routes.map(route => (
                            <Tab
                                key={makeKey(route)}
                                component={NavLink}
                                to={`/${route === 'home' ? '' : route}`}
                                value={route}
                                label={route.toUpperCase()}
                                {...a11yProps(route)}
                                sx={{
                                    fontWeight: "bold",
                                    color: "black",
                                }}
                            />
                        ))}
                    </Tabs>
                    <BookConsultation variant />
                </Toolbar>
            </AppBar>
        )
    )
}

export default Navbar
