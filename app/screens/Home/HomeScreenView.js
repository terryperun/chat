import React from 'react';
import { View, Text } from 'react-native';

import { UserList } from '../../components';
import { data } from '../../mocks';

const HomeScreenView = () => {
  const items = data.map((i) => (
    <UserList
      key={i.id}
      id={i.id}
      name={i.name}
      time={i.time}
      lastMessage={i.lastMessage}
      countNewMessage={i.countNewMessage}
    />
  ));
  return (
    <View>
      <View>{items}</View>
    </View>
  );
};

export default HomeScreenView;
