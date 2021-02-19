import * as actionTypes from './ActionTypes';

import { singIn } from '../../../Api/Auth';
import AsyncStorage from '@react-native-community/async-storage';

export const loginWithEmailAndPasswordStart = () => ({
  type: actionTypes.LOGIN_USER_START,
});

export const loginWithEmailAndPasswordSuccessful = (payload) => ({
  type: actionTypes.LOGIN_USER_SUCCESSFUL,
  payload,
});

export const loginWithEmailAndPasswordFailed = () => ({
  type: actionTypes.LOGIN_USER_FAILED,
})

export const loginWithEmailAndPassword = (email, password) => {
  return(dispatch)=>{
  dispatch(loginWithEmailAndPasswordStart())
  singIn(email, password)
    .then((response) => {
      AsyncStorage.setItem('user',response.user);
      dispatch(loginWithEmailAndPasswordSuccessful(response.user));
    })
    .catch(() => {
      dispatch(loginWithEmailAndPasswordFailed())
    })
  }
}