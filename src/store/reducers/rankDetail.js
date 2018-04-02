import { handleActions } from 'redux-actions'
import { GET, REFRESH } from '../types/rankDetail'

export default handleActions({
  [GET] (state, action) {
    console.log("rankDetail reducers")
    console.log(action)
    console.log(state)
    let { rankDetail } = state;
    rankDetail[action.payload.id] = action.payload.data;
    return {
      ...state,
      rankDetail: rankDetail.slice()
    }
  },
  [REFRESH] (state, action) {
    return {
      ...state,
      rankDetail: action.payload
    }
  }
}, {
  rankDetail:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
})