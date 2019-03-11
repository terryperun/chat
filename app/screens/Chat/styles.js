import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
});
export default styles;
