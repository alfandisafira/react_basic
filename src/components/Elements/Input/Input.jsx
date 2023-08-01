const Input = (props) => {
  const { id, type, name, placeholder } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 rounded"
    />
  );
};

export default Input;
