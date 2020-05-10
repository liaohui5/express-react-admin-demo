import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import ReduxThunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
const store = createStore(reducer, enhancer);

export default store;
