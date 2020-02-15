import {takeEvery, call, put, select} from 'redux-saga/effects';
import {RESPONSE} from '../constants';
import {fetchData} from '../api'
import {setData} from '../actions';

const getEmail = (state)=> state.email.value;

function* handleUserLoad(){
    const email = yield select(getEmail);
    const response = yield call(fetchData, email);
    yield put(setData(response));
}

function* responseSaga(){
    yield takeEvery(RESPONSE.LOAD, handleUserLoad)
}

export default responseSaga;