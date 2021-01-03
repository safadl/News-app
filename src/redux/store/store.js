// example of store.js


import {createStore} from 'redux'
import {mainReducer} from '../reducers/reducers'
export const store=createStore(mainReducer)