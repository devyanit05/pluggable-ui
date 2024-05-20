import { login } from '../../services/authService';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action creators
export const loginUser = (email, password) => async (dispatch) => {
    try {
      const data = await login(email, password);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response ? error.response.data : 'An error occurred' });
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    dispatch({ type: LOGOUT });
  };
