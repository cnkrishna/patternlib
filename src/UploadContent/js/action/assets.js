import assetsApi from '../api/assets'
import { DISPLAY_ASSETS} from '../constants/fileUploadConstants'

  export function  fetchingAssets (folderName){
    return dispatch => {
      assetsApi.get_assets(folderName).then(function(res){
        dispatch(gettingThumbnails(res.body))
      },function(error){
       console.log('fetching assets data:' + error);
      })
  }
}

export function  gettingThumbnails (nodeRefs){
    return dispatch => {
        let data = assetsApi.getThumnailImages(nodeRefs);
          dispatch({
            type : DISPLAY_ASSETS,
            data : data
          })

        }
}