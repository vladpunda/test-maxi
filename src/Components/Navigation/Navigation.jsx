import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
export default function Navigation() {
  return (
    <nav className={classes.nav__header}>
      <h3>Список сотрудников</h3>
      <span>
        <Link to="/">Home Page</Link>
        <Link to="/users">Users List</Link>
      </span>
    </nav>
  );
}
