import React from 'react'

import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  console.log('ji')
  return (
    <View>
      <Text>
        HomeScreen
      </Text>
    </View>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
