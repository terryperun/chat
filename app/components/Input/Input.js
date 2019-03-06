import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import s from './styles';

const Input = (props) => (
  <View style={s.containerInput}>
    <TextInput {...props} style={s.textInput} />
    <FontAwesome
      name="send"
      size={24}
      style={s.send}
      onPress={props.onSend}
    />
  </View>
);

export default Input;
