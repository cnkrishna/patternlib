import React from 'react';
 import SingleFileUpload from '../components/SingleFileUpload';
 import {fileUploadToServer} from '../action/fileUploadAction';
 import {getJobStatus} from '../action/CheckJobStatusAction';
 import Upload from '../components/uploadInProgress';
 import { connect } from 'react-redux'
import { Link, browserHistory, hashHistory } from 'react-router'
const getSelectedValues = (dataArray) => {
  if (dataArray.length > 0) {
    return dataArray[dataArray.length-1];
  }
  return [];
}

const mapStateToProps = (state) => {
    const fileUpload = getSelectedValues(state.fileUpload);

    return {
      name: fileUpload.Name,
      file: fileUpload.file
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave(values, dispatch){
        const fileObj = document.querySelector('input[name="file"]')
        const filePath = fileObj.value;
        let name;
        if(filePath !== 'undefied'){
          const nameOfFile = filePath.split('\\');
          name = nameOfFile[nameOfFile.length-1];
        }
       
        const fileSize = fileObj.size;
      const dataObj = {
          rows: [
                  { 
                    Name: name, Size: fileSize+"kb", Progress: 100, status:'Success'
                  }
              ]
        }
       var fd = new FormData(document.querySelector('form')); 

      dispatch(fileUploadToServer(fd,values));
      dispatch(getJobStatus(dataObj));
       hashHistory.push('/UploadInProgress');
    }
  }
}

const FileUploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(SingleFileUpload)

  export default FileUploadContainer;
