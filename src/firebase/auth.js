
import {auth} from './firebase';

//sign up 

  export const doCreateUserWithEmailAndPassword = (email, password)=>
  auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  //sign out 
  export const doSignOut=()=>
  auth.signOut();

  //password reset
  export const doPasswordReset=(email)=>
  auth.doPasswordReset(email);

  //password change 
  export const doPasswordChange=(password)=>
  auth.doPasswordChange(password);