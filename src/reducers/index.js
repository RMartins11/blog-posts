import { combineReducers } from 'redux';
import { reducer } from "redux-form";
import PostsReducer from "./ReducerPosts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: reducer
});

export default rootReducer;
