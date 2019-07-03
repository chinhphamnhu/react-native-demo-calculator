import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {CyberButton} from '../CyberButton'
import {UnitList} from '../UnitList'
import styles from './styles'

const keyboards = [
  ['AC', '+⧸_', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', ',', '=']
]

const CyberPad = (props) => (
  <View
    style={styles.cyberPad}
    onLayout={props.measureCyberPad}>
    <View
      style={[
        styles.pretender,
        {height: props.cyberButtonHeight / 2 + props.cyberPadPadding}
      ]}
    />
  <Keyboard {...props}/>
  <View style={styles.unitContainer}>
    <UnitList {...props}/>
  </View>
</View>

)

const Keyboard = (props) => {
  let views = keyboards.map((row, rowIndex) => {
    let columns = row.map((title, columnIndex) => {
      let format = formatKeyboard(title, props)
      return <CyberButton
        onLayout={props.measureCyberButton}
        style={[styles.cyberButton, format.style, title === '0' ? styles.doubleButton : null]}
        content={title}
        onPress={format.action}
        textColor={format.textColor}
        key={'column-' + columnIndex}/>
    })
    return <View style={styles.row} key={'row-' + rowIndex}>{columns}</View>
  })
  return views
}

const formatKeyboard = (title, props) => {
  switch (title) {
    case 'AC':
      return {
        style: styles.gray,
        textColor: 'black',
        action: () => {props.clearResult()}
      }
    case '+⧸_':
      return {
        style: styles.gray,
        textColor: 'black',
        action: () => {props.togglePlusMinus()}
      }
    case '%':
      return {
        style: styles.gray,
        textColor: 'black',
        action: () => {props.saveExpression('%')}
      }
    case '÷':
      return {
        style: styles.orange,
        textColor: 'white',
        action: () => {props.saveExpression('/')}
      }
    case '×':
      return {
        style: styles.orange,
        textColor: 'white',
        action: () => {props.saveExpression('*')}
      }
    case '−':
      return {
        style: styles.orange,
        textColor: 'white',
        action: () => {props.saveExpression('-')}
      }
    case '+':
      return {
        style: styles.orange,
        textColor: 'white',
        action: () => {props.saveExpression('+')}
      }
    case '=':
      return {
        style: styles.orange,
        textColor: 'white',
        action: () => {props.calcResult()}
      }
    default:
      return {
        style: styles.dark,
        textColor: 'white',
        action: () => {props.saveExpression(title)}
      }
  }
}

export default CyberPad
