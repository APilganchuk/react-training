import PropTypes from "prop-types";

export const Panel = ({ color }) => {
  return (
    <>
      <h1 style={{ color: color }}>Panel</h1>
    </>
  );
};

Panel.defaultProps = {
  color: "tomato",
};

Panel.propTypes = {
  color: PropTypes.string,
};
