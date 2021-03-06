import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import * as msmLogin from '../../lib/msm/login';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* login(action) {
    const result = yield call(msmLogin.login, action.email, action.password);
    if (result) {
        yield put(actions.loginSuccess());
        yield call(Actions.main);
    } else {
        yield put(actions.loginFailed());
    }
}

export default function* () {
    yield takeEvery(actionTypes.LOGIN_ATTEMPT, login);
}
