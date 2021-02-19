import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

/* import constants */
import keys from '../../constants/constants';

/* importing contexts */
import authContext from '../../contexts/authContext';

const LoginView = () => {
  const context = React.useContext(authContext);
  console.log(context.authenticated);

  return (
    < View style={style.container} >
      <View>
        <Text>
          {keys.emailAddress}
          <TextInput
            style={style.input}
          />
        </Text>
      </View>
      <Button
        title={keys.signUp}
        onPress={context.login}
      />
    </View >
  )
}

export default LoginView;

const style = StyleSheet.create({
  container: {
    color: 'red',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})