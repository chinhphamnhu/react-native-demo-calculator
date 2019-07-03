import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)
const buttonSize = (23 * screenWidth / 100) - 10
const doubleButtonWidth = (48 * screenWidth / 100) - 20

const styles = StyleSheet.create({
  cyberPad: {
    alignItems: 'center',
    height: (buttonSize * 6) + 40,
    backgroundColor: 'black',
    paddingVertical: 8
  },
  pretender: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative'
  },
  cyberButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    margin: 6
  },

  doubleButton: {
    width: doubleButtonWidth,
    margin: 8
  },
  dark: {
    backgroundColor: 'rgb(51, 51, 51)'
  },
  gray: {
    backgroundColor: 'rgb(131, 131, 131)'
  },
  orange: {
    backgroundColor: 'rgb(253, 148, 38)'
  },
  scrollView: {

  },
  unitContainer: {
    height: 30,
    marginVertical: 16
  }
})

export default styles
