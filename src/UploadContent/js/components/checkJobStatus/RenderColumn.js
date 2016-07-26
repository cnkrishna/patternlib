import React from 'react';

class RenderColumn extends React.Component{

render(){
	
	const column = this.props.cols.map(function(currColumn,index){
		return <div className='col-3' key={index}><b>{currColumn}</b></div>;
	});	

	return(
		<div className='row'>
			{column}
		</div>
		)
}
}

export default RenderColumn;