import { forwardRef } from "react";
import propTypes from "prop-types";

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

Input.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default Input;
