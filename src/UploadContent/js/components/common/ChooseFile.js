/**
 *
 */

import React from 'react';

class ChooseFile extends React.Component{

constructor(props) {
    super(props);
    this.displayName = 'Choose File';
 }

static propTypes= {
    id:React.PropTypes.string,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool
    
}
static defaultProps ={
      id:'',
      disabled:false,
      required:false
}

render() {
          
        return (
        	
            <input {...this.props.value}
            id={this.props.id} type="file"
               required={this.props.required} 
                 disabled={this.props.disabled}
                 value={null}
                 name={this.props.name}
                 className={this.props.choosefileclass}
            />
        )
    }

};

module.exports = ChooseFile;
