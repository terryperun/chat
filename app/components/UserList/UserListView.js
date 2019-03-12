import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles';

import s from './styles';

const UserListView = ({
  name,
  time,
  lastMessage,
  countNewMessage,
  cutMessage,
  onPress,
}) => {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      <View style={s.nameAndMessageContainer}>
        <View style={s.nameContainer}>
          <Text>{name}</Text>
        </View>
        <View>
          <Text>{cutMessage(lastMessage)}</Text>
        </View>
      </View>
      <View style={s.rightContainer}>
        <View style={s.countNewMessage}>
          <Text>{countNewMessage}</Text>
        </View>
        <View style={s.iconContainer}>
          <MaterialIcons
            name="chevron-right"
            size={32}
            color={colors.grey}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListView;
