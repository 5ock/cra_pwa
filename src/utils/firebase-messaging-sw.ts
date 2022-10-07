// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs8oPMm1-V3JptIxFP7LwGb7x8LxBJjuc",
  authDomain: "testpush-cc588.firebaseapp.com",
  projectId: "testpush-cc588",
  storageBucket: "testpush-cc588.appspot.com",
  messagingSenderId: "754000738529",
  appId: "1:754000738529:web:a17d67ae9056c0bea61fa0",
  measurementId: "G-SS1DFSEYSD"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const messaging = getMessaging(firebase);
getToken(messaging, {vapidKey: "BD3uFRpJMZqUzjAvzsPl8a2K0FvN4Ab4irrNQzcCwZkTeyF9INHH38h9ys0p6FQbZKeShwQCs-38Mo_J0qxL-aA"}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});