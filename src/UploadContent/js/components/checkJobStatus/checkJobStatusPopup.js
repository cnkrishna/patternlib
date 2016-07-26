import React from 'react';
import ReactTabs from 'react-tabs';
import Table from './Table.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class checkJobStatusPopup extends React.Component{

	constructor(props){
		super(props);
		this.componentWillMount = props.componentWillMount;
	}


render(){
const columns = ['Name', 'Size', 'Progress','Status']
return(
		<div>
           <Table className="jobScheduleTable"
             columns={columns} 
             rows={this.props.rows} />          
      	</div>
		);
}


}

module.exports = checkJobStatusPopup;