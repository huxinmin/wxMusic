import { GET, REFRESH } from '../types/rankDetail'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getRankDetail = createAction(GET, (url,id) => {
	console.log(url)
	return new Promise(resolve => {
		wepy.request(url).then((res)=>{
			console.log(res.data)
			resolve({data:res.data.playlist, id:id})
		})
  	})
})