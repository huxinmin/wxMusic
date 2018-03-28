import { handleActions } from 'redux-actions'
import { rankList} from '../states/rankList'

export default handleActions({}, {
  rankList: rankList
})