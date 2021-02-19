import * as firebase from 'firebase';

export const firebaseApp = () => {
  if (!firebase.apps.length) {
    return firebase.initializeApp(FIREBASE_CONFIG);
  }
  return firebase.app();
};

const realtimeDb = firebaseApp().database();

