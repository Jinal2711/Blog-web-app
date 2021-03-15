import {combineReducers} from 'redux'
import { CategoryReducer } from './Category';
import { ArticleReducer } from './Article';
import { authReducer } from './Auth';

const rootReducer = combineReducers({
    CategoryReducer,
    ArticleReducer,
    authReducer
});
export default rootReducer;