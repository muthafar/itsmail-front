import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { surveysReducer } from "./reducers/surveysReducer";

const reducers = combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
