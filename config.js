import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDeJQYOFWqNGg0jFAsnPnP9KSkUBeUzibc",
    authDomain: "team-voting-app-e2dde.firebaseapp.com",
    databaseURL: "https://team-voting-app-e2dde-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-e2dde",
    storageBucket: "team-voting-app-e2dde.appspot.com",
    messagingSenderId: "322835490321",
    appId: "1:322835490321:web:a4b7398ef1dbf2286ff3b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();