import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    palette: {
        primary: {
        light: "#B0D4FF",
        main: "#057dce",
        dark: "#0363bc",
        contrastText: "#ededed",
        },
        secondary: {
        light: "#B5E3FF",
        main: "#eef1ff",
        dark: "#ebe0f0",
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