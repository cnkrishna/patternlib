import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CheckJobStatus from '../components/checkJobStatus/checkJobStatusPopup';
import * as JobStatusActions from '../action/CheckJobStatusAction';
import {getJobStatus} from '../action/CheckJobStatusAction';

const getSelectedValues = (dataArray) => {
  if (dataArray.length > 0) {
    return dataArray[dataArray.length-1];
  }
  return [];
}

const mapStateToProps = (state) => {
  const data = getSelectedValues(state.CheckJobStatusReducers)
  return {
  	rows : data.rows,
  	columns : data.columns,
    status : data.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(JobStatusActions, dispatch),
     componentWillMount: function () {
   }
  }
}

const CheckJobStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckJobStatus)

export default CheckJobStatusContainer;