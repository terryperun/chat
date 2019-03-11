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

  let titleTime;
  isSenderSame = (currentMessage, prevMessage) => {
    const timeNow = new Date().getTime();
    const timeNowDifference = timeNow - currentMessage;
    const timeDifference = currentMessage - prevMessage;
    if (timeNowDifference > 86400000) {
      if (timeDifference > 86400000) {
        titleTime = moment(item.dateTime, 'x').format('MMM Do YY');
        return true;
      }
    } else if (timeDifference > 10800000) {
      titleTime = moment(item.dateTime, 'x').format('LT');
      return true;
    }
  };

  const firstMessageDate = index === messages.length - 1;
  if (firstMessageDate) {
    titleTime = moment(item.dateTime, 'x').format('MMM Do YY');
  }

  const title =
    firstMessageDate ||
    isSenderSame(
      item.dateTime,
      messages[itemIndex(index)].dateTime,
    ) ? (
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
