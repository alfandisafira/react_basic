import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { name, label, id, type = "text", placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
