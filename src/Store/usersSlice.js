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
    chekUser: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload) {
          user.chekbox = !user.chekbox;
        }
        return user;
      });
    },
    removeUser: (state) => {
      state.users = state.users.filter((user) => !user.chekbox);
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

export const { setUsers, chekUser, removeUser, addUser } = usersSlice.actions;

export default usersSlice.reducer;
