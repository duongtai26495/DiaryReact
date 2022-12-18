import { LANGUAGE_SELECT, LOAD_CATEGORY, LOAD_DIARIES, LOAD_SEARCH_RESULT, LOAD_USER, LOGIN_STATE } from "./constants";

export const load_all_diaries = payload => ({
    type: LOAD_DIARIES,
    payload
})

export const change_language = payload => ({
    type: LANGUAGE_SELECT,
    payload
})

export const load_search_result = payload => ({
    type: LOAD_SEARCH_RESULT,
    payload
})

export const load_category = payload => ({
    type: LOAD_CATEGORY,
    payload
})

export const load_user = payload => ({
    type: LOAD_USER,
    payload
})

export const set_login_state = payload => ({
    type: LOGIN_STATE,
    payload
})