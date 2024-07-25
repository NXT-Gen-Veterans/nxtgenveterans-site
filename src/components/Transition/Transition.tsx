import { forwardRef } from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
    slideDirection?: "up" | "down" | "left" | "right";
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction={props.slideDirection || "up"} ref={ref} {...props} />;
});

export default Transition