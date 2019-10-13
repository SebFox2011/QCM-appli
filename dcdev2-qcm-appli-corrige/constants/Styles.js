import {StyleSheet} from "react-native";
import Constants from 'expo-constants';
import colors from './Colors';

const container = {
  flex: 1,
  backgroundColor: '#fff',
};

export default StyleSheet.create({
  container: container,
  containerWithPaddingTop: {
    ...container,
    paddingTop: Constants.statusBarHeight
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: colors.greenLight,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.greenDark
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  flatList: {
    padding: 20
  },
  flatListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    backgroundColor: colors.greenLight,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.greenDark
  },
  flatListItemBadge: {
    textAlign: 'center',
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  answerItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
