import React from 'react';
import {
  TextInput,
  View,
  Text,
  Platform
  // StyleSheet
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
//{label} is 'Email' <TextInput> is area, you type in
//<Text> labelStyle, <TextInput> inputStyle, <View> containerStyle
//placeholder: The string that will be rendered before text input has been entered.
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
       <Text style={labelStyle}>{label}</Text>
       <TextInput
         secureTextEntry={secureTextEntry}
         placeholder={placeholder}
         underlineColorAndroid='transparent'
         autoCorrect={false}
         value={value}
         onChangeText={onChangeText}
         style={inputStyle}
       />
    </View>
   );
  };
/*flex:2, flex:1 -> 2/3:1/1 in container */
const styles = {
 inputStyle: {
  color: '#000',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 17,
  lineHeight: 23,
  ...Platform.select({
       android: {
          lineHeight: 25,
        },
   }),
  flex: 2
 },
 labelStyle: {
   fontSize: 17,
   paddingLeft: 20,
   flex: 1
 },
 containerStyle: {
   height: 45,
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center'
 }
  };


export { Input };
