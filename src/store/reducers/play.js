import { handleActions } from 'redux-actions'
import { GET, NEXT, PREV } from '../types/play'

export default handleActions({
  [GET] (state, action) {
    // console.log(action)
    // console.log(state)
    return {
      ...state,
      play: action.payload.data
    }
  },
  [NEXT] (state, action) {
    return {
      ...state,
      play: action.payload
    }
  }
}, {
  play:{}
})