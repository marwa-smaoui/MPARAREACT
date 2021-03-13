import {combineReducers} from 'redux'
import ShopReducer from "./ShopReducer";
import Reducer from './Reducer'

const rootReducer=combineReducers({
    Reducer,
    ShopReducer
    
})

export default rootReducer