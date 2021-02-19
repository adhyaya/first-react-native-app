import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import auth from '@react-native-firebase/auth';

import LoginView from './Screens/LoginPage/LoginPageView';
/* importing context */
import AuthContext from './contexts/authContext';
import HomeScreen from './Screens/HomeScreeen/HomeScreen';

/* import asyncStorage */
import { AsyncStorage } from "@react-native-community/async-storage";

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaView>
      <AuthContext.Provider
        value={{
        }}
      >
        {user ? <HomeScreen /> : <LoginView />}
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
