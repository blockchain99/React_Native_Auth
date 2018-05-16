import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
  // Initialize Firebase
    apiKey: 'AIzaSyCuyEY8MpnDxN_HxSQDIHAvOKLBs7GDQ38',
    authDomain: 'authentification-f00fc.firebaseapp.com',
    databaseURL: 'https://authentification-f00fc.firebaseio.com',
    projectId: 'authentification-f00fc',
    storageBucket: 'authentification-f00fc.appspot.com',
    messagingSenderId: '67836674866'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
