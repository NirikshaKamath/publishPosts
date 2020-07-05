import { combineReducers } from "redux";
import PostReducer from "./View/Homepage/reducer";


const rootReducer = combineReducers({
    posts: PostReducer
});

export default rootReducer;