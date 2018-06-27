/**
 * Created by xiaohe on 2018/6/20.
 */

import {delay} from 'redux-saga'
import {put, call, takeEvery, take, fork, all} from 'redux-saga/effects'

import * as Action from '../Action/action.type.js';
import axios from 'axios';

function* AppDSaga() {
    console.log('AppDSaga')
    const todos = yield call(axios.get, "/a");
    yield put({type: Action.AppDresult, result: todos});
}

function* AppDSagaAsyn(e) {
    console.log('AppDSagaAsyn', e)
    const todos = yield call(axios.get, "/a");
    yield delay(1000)
    yield put({type: Action.AppDresult, result: todos});
}
//观测方法
function* WatchSaga() {
    yield takeEvery(Action.AppD, AppDSaga)
    yield takeEvery(Action.AppDasyn, AppDSagaAsyn)
}
//根方法
function* Saga() {
    yield all([
        WatchSaga()
    ])
}

export default Saga;