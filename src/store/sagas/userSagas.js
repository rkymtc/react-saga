import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../actions/userActions';

const fetchUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsers);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}