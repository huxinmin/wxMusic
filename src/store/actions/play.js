import { GETPLAY, NEXTPLAY, PREVPLAY } from '../types/play'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getPlay = createAction(GETPLAY, (url,id) => {
	console.log(url)
	return new Promise(resolve => {
		wepy.request(url).then((res)=>{
			console.log(res.data.data)
			resolve({data:res.data.data, id:id})
		})
  	})
})