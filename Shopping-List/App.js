import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
//import * as firebase from 'firebase';
//import firestore from 'firebase';
//('firebase/firestore');

//import firebase from 'firebase/app';
//import 'firebase/firestore';

//import Firestore from './FirebaseService';

const firebase = require('firebase');
require('firebase/firestore');

class App extends React.Component {
  constructor() {
    super();

    var firebaseConfig = {
      apiKey: "AIzaSyCrgk5SLO3rdQTHg9nsZ3BxscYWHpWCqWA",
      authDomain: "test-12a2d.firebaseapp.com",
      databaseURL: "https://test-12a2d.firebaseio.com",
      projectId: "test-12a2d",
      storageBucket: "test-12a2d.appspot.com",
      messagingSenderId: "711565463174",
      appId: "1:711565463174:web:927a4a00b704547e"
    };

    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp(firebaseConfig)
    }

    this.referenceShoppinglistUser = null;

    this.referenceShoppingLists = firebase.firestore().collection('shoppinglists');

    this.state = {
      lists: [],
      uid: 0,
      loggedInText: 'some text'
    };
  }


  onCollectionUpdate = (querySnapshot) => {
    const lists = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      lists.push({
        name: data.name,
        items: data.items.toString()
      });
    });
    this.setState({
      lists
    });
  };

  addList() {
    this.referenceShoppingLists.add({
      name: 'TestList',
      items: ['eggs', 'pasta', 'veggies'],
      uid: this.state.uid
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Shopping Lists!</Text>
        <Text>{this.state.loggedInText}</Text>
        <FlatList
          data={ this.state.lists }
          renderItem= {({ item }) =>
          <Text style={styles.item}>{item.name}: {item.items}</Text>}
        />
        <Text>Click the button and the items eggs, pasta and veggies are added to the db</Text>
        <Button style={styles.button} onPress={() => this.addList()} title="click and add" />
      </View>
    );
  }

  componentDidMount() {
    //this.unsubscribe = this.referenceShoppingLists.onSnapshot(this.onCollectionUpdate);

    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        loggedInText: 'Hello'
      })
      // create a reference to the active user's documents
      this.referenceShoppinglistUser = firebase.firestore().collection('shoppinglists').where('uid', '==', this.state.uid)
      // listen for collection changes for current user
      this.unsubscribeListUser = this.referenceShoppinglistUser.onSnapshot(this.onCollectionUpdate);
    })
  }

  componentWillUnmount() {
    this.unsubscribeListUser();
    this.authUnsubscribe()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 50,
    paddingLeft:20,
    paddingRight: 20
  },
  item: {
    fontSize: 20,
    color: 'blue'
  },
  text: {
    fontSize: 30
  },
  button: {
    fontSize: 30,
    paddingBottom:30
  },

  left: StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  wrapper: {
    borderRadius: 15,
    backgroundColor: Color.leftBubbleBackground,
    marginRight: 60,
    minHeight: 20,
    justifyContent: 'flex-end',
  },
  containerToNext: {
    borderBottomLeftRadius: 3,
  },
  containerToPrevious: {
    borderTopLeftRadius: 3,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}),

});

export default App
