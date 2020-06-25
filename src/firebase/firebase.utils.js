
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config=
 {
    apiKey: "AIzaSyCKArbWr79TI12pf86A1uk0QlXX5vl36Mo",
    authDomain: "saistylesdb.firebaseapp.com",
    databaseURL: "https://saistylesdb.firebaseio.com",
    projectId: "saistylesdb",
    storageBucket: "saistylesdb.appspot.com",
    messagingSenderId: "986733225498",
    appId: "1:986733225498:web:03ada180fed77bf23053a3",
    measurementId: "G-KZVV3KMSYB"
  };
  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`) ;
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
        const{displayName,email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log('error creating user',error.message);
        }

    }



  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
