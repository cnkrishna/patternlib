import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FileUploadContainer from '../container/FileUploadContainer';
import CheckJobStatusContainer from '../container/CheckJobStatusContainer';
import UploadProgressContainer from '../container/UploadProgressContainer';
import SearchLibrary from './SearchLibrary';
import BrowseAssets from './BrowseAssets';

class AddAnAsset extends Component {

  constructor(props) {
    super(props);
    this.onSave = props.onSave;
  }

  render() {

  
  let indexVal = 2;
  let fileuploadContainer = <FileUploadContainer />;
  let checkJobStatus = <CheckJobStatusContainer />;
  let uploadProgress = <UploadProgressContainer />;

  if(this.props.children != null){   
    fileuploadContainer = '';
	   	if(this.props.children.props.location.pathname == '/UploadInProgress'){
	   	checkJobStatus = '';
	    }
	    if(this.props.children.props.location.pathname == '/CheckJobStatus'){
	   	  uploadProgress = '';
	    }

  }else{
    	
  	checkJobStatus = '';
  	uploadProgress = '';
  
  }
  
    return (
      <div className="pe-uploadasset">
         <Tabs id="addAnAssets" selectedIndex={indexVal}>
          <TabList>
            <Tab>Search Library</Tab>
            <Tab>Browse Assets</Tab>
            <Tab>Upload Files</Tab>
          </TabList>
          <TabPanel>
           <SearchLibrary />
          </TabPanel>
          <TabPanel className="browseAssets">
           <BrowseAssets />
          </TabPanel>
        <TabPanel>
          <div>
          {fileuploadContainer}
          </div>
          <div>
          {checkJobStatus}
          </div>
          <div>
          {uploadProgress}
          </div>
       </TabPanel>
      </Tabs>
    </div>
    )


  }
}


module.exports = AddAnAsset;