import propTypes from "prop-types";

const Label = (props) => {
  const { htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="font-medium block mb-2">
      {props.children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: propTypes.string,
  children: propTypes.element,
};

export default Label;
