import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyDrj-g40Nq2--XbX58bkf_YDwJqm2v6UqQ",
    authDomain: "mukemmel-app-219b2.firebaseapp.com",
    databaseURL: "https://mukemmel-app-219b2.firebaseio.com",
    projectId: "mukemmel-app-219b2",
    storageBucket: "mukemmel-app-219b2.appspot.com",
    messagingSenderId: "1007405843784",
    appId: "1:1007405843784:web:219a8e895806b29c879f7d",
    measurementId: "G-7XNDMP883J"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const databaseRef = firebase.database().ref();
export const auth = firebase.auth();
export const commentsRef = databaseRef.child("comments");
export const postsRef = databaseRef.child("posts");
export {firebase};