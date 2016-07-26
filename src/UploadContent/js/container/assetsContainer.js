import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchingAssets} from '../action/assets';
import assetsGenerator from '../components/browse/assetsGenerator';

const getSelectedValues = (dataArray) => {
  if (dataArray.length > 0) {
    return dataArray[dataArray.length-1];
  }
  return [];
}

const mapStateToProps = (state) => {
  let data = getSelectedValues(state.assets)
  return {
   assetsData: data.assetsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(JobStatusActions, dispatch),
     componentWillMount: function () {
       dispatch(fetchingAssets());
   }
  }
}

const assetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(assetsGenerator)

export default assetsContainer;