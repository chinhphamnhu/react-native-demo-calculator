import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as actions from './actions'
import CyberPad from './components/CyberPad/CyberPad'
import {Expression} from './components/Expression'
import {connect} from 'react-redux'

class Main extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      cyberButtonHeight: 0,
      cyberPadPadding: 0
    }
  }

  measureCyberPad = e => {
    const {height} = e.nativeEvent.layout
    const padding = height * 0.01
    this.setState({cyberPadPadding: padding})
  }

  measureCyberButton = e => {
    const {height} = e.nativeEvent.layout
    this.setState({cyberButtonHeight: height})
  }

  render() {
    const {inputValue, previousValue} = this.props
    return (
      <View style={styles.container}>
        <View>
          <View style={{
              flex: 1,
              backgroundColor: 'black'
            }}>
            <Expression content={
                inputValue === 0 ? previousValue : inputValue
              } />
          </View>
          <CyberPad
            {...this.props}
            measureCyberPad={this.measureCyberPad}
            cyberPadPadding={this.state.cyberPadPadding}
            measureCyberButton={this.measureCyberButton}
            cyberButtonHeight={this.state.cyberButtonHeight}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

const mapStateToProps = ({previousValue, inputValue, selectedSymbol}) => ({
  previousValue, inputValue, selectedSymbol
})

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch(actions.saveExpression(payload)),
  calcResult: () => dispatch(actions.calcResult()),
  clearResult: () => dispatch(actions.clearResult()),
  togglePlusMinus: payload => dispatch(actions.togglePlusMinus(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
