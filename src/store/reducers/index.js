import { combineReducers } from 'redux'
import rankList from './rankList'
import rankDetail from './rankDetail'
import play from './play'

export default combineReducers({
  rankList, rankDetail, play
})