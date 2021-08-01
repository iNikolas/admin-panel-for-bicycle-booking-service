import {
    ADD_NEW_BICYCLE,
    CHANGE_BICYCLE_STATUS,
    DELETE_BICYCLE_ENTRY,
    SET_BICYCLE_ARRAY_FROM_SERVER
} from '../actions/bicyclesActions'

const initialState = [

]

export function bicyclesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_BICYCLE: {
            return [
                ...state,
                {
                    ...action.payload
                }]
        }
        case DELETE_BICYCLE_ENTRY: {
            return [
                ...state.filter((entry) => +entry.id !== +action.payload)
            ]
        }
        case CHANGE_BICYCLE_STATUS: {
            return state.map(bicycle => (+bicycle.id === +action.payload.id) ? {
                ...bicycle,
                status: action.payload.status
            } : bicycle)
        }
        case SET_BICYCLE_ARRAY_FROM_SERVER:
            if (!action.payload) return []
            return [
                ...action.payload
            ]
        default:
            return state
    }
}