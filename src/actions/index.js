import { ADD_ARTICLE, NEXT_MONTH, LAST_MONTH, LAST_YEAR, NEXT_YEAR, TOGGLE_MODAL } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}


export function nextMonth(payload) {
  return { type: NEXT_MONTH, payload};
}

export function lastMonth(payload) {
  return { type: LAST_MONTH, payload}
}

export function changeToLastYear(payload) {
  return { type: LAST_YEAR, payload}
}

export function changeToNextYear(payload) {
  return { type: NEXT_YEAR, payload}
}

export function toggleModal(payload) {
  return { type: TOGGLE_MODAL, payload}
}