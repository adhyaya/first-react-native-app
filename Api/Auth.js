import firebase from '../config/firebase';


export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const singIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)

}