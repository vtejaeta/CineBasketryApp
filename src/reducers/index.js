import { combineReducers } from "redux";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MOVIES_BY_POPULAR":
      return action.payload;
    case "GET_MOVIES_BY_TOP_RATED":
      return action.payload;
    case "GET_MOVIES_BY_UPCOMING":
      return action.payload;
    case "GET_SPECIFIC_MOVIE":
      return action.payload;
    case "GET_RECOMMENDATION":
      return action.payload;
    case "GET_MOVIES_BY_SEARCHTERM":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
});
