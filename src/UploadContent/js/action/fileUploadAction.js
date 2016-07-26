import fileUploadApi from '../api/fileUploadApi'
import { Link, browserHistory, hashHistory } from 'react-router'

  export function  fileUploadToServer (formData,values){
    return dispatch => {
      fileUploadApi.get_Data().then(function(success){

        const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(success.text,"text/xml");
        const token = xmlDoc.getElementsByTagName("ticket")[0].childNodes[0].nodeValue;                

	         fileUploadApi.post_Data(formData,values,token).then(function(success){

                   let responseData = JSON.parse(success.xhr.responseText);
                   console.log(responseData)

	         		const apiData = {
				         rows :  [
				                  { 
				                    Name: responseData.properties['cmis:contentStreamFileName'].value, 
				                    Size: Math.round(responseData.properties['cmis:contentStreamLength'].value/1024)+"kb", 
				                    Progress: 100, 
				                    status:'Success'
				                  }
				              ]
				            }
			        dispatch({
			          type : 'JOB_STATUS',
			          data : apiData
			        })
				hashHistory.push('/UploadInProgress');
	         },function(error){
	         	 console.log('Aflerco_Upload_Error:' + error); 	         	 
	         })
         

      },function(error){
       console.log('Aflerco_Tocken_Error:' + error);   
      })
  }
} 