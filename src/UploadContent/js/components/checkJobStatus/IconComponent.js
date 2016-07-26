import React from 'react';

class IconComponent extends React.Component{



render(){

	const img = this.props.src;

	return(
			<div>
				<img alt="alt text" src={img}/>
			</div>

		);
}

}

export default IconComponent;