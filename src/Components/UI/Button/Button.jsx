import classes from "./Button.module.scss";
import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
