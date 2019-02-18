import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  nameAndMessageContainer: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },

  rightContainer: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {},
  iconContainer: {},
});
export default styles;
