import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    margin: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    minHeight: 30,
    width: 100,
  },

  userSend: {
    alignItems: 'flex-end',
  },

  inputContainer: {
    backgroundColor: 'green',
  },

  input: {
    borderColor: 'black',
  },

  timeTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
