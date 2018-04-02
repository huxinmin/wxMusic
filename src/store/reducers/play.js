import { handleActions } from 'redux-actions'
import { GETPLAY } from '../types/play'

export default handleActions({
  [GETPLAY] (state, action) {
    console.log(action)
    console.log(state)
    return {
      ...state,
      play: action.payload.data.data[0].url
    }
  }
}, {
  play:""
})