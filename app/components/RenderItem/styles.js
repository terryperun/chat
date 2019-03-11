import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  message: {
    margin: 10,
    padding: 7,
    backgroundColor: '#1C92F5',
    borderRadius: 10,
    minHeight: 30,
    minWidth: '5%',
    maxWidth: '65%',
  },
  inp: {},

  userSend: {
    alignItems: 'flex-end',
  },
  interlocutor: {
    alignItems: 'flex-start',
  },

  input: {
    borderColor: 'black',
  },

  titleTime: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
  },
});
export default styles;
