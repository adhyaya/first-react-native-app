import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import {connect} from 'react-redux';

import * as actions from './Redux/Actions';

const Profile = (props) => {

  useEffect(()=>{
    props.navigation.addListener('beforeRemove',(e)=>{
      if(!props.isSuccess){
      e.preventDefault();
      alert('Cannot go back');
      }
    })
  },[props.navigation])

  const logoutHandler =()=>{
    props.onLogout();
  }
  if( props.isSuccess){
    props.navigation.naviate('Login');
  }
  return (
    <View style={styles.container}>
      <Text>
        Profile
      </Text>
      <Button
      title="Logout"
      onPress={logoutHandler}
      />
    </View>
  )
}

const mapStateToProps =(state)=>({
  user: state.login.user,
  isLoading: state.profile.isLoading,
})

const mapDispatchToProps=(dispatch)=>({
  onLogout: () => dispatch(actions.userLogout()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
