import { all, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_REQUEST } from '../actions/userActions';
import { FETCH_USER_POSTS_REQUEST } from '../actions/postActions';
import { fetchUsersSaga } from './userSagas';
import { fetchUserPostsSaga } from './postSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_USER_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_USER_POSTS_REQUEST, fetchUserPostsSaga)
  ]);
}