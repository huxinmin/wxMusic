import { SETPLAYLIST } from '../types/playList'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const setPlayList = createAction(SETPLAYLIST, (playList, currentPlayIndex) => {
	console.log("设置播放列表和当前播放")
	console.log(playList)
	console.log(currentPlayIndex)
	return {playList: playList, currentPlayIndex:currentPlayIndex}
})