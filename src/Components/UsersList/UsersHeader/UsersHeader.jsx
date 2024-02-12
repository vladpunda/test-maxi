import { ReactComponent as SortIcon } from "../../../Assets/Icons/sort-svgrepo-com.svg";
import classes from "./UsersHeader.module.scss";
import PropTypes from "prop-types";
function UsersHeader({ sortUsers }) {
  return (
    <tr>
      <th className={classes.sortButton}>
        #
        <button type="button" onClick={() => sortUsers("id")}>
          <SortIcon />
        </button>
      </th>
      <th>Фото</th>
      <th className={classes.sortButton}>
        Имя
        <button type="button" onClick={() => sortUsers("name")}>
          <SortIcon />
        </button>
      </th>
      <th>Имя пользователя</th>
      <th>Электронная почта</th>
      <th>Телефон</th>
      <th className={classes.sortButton}>
        Индекс
        <button type="button" onClick={() => sortUsers("address", "zipcode")}>
          <SortIcon />
        </button>
      </th>
    </tr>
  );
}
UsersHeader.propTypes = {
  sortUsers: PropTypes.func,
};
export default UsersHeader;
