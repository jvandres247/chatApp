import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCJ-VsDMl2pDwcty_KqofiW9BaMb1cUF1w",
    authDomain: "chatapp-f5761.firebaseapp.com",
    databaseURL: "https://chatapp-f5761.firebaseio.com",
    projectId: "chatapp-f5761",
    storageBucket: "chatapp-f5761.appspot.com",
    messagingSenderId: "188926112982",
    appId: "1:188926112982:web:3b7886e22ac1f7d79b0577"
  };

export default firebase.initializeApp(firebaseConfig);