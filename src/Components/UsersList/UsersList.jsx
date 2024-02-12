import UsersHeader from "./UsersHeader/UsersHeader";
import UsersRow from "./UsersRow/UsersRow";
import classes from "./UsersList.module.scss";
import { useMemo, useState } from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import { useDispatch } from "react-redux";
import { chekUser, removeUser } from "../../Store/usersSlice";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import FormAddUser from "./FormAddUser/FormAddUser";

export default function UsersList({ users }) {
  const dispatch = useDispatch();
  const [sort, setSort] = useState({
    field: null,
    direction: "asc",
    secondField: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [inputForSearch, setInputForSearch] = useState("name");
  const [confirm, setConfirm] = useState(false);

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

  const sortedAndFiltredUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user[inputForSearch].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers, inputForSearch]);

  function onCheck(userId) {
    dispatch(chekUser(userId));
  }
  function openAndCloseConfirm() {
    setConfirm(!confirm);
  }
  function removeOn() {
    dispatch(removeUser());
  }

  return (
    <div>
      <FormAddUser />
      <div className={classes.searchBlock}>
        <div>
          <p>Искать по:</p>
          <MySelect
            name="searchFor"
            value={inputForSearch}
            onChange={setInputForSearch}
            options={[
              { value: "name", name: "name" },
              { value: "email", name: "email" },
              { value: "phone", name: "phone" },
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
          <Button>Добавить сотрудника</Button>
        </div>
      </div>
      <Modal open={confirm}>
        <h3>Вы точно хотите удалить сотрудника?</h3>
        <div className={classes.modButton}>
          <Button
            onClick={() => {
              removeOn();
              openAndCloseConfirm();
            }}
          >
            Да
          </Button>
          <Button onClick={openAndCloseConfirm}>Нет</Button>
        </div>
      </Modal>
      {sortedAndFiltredUsers.length ? (
        <table className={classes.table}>
          <thead>
            <UsersHeader sortUsers={sortUsers} />
          </thead>

          <tbody>
            {sortedAndFiltredUsers.map((user) => {
              return (
                <UsersRow
                  user={user}
                  key={user.id}
                  removeOn={removeOn}
                  onChek={onCheck}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 style={{ textAlign: "center" }}>Сотрудники не найдены!</h2>
      )}
    </div>
  );
}
