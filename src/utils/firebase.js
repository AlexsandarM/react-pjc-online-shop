import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAYwJ7HzfHqmhKjgJPsLcyL8oGaAMhbF50',
  authDomain: 'online-shop-745c6.firebaseapp.com',
  projectId: 'online-shop-745c6',
  storageBucket: 'online-shop-745c6.appspot.com',
  messagingSenderId: '27832818558',
  appId: '1:27832818558:web:f4c05317b3c4eb0c6a712f',
  measurementId: 'G-CDWM746S9E',
});

const auth = firebase.auth();

export { auth };
