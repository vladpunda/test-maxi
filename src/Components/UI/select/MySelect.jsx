import classes from "./MySelect.module.scss";
import PropTypes from "prop-types";
function MySelect({ options, onChange, name }) {
  return (
    <div className={classes.textSelect}>
      <select name={name} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
MySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  name: PropTypes.string,
};
export default MySelect;
