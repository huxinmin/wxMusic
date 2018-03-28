import { GET, REFRESH } from '../types/rankDetail'
import { createAction } from 'redux-actions'

export const getRankDetail = createAction(GET, (url) => {
	return new Promise(resolve => {
    	setTimeout(() => {
      		resolve(1)
    	}, 1000)
  	})
})