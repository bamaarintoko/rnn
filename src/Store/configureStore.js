import { createStore, applyMiddleware,compose } from 'redux'
import app from '../Reducers'
import thunk from 'redux-thunk'
let middleware = [thunk];
export const store = createStore(app, applyMiddleware(...middleware))
console.log(store)