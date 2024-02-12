import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { ReactComponent as ListIcon } from "../../Assets/Icons/listIcon.svg";
import { ReactComponent as TestIcon } from "../../Assets/Icons/testIcon.svg";
export default function Navigation() {
  return (
    <nav className={classes.navHeader}>
      <Link to="/">
        <ListIcon />
      </Link>
      <Link to="/test">
        <TestIcon />
      </Link>
    </nav>
  );
}
