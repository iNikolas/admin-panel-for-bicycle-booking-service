import {INITIALIZE_WINDOW_AFTER_FETCHING} from "../actions/BicycleListActions";

const initialState = {
    initialized: false
}

export function listInitializationReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_WINDOW_AFTER_FETCHING: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}