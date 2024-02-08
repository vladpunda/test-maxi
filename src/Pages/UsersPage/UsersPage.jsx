import { useEffect } from "react";
import UsersList from "../../Components/UsersList/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, selectUsers } from "../../Store/usersSlice";

export default function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
}
