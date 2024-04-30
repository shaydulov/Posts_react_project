import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authActions";
import { counterReducer } from "./reducers/counterAction";

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: reducers
});

export default store;
