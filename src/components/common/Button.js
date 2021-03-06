import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//props.onPress-> onPress, props.children -> children
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
//1. whenever Button pressed, I will run function provided
//by parent component, which coming from props obj
//(props.onPress obj).
//2. props.children for Buy Now in <Button>Buy Now</Button>
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
         {children}
      </Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};
//export obj with key of Button
export { Button };//{ Button: Button }
