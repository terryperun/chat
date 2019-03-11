import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import moment from 'moment';

const RenderItem = ({ item, index, messages }) => {
  const itemIndex = (index) => {
    if (index < messages.length - 1) {
      return index + 1;
    }
    return index;
  };

  isSenderSame = (currentMessage, prevMessage) =>
    currentMessage - prevMessage > 10800000;

  const firstMessageDate = index === messages.length - 1;

  const titleTime = moment(item.dateTime, 'x').format(
    'DD MMM YYYY hh:mm a',
  );

  const title =
    isSenderSame(
      item.dateTime,
      messages[itemIndex(index)].dateTime,
    ) || firstMessageDate ? (
      <View style={s.titleTime}>
        <Text>{titleTime}</Text>
      </View>
    ) : null;

  return (
    <View style={s.container}>
      <View>{title}</View>
      <View
        key={index}
        style={[
          s.messageContainer,
          item.fromUser === 'Taras' ? s.userSend : s.interlocutor,
        ]}
      >
        <View style={s.message}>
          <Text style={s.text}>{item.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;
