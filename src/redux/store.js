import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import { userReducer } from "./reducers/user";

const logger = createLogger();
const enhancers = applyMiddleware(rpm);
const reducers = combineReducers({ userReducer });

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
