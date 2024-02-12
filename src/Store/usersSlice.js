import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../Api/Api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    checkUser: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload) {
          user.checkbox = !user.checkbox;
        }
        return user;
      });
    },
    removeUser: (state) => {
      state.users = state.users.filter((user) => !user.checkbox);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
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

export const { setUsers, checkUser, removeUser, addUser } = usersSlice.actions;

export default usersSlice.reducer;
