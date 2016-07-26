import { GET_FOLDER, TOGGLE} from '../constants/TreePaneConstant'

let initilizeValues = [{

              items: '',
               expanded: true
}];


const folderTree = (state = initilizeValues, action)=>{

  switch(action.type) {
    case GET_FOLDER:
    return  [
              ...state,
              {
                  items: action.data,
                  expanded: true
              }
    ]
    break;

    case 'TOGGLE_TEST':
    return[
            ...state,
            {
              items : action.data,
              expanded : action.toggle
            }
        ];

    default:
    return state
    }
  }

  export default folderTree;