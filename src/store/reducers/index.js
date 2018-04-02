import { combineReducers } from 'redux'
import rankList from './rankList'
import rankDetail from './rankDetail'
import play from './play'
import recomand from './recomand'
import playList from './playList'

export default combineReducers({
  rankList, rankDetail, play, recomand, playList
})