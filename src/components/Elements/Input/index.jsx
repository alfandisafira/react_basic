import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";
import propTypes from "prop-types";

const InputForm = forwardRef((props, ref) => {
  const { name, label, id, type = "text", placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

InputForm.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default InputForm;
