import { combineReducers } from 'redux';
import login from '../Screens/LoginPage/Redux/Reducer';
import profile from '../Screens/Profile/Redux/Reducer';

const clearReduxOnLogout = () => {
  return {};
}

const combinedReducers = combineReducers({
  login,
  profile,
});

const rootReducer = (state, action) => {
  let appState = state;
  // As one reducer can not update the key values for other reducer keys here we are handling
  // the logout before actual reducers get fired and setting the whole redux store to undefined.
  appState = clearReduxOnLogout(appState, action);
  return combinedReducers(appState, action);
};

export default rootReducer;
