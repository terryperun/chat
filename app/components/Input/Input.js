import React from 'react';
import { View, TextInput } from 'react-native';
import s from './styles';

const Input = (props) => (
  <View style={s.containerInput}>
    <TextInput {...props} style={s.textInput} />
  </View>
);

export default Input;
