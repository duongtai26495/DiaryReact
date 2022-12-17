import { LOAD_DIARIES } from "./constants";

export const load_all_diaries = payload => ({
    type: LOAD_DIARIES,
    payload
})