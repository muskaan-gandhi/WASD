import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5B7uxMSOM25eQXKy5JTGM3XhiQ1w8Kl8",
    authDomain: "wasd-3f2af.firebaseapp.com",
    projectId: "wasd-3f2af",
    storageBucket: "wasd-3f2af.appspot.com",
    messagingSenderId: "382589828804",
    appId: "1:382589828804:web:8fc6f1523611cd3e4d9391",
    measurementId: "G-TP413K7MLC"
})

var db = firebaseApp.firestore();

export {db};