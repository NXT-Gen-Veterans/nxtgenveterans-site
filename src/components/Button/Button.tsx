import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    children: ReactNode;
    style?: string;
    supplement?: string;
    link?: string;
}

function Button(props: ButtonProps) {
  return props.link ? (
    <Link to={props.link} className={`px-4 py-2 body-btn rounded-xl w-fit shadow-md ${props.supplement || ""}${props.style || "bg-btn-light"}`}>
        {props.children}
    </Link>
  ) : (
    <button className={`px-4 py-2 body-btn rounded-xl w-fit shadow-md ${props.supplement || ""}${props.style || "bg-btn-light"}`}>
        {props.children}
    </button>
  )
}

export default Button