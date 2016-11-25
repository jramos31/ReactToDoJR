import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCtbbVISbYFh0guuAzyiJsTCTtCxfleyKw",
  authDomain: "todoapp-18b4b.firebaseapp.com",
  databaseURL: "https://todoapp-18b4b.firebaseio.com",
  storageBucket: "todoapp-18b4b.appspot.com",
  messagingSenderId: "353799720118"
};
firebase.initializeApp(config);

firebase.database().ref(.set({
    appName: 'TodoApp'
}));
