import {ADD_ARTICLE, NEXT_MONTH, LAST_MONTH, LAST_YEAR, NEXT_YEAR, TOGGLE_MODAL} from "../constants/action-types";

const initialState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    events: [],
    isModalOpen: false
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

    if (action.type === TOGGLE_MODAL) {
        return {
            ...state,
            isModalOpen: !state.isModalOpen
        }
    }

    return state;
}

export default rootReducer;
