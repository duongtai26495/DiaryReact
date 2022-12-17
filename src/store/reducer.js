import { LOAD_DIARIES } from "./constants";

const initState = {
    list_diaries: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_DIARIES:
            return {
                ...state,
                list_diaries: action.payload
            }
        default:
            throw new Error('Sai action')
    }
}

export {initState}
export default reducer