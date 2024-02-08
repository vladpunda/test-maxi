import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReduser,
  },
});
