import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './Redux/Actions';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLogin = () => {
    props.loginWithEmailAndPassword(email, password);
    if (props.user) {
      props.navigation.navigate('Profile');
    }
  }

  const onPressSignUp = () => {
    props.navigation.navigate('SignUp');
  }
  if(props.success){
    alert('loggin in');
    props.navigation.navigate('Profile');
  }
  if (props.isLoading) {
    alert('loggin in');
    return (
      <View>
        <ActivityIndicator
          size="large"
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={onLogin}
        >Login</Text>
      </TouchableOpacity>
      <Button
        title="Don't have an account yet? Sign up"
        onPress={onPressSignUp}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  success:state.login.success,
  isLoading:state.login.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  loginWithEmailAndPassword: (email, password) => dispatch(actions.loginWithEmailAndPassword(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonSignup: {
    fontSize: 12
  }
})