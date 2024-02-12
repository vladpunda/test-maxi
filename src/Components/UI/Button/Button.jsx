import classes from "./Button.module.scss";

export default function Button({ children, onClick }) {
  return (
    <div className={classes.button}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
