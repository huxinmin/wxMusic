import { handleActions } from 'redux-actions'
import { SETPLAYLIST } from '../types/playList'

export default handleActions({
  [SETPLAYLIST] (state, action) {
    console.log("playList reducers")
    console.log(action)
    console.log(state)
    return {
      ...state,
      playList: action.payload.playList,
      currentPlayIndex:action.payload.currentPlayIndex
    }
  }
}, {
  playList:[],
  currentPlayIndex:0
})