import { StyleSheet } from 'react-native';
import Colors from './colors';

export default {
  success: StyleSheet.create({}),
  info: StyleSheet.create({}),
  warning: StyleSheet.create({}),
  error: StyleSheet.create({}),
  refresh: StyleSheet.create({
    container: {
      backgroundColor: Colors.BLUE,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'white',
      padding: 5,
    },
    text: {
      color: 'white',
      fontSize: 12,
    },
  }),
};
