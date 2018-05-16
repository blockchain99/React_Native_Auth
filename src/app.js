import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';
import { Header, Button, CardSection, Spinner } from './components/common';


class App extends Component {
  // state = { loggedIn: false };
  state = { loggedIn: null };

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
//user signed -> obj repersenting user, user out -> null(undefined)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
        );
      case false:
         return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

//<CardSection>..</CardSection> make show Log Out
  // renderContent() {
  //   if (this.state.loggedIn) {
  //     return (
  //     <CardSection>
  //       <Button>
  //          Log Out
  //       </Button>
  //     </CardSection>
  //     );
  //   }
  //   return <LoginForm />;
  // }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
