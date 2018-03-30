import { handleActions } from 'redux-actions'
import { GETPLAY, NEXTPLAY, PREVPLAY } from '../types/play'

export default handleActions({
  [GETPLAY] (state, action) {
    console.log(action)
    console.log(state)
    return {
      ...state,
      play: action.payload.data.data[0].url
    }
  },
  [NEXTPLAY] (state, action) {
    return {
      ...state,
      play: action.payload
    }
  }
}, {
  play:""
})