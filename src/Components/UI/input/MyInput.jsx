import classes from "./MyInput.module.scss";
export default function MyInput(props) {
  return (
    <div className={classes.textInput}>
      <input {...props} />
    </div>
  );
}
