import React from "react";

// class Button extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           class="h-10 px-6 font-semibold rounded-md bg-black text-white"
//           type="submit">
//           Buy now
//         </button>
//       </div>
//     );
//   }
// }

const Button = (props) => {
  const {
    bgColor,
    textColor = "text-cyan-300",
    position = "justify-end",
  } = props;
  return (
    <div className={`flex ${position}`}>
      <button
        className={`w-full h-10 px-6 font-medium rounded-md mt-2 ${bgColor} ${textColor}`}
        type="submit">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
