import AsyncStorage from '@react-native-community/async-storage';
import * as actionTypes from './ActionTypes';

export const userLogoutStart=()=>({
  type: actionTypes.USER_LOGOUT_START,
})

export const userLogoutSuccess=()=>({
  type: actionTypes.USER_LOGOUT_SUCCESS,
})

export const userLogoutFailed=()=>({
  type: actionTypes.USER_LOGOUT_FAILED,
})

export const userLogout=()=>{
  return(dispatch)=>{
    dispatch(userLogoutStart());
    setTimeout(()=>{
      AsyncStorage.removeItem('user');
    },3000);
    dispatch(userLogoutSuccess());
  }
}