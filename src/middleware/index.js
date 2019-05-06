import { LAST_MONTH, NEXT_MONTH } from "../constants/action-types";
import { changeToLastYear, changeToNextYear } from "../actions";

export function changeToLastYearMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === LAST_MONTH) {
                const month = action.payload;

                if (month === 0) {
                    return dispatch(changeToLastYear(month));
                }
            }

            return next(action);
        };
    };
}

export function changeToNextYearMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === NEXT_MONTH) {
                const month = action.payload;

                if (month === 11) {
                    return dispatch(changeToNextYear(month));
                }
            }

            return next(action);
        };
    };
}
