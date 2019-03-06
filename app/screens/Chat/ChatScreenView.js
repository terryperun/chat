import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { TextInput } from 'recompose';
// import Input from '../../components/Input/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from '../../components';

import s from './styles';

const ChatScreenView = ({
  id,
  name,
  navigation,
  onPress,
  onSend,
  messageInputText,
  setMessageInputText,
  messages,
  state,
}) => {
  return (
    // <KeyboardAwareScrollView>
    <View style={s.container}>
      <FlatList
        data={messages}
        renderItem={({ item, index, section }) => (
          <View key={index} style={s.messageContainer}>
            <View style={s.message}>
              <Text>{item.message}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
        inverted
      />

      <View style={s.inputContainer}>
        <Text>
          id: {id}, name: {name}
        </Text>
        <Input
          multiline
          style={s.input}
          value={messageInputText}
          onChangeText={setMessageInputText}
        />
        <TouchableOpacity onPress={onSend}>
          <Text>Send message</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </KeyboardAwareScrollView>
  );
};

export default ChatScreenView;
