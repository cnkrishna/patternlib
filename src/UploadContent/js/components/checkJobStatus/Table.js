import React from 'react';
import Row from './RenderRow.js';
import Column from './RenderColumn.js';
import Label from '../common/Labels.js';
import { Link } from 'react-router';

class Table extends React.Component {

  constructor(props){
    super(props);
    this.state={
      checked: true,
      newName:''
    }
  }


onChildChanged(newState,name) {
        this.setState({ checked: newState });
        this.setState({newName:name});
  }

  render(){
   let jobName='';
   let jobStatusChart;
   if(!this.state.checked){
      jobName = <div className="clabel3">
                  <b><Label label="Job Name:" underline="false"/>{this.state.newName}</b>
                </div>;
      jobStatusChart = <div className="clabel1">
                        <Label label="Job Status Chart" underline="true"/>
                      </div>
   }else{
      jobStatusChart = <div className="clabel1">
                        <Label label="Job Status Chart" underline="false"/>
                      </div>
   }
    return(
      <div className="pe-jobstatus-page">
      <div className="clabel">
        {jobStatusChart}
        <div className="clabel2">
          <Link to="/">
            <Label label="Upload Start Screen" underline="true"/>
          </Link>
        </div>
      </div>
        {jobName}
        <Column cols={this.props.columns}/>
          <Row rows={this.props.rows} parent={this.onChildChanged.bind(this)}/>
        </div>
     
      );
  }
}

export default Table;