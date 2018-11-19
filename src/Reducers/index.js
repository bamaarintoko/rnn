import {combineReducers} from 'redux'
import {redData} from './dataReducers'

const rootReducers = combineReducers({
    redData : redData
})

export default rootReducers