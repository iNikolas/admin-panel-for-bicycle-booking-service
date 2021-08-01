import {setBicycleArrayFromServer} from "./bicyclesActions";

export const INITIALIZE_WINDOW_AFTER_FETCHING = 'INITIALIZE_WINDOW_AFTER_FETCHING'

export function initialize() {
    return {
        type: INITIALIZE_WINDOW_AFTER_FETCHING
    }
}

export function initialization() {
    return async (dispatch, getState, api) => {
        try {
            const bicycles = await api.get()
            dispatch(setBicycleArrayFromServer(bicycles))
            dispatch(initialize())
        } catch (err) {
            alert(err)
            return err.text
        }
    }
}