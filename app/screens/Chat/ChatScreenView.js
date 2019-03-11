import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from '../../components';
import RenderItem from '../../components/RenderItem/RenderItem';

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
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} messages={messages} />
        )}
        keyExtractor={(item, index) => item + index}
        inverted
      />

      <View style={s.inputContainer}>
        <Input
          multiline
          style={s.input}
          value={messageInputText}
          onChangeText={setMessageInputText}
          onSend={onSend}
        />
      </View>
    </View>
    // </KeyboardAwareScrollView>
  );
};

export default ChatScreenView;
