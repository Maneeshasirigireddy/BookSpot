//import

import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./slice/loginSlice";

//create store
export let store = configureStore({
  reducer: {

    login: loginReducer,
  },
});
