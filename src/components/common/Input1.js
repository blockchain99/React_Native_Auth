import React from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';

const Input = ({ label }) => {
  return (
    <View>
       <Text>{ label }</Text>
       <TextInput
       style={{ height: 20, width: 100 }}
       />
    </View>
   );
  };

export { Input };
