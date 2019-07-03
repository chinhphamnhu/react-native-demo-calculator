import React, {Component} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

const CyberButton = ({content, style, onPress, onLayout, textColor, fontSize}) => (
  <TouchableOpacity
    style={style}
    activeOpacity={0.8}
    onPress={onPress}
    onLayout={onLayout ? onLayout : null}>
    <Text style={
        {
          color: textColor ? textColor : 'white',
          fontSize: fontSize ? fontSize : 26
        }
      }>{content}</Text>
  </TouchableOpacity>
)

export default CyberButton
