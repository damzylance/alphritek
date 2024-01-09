import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
const logger = reduxLogger.createLogger();

const initialStore = { isLoading: true, data: [], error: `` };

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUserRequested = () => {
  return { type: FETCH_USER_REQUESTED };
};
const fetchUserSuccess = (users) => {
  return { type: FETCH_USER_SUCCESS, payload: users };
};
const fetchUserFailed = (error) => {
  return { type: FETCH_USER_FAILED, payload: error };
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return { ...state, isloading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, isloading: false, users: action.payload, error: "" };
    case FETCH_USER_FAILED:
      return { ...state, isloading: false, users: [], error: action.payload };

    default:
      break;
  }
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
