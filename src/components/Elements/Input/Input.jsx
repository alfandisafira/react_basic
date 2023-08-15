import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { id, type, name, placeholder } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 rounded"
      ref={ref}
    />
  );
});

export default Input;
