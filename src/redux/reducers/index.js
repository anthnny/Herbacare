import { combineReducers } from "redux";
import categories  from "./categories";
import remedies  from "./remedies";

export default combineReducers({
    categories,
    remedies
})