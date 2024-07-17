import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonBaseProps, Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@mui/material";

type ButtonTypes = "submit" | "button" | "reset";

interface ButtonProps extends ButtonBaseProps {
  variant?: boolean;
  link?: string;
  type?: ButtonTypes;
  muiButtonProps?: MaterialButtonProps
  children: ReactNode;
}

function Button(props: ButtonProps) {
  const variant = props.variant ? {color: "secondary"} as MaterialButtonProps : null;
  const link = props.link ? {
    component: Link, 
    to: props.link,
  } as MaterialButtonProps : props.type ?
  {
    type: props.type,
    ...props.muiButtonProps
  } : null


  return (
    <MaterialButton variant="contained" {...variant} {...link}>
      {props.children}
    </MaterialButton>
  )
}

export default Button