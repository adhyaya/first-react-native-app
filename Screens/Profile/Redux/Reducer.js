import * as actionTypes from './ActionTypes';

const initialState = {
  isLoading:false,
  isSuccess:false,
  isError:false,
}

export default (state = initialState, actions) => {
  switch (actions.type) {

  case actionTypes.USER_LOGOUT_START:
    return { 
      isLoading:true,
      }
  
  case actionTypes.USER_LOGOUT_SUCCESS:
    return{
      isLoading:false,
      isSuccess:true,
      isError:false,
    }
  
    case actionTypes.USER_LOGOUT_FAILED:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      }

  default:
    return state
  }
}
