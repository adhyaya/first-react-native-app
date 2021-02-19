import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import SignUp from './Screens/SignUp/SignUp';
import Login from './Screens/LoginPage/LoginPageView'
import Profile from './Screens/Profile/Profile';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="Login"
            component={Login} />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}