

import { combineReducers } from "redux";

 import authReducer from "./authReducer";
export default combineReducers({
    auth: authReducer,
    // u can add other reducer's link

   
});
