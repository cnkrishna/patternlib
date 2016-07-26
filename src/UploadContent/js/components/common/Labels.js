import React from 'react';

class Labels extends React.Component{

render(){

	var labelName = this.props.label;
	var underLine = this.props.underline;
	if(underLine === 'true'){
		labelName = <u>{labelName}</u>;
	}else{
		labelName = labelName;
	}

	return(
			<div className='clabelOrg'>
				{labelName}
			</div>

		);
}

}

export default Labels;