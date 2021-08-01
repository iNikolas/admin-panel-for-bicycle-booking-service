import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from '../reducers'
import thunk from "redux-thunk";
import storageAPI from "../API/localForage";


export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(storageAPI)))
