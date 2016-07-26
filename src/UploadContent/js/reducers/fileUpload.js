import { FILE_SAVE} from '../constants/fileUploadConstants'
import Immutable from 'immutable'

const initilizeValues = {
  name: '',
  file: {}
}

const fileUpload = (state = initilizeValues, action)=>{
   
  switch(action.type) {

    case FILE_SAVE:
    return[
       Immutable.fromJS(state[0]).merge(Immutable.Map(action.fields)).toJS()
    ]
    case 'UPLOAD_STATUS':
    return[
       ...state,action
    ]
    default:
    return state

  }
}

  export default fileUpload;