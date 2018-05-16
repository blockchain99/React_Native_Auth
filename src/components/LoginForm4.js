import React, { Component } from 'react';
//import { View, TextInput } from 'react-native';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };


//authenticate user by firebase auth svc
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authetication Failed!' });
        });
    });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner size='small' />
      );
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login!
        </Button>
      );
   }
    render() {
    return (
/*onChangeText={text => this.setState({ email:text })}
password not be plain text!*/
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
/*below cause invariant violation:expected string but got: un
identified */
//export default LoginForm;
export { LoginForm };
