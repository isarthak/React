import responseSaga from './responseSaga';
import sendDataSaga from './sendDataSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([responseSaga(), sendDataSaga()]);
}