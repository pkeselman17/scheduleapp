import {ADD_ARTICLE, FOUND_BAD_WORD, NEXT_MONTH, LAST_MONTH, LAST_YEAR, NEXT_YEAR} from "../constants/action-types";

const initialState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    events: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            events: state.events.concat(action.payload),
            error: null
        }
    }

    if (action.type === NEXT_MONTH) {
        return {
            ...state,
            month: action.payload + 1
        }
    }

    if (action.type === LAST_MONTH) {
        return {
            ...state,
            month: action.payload - 1
        }
    }

    if (action.type === LAST_YEAR) {
        return {
            ...state,
            month: 11,
            year: state.year - 1
        }
    }

    if (action.type === NEXT_YEAR) {
        return {
            ...state,
            month: 0,
            year: state.year + 1
        }
    }

    return state;
}

export default rootReducer;
