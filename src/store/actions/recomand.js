import { GETRECOMAND} from '../types/recomand'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getRecomand = createAction(GETRECOMAND, (url) => {
	console.log(url)
	return new Promise(resolve => {
		wepy.request(url).then((res)=>{
			console.log(res.data)
			resolve(res.data.result)
		})
  	})
})