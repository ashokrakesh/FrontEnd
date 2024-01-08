import { loadUserData, registerUser, loginUser } from '../../api/authApi'
import setAuthToken from './auth.utils';
import {setAlert} from '../alert/alert.actions';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './auth.types';

// Load User
export const loadUser = (_id) => async (dispatch) => {
  try {
    const res = await loadUserData(_id);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ username, password }) => async (dispatch) => {
  try {
    const res = await registerUser(username, password);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("User saved successfully", 'success'));

    dispatch(loadUser(res.data._id));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({username, password}) => async (dispatch) => {
  try {
    const res = await loginUser(username, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('User has logged in', 'success'));

    dispatch(loadUser(res.data._id));
  } catch (err) {
    dispatch(setAlert(err.response, 'danger'));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(setAlert('User has logged out', 'success'));
  localStorage.removeItem('token');

  dispatch({type: LOGOUT});
};
