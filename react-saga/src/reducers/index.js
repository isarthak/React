
import  { combineReducers } from 'redux';

import responseReducer from './responseReducer';
import emailReducer from './emailReducer';
import sendDataReducer from './sendDataReducer';

const rootReducer = combineReducers({
    response : responseReducer,
    email : emailReducer,
    dataToSend : sendDataReducer
});

export default rootReducer;