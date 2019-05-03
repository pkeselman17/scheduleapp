import {ADD_ARTICLE, FOUND_BAD_WORD} from "../constants/action-types";

const initialState = {
    articles: [],
    error: null
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            articles: state.articles.concat(action.payload),
            error: null
        }
    }

    if (action.type === FOUND_BAD_WORD) {
        return {
            ...state,
            error: action.payload
        }
    }

    return state;
}

export default rootReducer;