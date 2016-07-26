 import React from 'react';
 import Upload from '../components/uploadInProgress';
 import { connect } from 'react-redux'

const getSelectedValues = (dataArray) => {
  if (dataArray.length > 0) {
    return dataArray[dataArray.length-1];
  }
  return [];
}

const mapStateToProps = (state) => { 
    const fileUpload = getSelectedValues(state.CheckJobStatusReducers);

    return {
      name: fileUpload.rows[0].Name,
      file: fileUpload.file,
    }
}

const UploadProgressContainer = connect(
  mapStateToProps,
  null
  )(Upload)

  export default UploadProgressContainer;
