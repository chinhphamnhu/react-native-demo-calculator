import {
  TOGGLE_PLUS_MINUS,
  SAVE_EXPRESSION,
  CALCULATE_RESULT,
  CLEAR_RESULT
} from '../constants'

import initializeState from '../store/initializeState'

const reducer = (state = initializeState, action) => {

  handleNumber = () => {
    let input = (parseInt(state.inputValue) * 10) + parseInt(action.payload)
    return {
      ...state,
      inputValue: input
    }
  }

  handleString = () => {
    switch (action.payload) {
      case '*':
      case '+':
      case '-':
      case '/':
        return {
          ...state,
          previousValue: state.inputValue,
          inputValue: 0,
          selectedSymbol: action.payload
        }
      default: return state
    }
  }

  switch (action.type) {
    case CLEAR_RESULT: return initializeState
    case TOGGLE_PLUS_MINUS: {
      let result
      try {
        const temp = eval(state.inputValue)
        result = state.inputValue === '0' ? 0 : -temp
      } catch(error) {
      } finally {
        if (!result || typeof + result !== 'number') result = 0
        return {
          ...state,
          inputValue: result
        }
      }
    }
    case CALCULATE_RESULT: {
      if (state.previousValue !== 0) {
        let symbol = state.selectedSymbol,
            inputValue = state.inputValue,
            previousValue = state.previousValue

        if (!symbol) return

        let result
        try {
          const temp = eval(previousValue + symbol + inputValue)
          result = temp === parseInt(temp) ? temp : temp.toFixed(2)
        } catch (error) {
        } finally {
          if (!result || typeof + result !== 'number') result = 0
          return {
            ...state,
            previousValue: 0,
            inputValue: result,
            selectedSymbol: null
          }
        }
      } else return state
    }
    case SAVE_EXPRESSION:
      const operator = ['+', '-', '*', '/', '%']
      if (operator.indexOf(action.payload) != -1) {
        return handleString()
      } else {
        return handleNumber()
      }

    default: return state
  }
}

export default reducer
