import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
      apiKey: "AIzaSyD_doQXC6shRxqFuo3MqX80AjzdmhZ6sFM",
      authDomain: "chat-web-app-46b89.firebaseapp.com",
      databaseURL: "https://chat-web-app-46b89-default-rtdb.firebaseio.com",
      projectId: "chat-web-app-46b89",
      storageBucket: "chat-web-app-46b89.appspot.com",
      messagingSenderId: "1054557095729",
      appId: "1:1054557095729:web:cbe3a2083a8993efb7d210"
    };

   export const app = firebase.initializeApp(firebaseConfig);
   export const auth = app.auth();
   export const database = app.database();