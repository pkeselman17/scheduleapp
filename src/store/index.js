import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers/index";
import { changeToLastYearMiddleware, changeToNextYearMiddleware } from "../middleware";
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(changeToLastYearMiddleware, changeToNextYearMiddleware , thunk))
);

export default store;