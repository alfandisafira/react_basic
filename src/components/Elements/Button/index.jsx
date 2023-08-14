import React from "react";

const Button = (props) => {
  const {
    bgColor,
    onClick = () => {},
    textColor = "text-cyan-300",
    position = "justify-end",
    type = "button",
  } = props;
  return (
    <div className={`flex ${position}`}>
      <button
        className={`w-full h-10 px-6 font-medium rounded-md mt-2 ${bgColor} ${textColor}`}
        type={type}
        onClick={onClick()}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
