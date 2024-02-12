import classes from "./MySelect.module.scss";
export default function MySelect({ options, onChange, name }) {
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
