import { Typography, TypographyProps } from "@mui/material";
import { useGlobalStore } from "@/store";
import { ReactNode } from "react";

export interface HeadingProps extends TypographyProps {
  children: ReactNode;
}

export function H2({ children, ...props }: HeadingProps) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h4" : "h5"} component={"h2"} fontWeight="bold" {...props}>
      {children}
    </Typography>
  )
} 

export function H3({ children, ...props }: HeadingProps) {
  const largeScreen = useGlobalStore(state => state.screen) == "lg";
  return (
    <Typography variant={largeScreen ? "h5" : "h6"} component="h3" fontWeight={600} {...props}>
      {children}
    </Typography>
  )
} 