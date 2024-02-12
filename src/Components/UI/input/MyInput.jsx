import classes from "./MyInput.module.scss";
import PropTypes from "prop-types";

function MyInput(props) {
  return (
    <div className={classes.textInput}>
      <input {...props} />
    </div>
  );
}
MyInput.propTypes = {
  props: PropTypes.node,
};
export default MyInput;
