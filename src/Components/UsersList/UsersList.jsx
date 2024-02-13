import UsersHeader from "./UsersHeader/UsersHeader";
import UsersRow from "./UsersRow/UsersRow";
import classes from "./UsersList.module.scss";
import { useMemo, useState } from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import { useDispatch } from "react-redux";
import { checkUser } from "../../Store/usersSlice";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import FormAddUser from "./FormAddUser/FormAddUser";
import ConfirmAsk from "./ConfirmAsk/ConfirmAsk";
import PropTypes from "prop-types";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

function UsersList({ users }) {
  const dispatch = useDispatch();
  const [sort, setSort] = useState({
    field: null,
    direction: "asc",
    secondField: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [inputForSearch, setInputForSearch] = useState("name");
  const [confirm, setConfirm] = useState(false);
  const [addUserOpen, setAddUserOpen] = useState(false);

  const dynamicSort = (key, direction, secondKey) => {
    return function (a, b) {
      if (secondKey) {
        if (a[key][secondKey] < b[key][secondKey])
          return direction === "asc" ? -1 : 1;
        if (a[key][secondKey] > b[key][secondKey])
          return direction === "asc" ? 1 : -1;
      } else {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      }

      return 0;
    };
  };

  const sortUsers = (field, secondField) => {
    if (sort.field === field) {
      setSort({
        ...sort,
        direction: sort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSort({
        field,
        direction: "asc",
        secondField,
      });
    }
  };

  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...users].sort(
        dynamicSort(sort.field, sort.direction, sort.secondField)
      );
    }
    return users;
  }, [sort, users]);

  const sortedAndFilteredUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user[inputForSearch].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers, inputForSearch]);

  const onCheck = (userId) => {
    dispatch(checkUser(userId));
  };
  const openAndCloseConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div>
      <HeaderTitle title={"Список сотрудников"}></HeaderTitle>
      <div className={classes.searchBlock}>
        <div>
          <p>Искать по:</p>
          <MySelect
            name="searchFor"
            value={inputForSearch}
            onChange={setInputForSearch}
            options={[
              { value: "name", name: "Имя" },
              { value: "email", name: "Почта" },
              { value: "phone", name: "Телефон" },
            ]}
          />
          <MyInput
            name="search"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <div className={classes.userButton}>
          <Button onClick={openAndCloseConfirm}>Удалить сотрудника</Button>
          <Button onClick={() => setAddUserOpen(true)}>
            Добавить сотрудника
          </Button>
        </div>
      </div>
      <Modal open={confirm}>
        <ConfirmAsk openAndCloseConfirm={openAndCloseConfirm} />
      </Modal>
      <Modal open={addUserOpen}>
        <FormAddUser users={users} onModalClose={() => setAddUserOpen(false)} />
      </Modal>
      {sortedAndFilteredUsers.length ? (
        <table className={classes.table}>
          <thead>
            <UsersHeader sortUsers={sortUsers} />
          </thead>

          <tbody>
            {sortedAndFilteredUsers.map((user) => {
              return <UsersRow user={user} key={user.id} onCheck={onCheck} />;
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ textAlign: "center" }}>Сотрудники не найдены!</h2>
      )}
    </div>
  );
}
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};
export default UsersList;
