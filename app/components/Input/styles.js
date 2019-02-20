import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  textInput: {
    height: 60,
    flex: 1,
  },
});

export default styles;
