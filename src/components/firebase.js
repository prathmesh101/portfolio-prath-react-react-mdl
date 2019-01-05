import firebase from 'firebase/app';
import 'firebase/database';

  var config = {
    apiKey: "AIzaSyB1nHUE3tlk6nxgnVT-eFBkPml5g68ooV4",
    authDomain: "react-portfolio-5332f.firebaseapp.com",
    databaseURL: "https://react-portfolio-5332f.firebaseio.com",
    projectId: "react-portfolio-5332f",
    storageBucket: "react-portfolio-5332f.appspot.com",
    messagingSenderId: "871404260791"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service


  export const database = firebase.database().ref('/contact');
