import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import UserDetails from './UserDetails';

export default combineReducers({
    form: formReducer,
    users: UserDetails
})