import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USER_POSTS_REQUEST,
  fetchUserPostsSuccess,
  fetchUserPostsFailure
} from '../actions/postActions';

const fetchUserPosts = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
};

export function* fetchUserPostsSaga(action) {
  try {
    const response = yield call(fetchUserPosts, action.payload);
    yield put(fetchUserPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchUserPostsFailure(error.message));
  }
}