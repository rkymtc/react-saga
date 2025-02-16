export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUsersRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});