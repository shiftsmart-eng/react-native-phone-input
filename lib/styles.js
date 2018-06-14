import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#e7e7e7',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: {
    width: SCREEN_WIDTH,
    height: 100,
  },
  flag: {
    height: 20,
    width: 30,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#cecece',
    backgroundColor: '#cecece',
    marginRight: 5,
  },
  text: {
    height: 20,
    padding: 0,
    justifyContent: 'center',
  },
  touchableRow: {
    flexDirection: 'row',
  },
  touchableIcon: {
    marginRight: 5,
  },
  countryPickerButton: {
    padding: 5,
  },
});
