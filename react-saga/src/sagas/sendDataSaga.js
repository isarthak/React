import {takeEvery, call, put, select} from 'redux-saga/effects';
import {RESPONSE} from '../constants';
import {sendData, updateData} from '../api'
import {setData, sendUserData} from '../actions';

const getDataToSend = (state)=> state.dataToSend;

function* handleSendUserData(){
    const dataToSend = yield select(getDataToSend);
    const response = yield call(sendData, dataToSend);
    yield put(setData(response));
}

function* handleUpdateUserData(){
    const dataToSend = yield select(getDataToSend);
    const response = yield call(updateData, dataToSend);
    yield put(setData(response));}

function* sendDataSaga(){
    yield takeEvery(RESPONSE.SEND, handleSendUserData)
    yield takeEvery(RESPONSE.UPDATE, handleUpdateUserData)
}

export default sendDataSaga;