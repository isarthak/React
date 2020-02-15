import { RESPONSE } from '../constants';

const responseReducer = ( state =[], action) => {
    if ( action.type === RESPONSE.SUCCESS){
        return{
            ...state,
            ...action.response
        }
    }
    return state;
}

export default responseReducer