import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "primary-light" | "transparent";
}

const Button = (props: Props) => {
  const getStyles = () => {
    if (props.variant === "primary") {
      return "bg-violet-100 font-[600] text-white active:bg-violet-80";
    } else if (props.variant === "primary-light") {
      return "bg-violet-20 font-[600] text-violet-100 active:bg-violet-40";
    }
  };
  const buttonStyles = getStyles();

  return (
    <button
      {...props}
      className={`${buttonStyles} text-center p-[16px] rounded-[16px] w-full`}
    >
      {props.children}
    </button>
  );
};

export default Button;
