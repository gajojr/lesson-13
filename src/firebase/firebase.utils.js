import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQho1vUlXTASVy3_yR45Kokh9JPH3w6Xs",
    authDomain: "crwn-db-a26da.firebaseapp.com",
    databaseURL: "https://crwn-db-a26da.firebaseio.com",
    projectId: "crwn-db-a26da",
    storageBucket: "crwn-db-a26da.appspot.com",
    messagingSenderId: "608290572657",
    appId: "1:608290572657:web:9fb0b8d7432c35ece18ed0",
    measurementId: "G-SDFY3KGVCW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;