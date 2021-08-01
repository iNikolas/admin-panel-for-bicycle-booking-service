export const ADD_NEW_BICYCLE = 'ADD_NEW_BICYCLE'
export const DELETE_BICYCLE_ENTRY = 'DELETE_BICYCLE_ENTRY'
export const CHANGE_BICYCLE_STATUS = 'CHANGE_BICYCLE_STATUS'
export const SET_BICYCLE_ARRAY_FROM_SERVER = 'SET_BICYCLE_ARRAY_FROM_SERVER'

export function addBicycle(bicycleInfo) {
    return async (dispatch, getState, api) => {
        try {
            await api.post(bicycleInfo)
            dispatch({
                type: ADD_NEW_BICYCLE,
                payload: bicycleInfo
            })
        } catch (err) {
            alert(err.text)
        }
    }
}

export function deleteBicycleEntry(bicycleId) {
    return async (dispatch, getState, api) => {
        try {
            await api.delete(bicycleId)
            dispatch({
                type: DELETE_BICYCLE_ENTRY,
                payload: bicycleId
            })
        } catch (err) {
            alert(err.text)
        }
    }

}

export function changeBicycleStatus(status, id) {
    return async (dispatch, getState, api) => {
        try {
            await api.patch(status, id)
            dispatch({
                type: CHANGE_BICYCLE_STATUS,
                payload: {status, id}
            })
        } catch (err) {
            alert(err.text)
        }
    }
}

export function setBicycleArrayFromServer(bicycles) {
    return {
        type: SET_BICYCLE_ARRAY_FROM_SERVER,
        payload: bicycles
    }
}