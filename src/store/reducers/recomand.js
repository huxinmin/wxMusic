import { handleActions } from 'redux-actions'
import { GETRECOMAND} from '../types/recomand'

export default handleActions({
  [GETRECOMAND] (state, action) {
    console.log("recomand reducers")
    console.log(action)
    console.log(state)
    return {
      ...state,
      recomand: action.payload
    }
  }
}, {
  recomand:[]
})