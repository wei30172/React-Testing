import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import { counterReducer } from "./counter";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
