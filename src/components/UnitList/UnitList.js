import React from 'react'
import {ScrollView} from 'react-native'
import {CyberButton} from '../CyberButton'
import styles from './styles'

const items = [
  {title: 'KILOGRAM', unit: 'kg'},
  {title: 'GRAM', unit: 'g'},
  {title: 'MILLIGRAM', unit: 'mg'},
  {title: 'MICROGRAM', unit: 'µg'},
  {title: 'NANOGRAM', unit: 'ng'},
  {title: 'PICOGRAM', unit: 'pg'},
  {title: 'TONNE', unit: 't'},
  {title: 'MEGATONE', unit: 'Mt'},
  {title: 'GIGATONNE', unit: 'Gt'}
]

const UnitList = (props) => (
  <ScrollView
    style={styles.scrollView}
    horizontal={true}
    showsHorizontalScrollIndicator={false}>
    {items.map((element, index) =>
      <CyberButton
        style={[
          styles.unitButton,
          styles.dark,
          {
            marginLeft: index === 0 ? 20 : 8,
            marginRight: index === items.length - 1 ? 20 : 8
          }
        ]}
        key={element.title}
        content={element.title}
        onPress={() => {props.saveExpression(element.unit)}}
        fontSize={14}/>
    )}
  </ScrollView>
)

export default UnitList
