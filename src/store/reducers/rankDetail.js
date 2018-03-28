import { handleActions } from 'redux-actions'
import { GET, REFRESH } from '../types/rankDetail'

export default handleActions({
  [GET] (state, action) {
    return {
      ...state,
      rankDetail: {name:"33"+action.payload}
    }
  },
  [REFRESH] (state, action) {
    return {
      ...state,
      rankDetail: action.payload
    }
  }
}, {
  rankDetail:{name:"sd"}
})