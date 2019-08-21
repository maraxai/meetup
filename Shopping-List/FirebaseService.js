import firebase from 'firebase';

class Firestore {
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
        firebase.initializeApp({
          apiKey: "AIzaSyCrgk5SLO3rdQTHg9nsZ3BxscYWHpWCqWA",
          authDomain: "test-12a2d.firebaseapp.com",
          databaseURL: "https://test-12a2d.firebaseio.com",
          projectId: "test-12a2d",
          storageBucket: "test-12a2d.appspot.com",
          messagingSenderId: "711565463174",
          appId: "1:711565463174:web:927a4a00b704547e"
      });
     }
  }
}

this.referenceShoppingLists = firebase.firestore().collection('shoppinglists');
export default Firestore;
