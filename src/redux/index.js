import { combineReducers } from "redux";
import { wrapperReducer } from "./wrapperReducer";

const rootReducer = combineReducers({
  wrapperReducer,
});

export default rootReducer;
