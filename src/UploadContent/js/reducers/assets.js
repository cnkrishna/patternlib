import { DISPLAY_ASSETS} from '../constants/fileUploadConstants'
import Immutable from 'immutable'

let initilizeValues = [];

const assets = (state = initilizeValues, action)=>{

  switch(action.type) {
    case DISPLAY_ASSETS:
    return[
       ...state,action.data
    ];
    break;

    default:
    return state

    }
  }

  export default assets;