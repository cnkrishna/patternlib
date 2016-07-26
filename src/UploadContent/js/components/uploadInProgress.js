import React, { Component, PropTypes } from 'react';
import { Link, browserHistory, hashHistory } from 'react-router';
import Upload from './uploadInProgress';
import Accordion from './common/Accordion';
import AccordionSection from './common/AccordionSection';
import ReactTabs from 'react-tabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class uploadInProgress extends Component {

	constructor(props){
		super(props);
    this.displayName = 'uploadInProgress';
	}

  render () {
    	
    	const{name,file} = this.props;
        return (
            <div className="pe-status">
              <div className="upload-status">
           <h2>Upload in progress</h2>
              <b>Uploading:</b> {name}
              <div className="pe-jobstatus-link"><span>Check <Link to="/CheckJobStatus">Job Status Page</Link> for upload status</span></div>
              </div>
            </div>
        )
    }
}

export default uploadInProgress;