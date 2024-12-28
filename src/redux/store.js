import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Añadir el slice al store
    users: userReducer,
  },
});

export default store;
