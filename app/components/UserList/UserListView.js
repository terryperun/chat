import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import s from './styles';

const UserListView = ({
  name,
  time,
  lastMessage,
  countNewMessage,
}) => (
  <TouchableOpacity style={s.container}>
    <View style={s.nameContainer}>
      <Text>{name}</Text>
    </View>
    <View style={s.rightContainer}>
      <View style={s.countNewMessage}>
        <Text>{countNewMessage}</Text>
      </View>
      <View style={s.iconContainer}>
        <MaterialIcons name="chevron-right" size={32} color="green" />
      </View>
    </View>
  </TouchableOpacity>
);

export default UserListView;
