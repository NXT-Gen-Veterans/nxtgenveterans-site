import { Typography } from "@mui/material";
import { useGlobalStore } from "@/store";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export function H2({ children }: HeadingProps) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h4" : "h5"} component="h2" fontWeight="bold">
      {children}
    </Typography>
  )
} 

export function H3({ children }: HeadingProps) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h5" : "h6"} component="h3" fontWeight={600}>
      {children}
    </Typography>
  )
} 