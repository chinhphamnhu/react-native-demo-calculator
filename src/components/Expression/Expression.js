import React from 'react'
import {Text} from 'react-native'
import styles from './styles'

const B = (props) => <Text style={
  {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'orange'
  }
}>{props.children}</Text>

const Expression = ({content}) => {
  return (
    textNormal(content)
  )
}

const textNormal = (content) => {
  return (<Text style={styles.question} numberOfLines={1}>{content}</Text>)
  // let unit = ''
  // if (content.search('kg') !== -1) {
  //   unit = 'kg'
  // } else if (content.search('') !== -1) {
  //
  // }
  //
  //
  //
  //
  //
  //
  //
  // const matchKilogram = content.search('kg')
  // content = content.replace('kg', '')
  // if (matchKilogram !== -1) {
  //   return (
  //     <Text style={styles.question} numberOfLines={1}>{content}<B>kg</B></Text>
  //   )
  // } else {
  //   return (
  //     <Text style={styles.question} numberOfLines={1}>{content}</Text>
  //   )
  // }
}

export default Expression
