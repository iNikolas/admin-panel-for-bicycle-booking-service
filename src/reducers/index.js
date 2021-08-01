import { combineReducers } from 'redux'
import { bicyclesReducer } from './bicycles'
import {listInitializationReducer} from './listInitialization'

export const rootReducer = combineReducers({
    bicycles: bicyclesReducer,
    initialized: listInitializationReducer
})