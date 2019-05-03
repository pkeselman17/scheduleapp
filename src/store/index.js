import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;