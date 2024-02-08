import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../Components/Api/Api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const loadUsers = () => async (dispatch) => {
  try {
    const response = await getUsers();
    dispatch(setUsers(response));
  } catch (error) {
    console.log("ERROR");
  }
};

export const selectUsers = (state) => {
  return state.users.users;
};

export const { setUsers, sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
