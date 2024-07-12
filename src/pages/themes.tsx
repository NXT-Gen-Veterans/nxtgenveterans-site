import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    palette: {
        primary: {
        light: "#B0D4FF",
        main: "#020281",
        dark: "#0202CC",
        contrastText: "#ededed",
        },
        secondary: {
        light: "#B5E3FF",
        main: "#f0f0f0",
        dark: "#c9bce2",
        contrastText: "#0f0f0f",
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        button: {
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
        textTransform: "initial"
        }
    }
});