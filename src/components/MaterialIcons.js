import "../styles/MaterialIcons.css";
import propTypes from "prop-types";

/**
A component that displays Material Icons.
@typedef {Object} MaterialIconsProps
@param {string} bgcolor - Background color of the Material Icon.
@param {string} icon - Source path of the Material Icon.
@returns {JSX.Element}
*/

const MaterialIcons = ({ bgcolor, icon }) => {
  return (
    <div style={{ backgroundColor: bgcolor }} className="icon">
      <img src={icon} alt="" />
    </div>
  );
};

export default MaterialIcons;

MaterialIcons.propTypes = {
  bgcolor: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
