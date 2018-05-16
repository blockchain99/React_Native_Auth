import React, { Component } from 'react';
//import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
    render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
            Login!
          </Button>
        </CardSection>
      </Card>
    );
  }
}
/*below cause invariant violation:expected string but got: un
identified */
//export default LoginForm;
export { LoginForm };
