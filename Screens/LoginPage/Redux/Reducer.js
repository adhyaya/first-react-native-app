import * as actionTypes from './ActionTypes';

const initialState = {
  isLoading: false,
  success:false,
  error: false,
  user: {

  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        isLoading: true,
        success:true,
        error: false,
        user: {
          ...action.payload.user,
        }
      }
    case actionTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        success:false,
        error: true,
      }
    default:
      return state
  }
}
