import { LANGUAGE_SELECT, LOAD_CATEGORY, LOAD_DIARIES, LOAD_SEARCH_RESULT, LOGIN_STATE } from "./constants";

const initState = {
    list_diaries: [],
    list_search_result: [],
    list_categories : [],
    login_state : localStorage.getItem(LOGIN_STATE) && false,
    searching_state : false,
    currentlanguages: "eng",
}

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_DIARIES:
            return {
                ...state,
                list_diaries: action.payload
            }
        case LANGUAGE_SELECT:
            return {
                ...state,
                currentlanguages: action.payload
            }
        case LOAD_SEARCH_RESULT:
            return {
                ...state,
                list_search_result: action.payload
            }
        case LOAD_CATEGORY:
            return {
                ...state,
                list_categories : action.payload
            }
        case LOGIN_STATE:
            return {
                ...state,
                login_state : action.payload
            }
        default:
            throw new Error('Sai action')
    }
}

export { initState }
export default reducer