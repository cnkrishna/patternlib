import assetsApi from '../api/TreePaneApi'
import { GET_FOLDER, TOGGLE} from '../constants/TreePaneConstant'

  export function  getFolders (){
    return dispatch => {
      assetsApi.getRootChildren().then(function(res){
        dispatch({
          type : GET_FOLDER,
          data : res.body,
        })
      },function(error){
       console.log('fetching child folders data:' + error);
      })
  }
  }


export function toggle(booValue, folderName){

return dispatch => {
      assetsApi.getFoldersService(folderName).then(function(res){
        dispatch({
          type : 'TOGGLE_TEST',
          data : res.body,
          toggle : booValue
        })
      },function(error){
       console.log('fetching child folders data:' + error);
      })
  }



}