import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";

import { userReducer } from "./reducers/user";

const logger = createLogger();
const enhancers = applyMiddleware(logger);
const reducers = combineReducers({ userReducer });

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
