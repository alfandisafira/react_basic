import propTypes from "prop-types";

const Intro = (props) => {
  const { title } = props;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm font-light mb-2">{props.children}</p>
    </div>
  );
};

Intro.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
};

export default Intro;
