const Label = (props) => {
  const { htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="font-medium block mb-2">
      {props.children}
    </label>
  );
};

export default Label;
