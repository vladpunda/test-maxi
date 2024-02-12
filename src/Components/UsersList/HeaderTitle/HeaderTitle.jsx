import classes from "./HeaderTitle.module.scss";
import PropTypes from "prop-types";
function HeaderTitle({ title }) {
  return (
    <div className={classes.headerList}>
      <h2>{title}</h2>
    </div>
  );
}
HeaderTitle.propTypes = {
  title: PropTypes.string,
};
export default HeaderTitle;
