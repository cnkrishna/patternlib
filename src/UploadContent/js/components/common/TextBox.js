/**
*
*/
import React from 'react';

class TextBox extends React.Component{

constructor(props) {
    super(props);
    this.displayName = 'TextBox';
 }

static propTypes= {
    id:React.PropTypes.string,
    value: React.PropTypes.object,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
    maxLength:React.PropTypes.string,
    autofocus: React.PropTypes.bool,
    
}
static defaultProps ={
      id:'',
      value: '',
      placeholder:'',
      disabled:false,
      required:false,
      maxLength:'30',
      autofocus: false,
}

render() {

	const inputState = (value) => {
      if (this.props.value.touched && this.props.value.error) {
        return 'pe-input--error'
      } else if (this.props.value.touched && this.props.value.value) {
        return ''
      } else {
        return ''
      }
    }
          
        return (
            <input 
            id={this.props.id}
            className= {this.props.className +' '+ inputState(this.props.value)}
              ref="input" type="text"
               required={this.props.required} 
               maxLength={this.props.maxLength}
                value ={this.props.value} {...this.props.value} 
                placeholder={this.props.placeholder} 
                readOnly={this.props.readOnly}
                 disabled={this.props.disabled}
            />
        )
    }

};

module.exports = TextBox;
