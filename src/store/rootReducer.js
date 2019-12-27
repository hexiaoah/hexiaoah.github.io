import { combineReducers } from 'redux'
import { HomeReducer } from '../pages/Home'
// import { todoReducer } from '../components/todo'
const globel = (state={})=>{
    return state
}

const rootReducer = combineReducers({
    globel,
    HomeReducer
})


export default rootReducer