import { Typography } from "@mui/material";
import { useGlobalStore } from "store";
import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h4" : "h5"} component="h2" fontWeight="bold">
      {children}
    </Typography>
  )
} 

interface H3Props {
  children: ReactNode;
}

export function H3({ children }: H3Props) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h5" : "h6"} component="h3" fontWeight={600}>
      {children}
    </Typography>
  )
} 