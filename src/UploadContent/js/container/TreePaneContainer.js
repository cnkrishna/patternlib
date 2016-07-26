import React from 'react';
import { connect } from 'react-redux';
import {getFolders, toggle} from '../action/TreePaneAction';
import {fetchingAssets} from '../action/assets';
// import TreePaneHelper from '../components/folderpane/TreePaneHelper';
import TreePane from '../components/folderpane/TreePane';
const getSelectedValues = (dataArray) => {
  if (dataArray.length > 0) {
    return dataArray[dataArray.length-1];
  }
  return [];
}

const mapStateToProps = (state) => {
  let data = getSelectedValues(state.TreePaneReducers)
  return {
   model: data.items,
   expanded: data.expanded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     componentWillMount: function () {
       dispatch(getFolders());
      },
     toggle:function(folderName){
      console.log("Toggle Called in Container : "+folderName);
      let booValue = this.props.expanded;
         // dispatch(toggle(!booValue,folderName));
         dispatch(fetchingAssets(folderName));
      }
  }
}

const treePaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePane)

export default treePaneContainer;