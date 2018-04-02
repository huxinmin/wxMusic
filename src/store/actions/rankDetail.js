import { GET, REFRESH } from '../types/rankDetail'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getRankDetail = createAction(GET, (url,id) => {
	console.log(url)
	return new Promise(resolve => {
		wepy.request(url).then((res)=>{
			let len = Math.min(20, Math.floor(res.data.playlist.tracks.length/2))
			res.data.playlist.tracks = res.data.playlist.tracks.slice(0,len )
			resolve({data:res.data.playlist, id:id})
		})
  	})
})