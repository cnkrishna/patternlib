import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../common/Image';

let img = '/images/folder.png';
class DefaultCellRenderer extends React.Component{

	constructor(props){
		super(props);
		if(this.props.toggle){
			this.toggle = props.toggle.bind(this);
		}
	}

	toggle(self, filename){
		console.log("toggle called in Children :" + self);
		this.props.parent(self);
	}

	render(){
		let self = this;
		let fileName = this.props.model.fileName;
		if (fileName){
			if (fileName.length > 28) {
				fileName = fileName.substring(0,10) + '...';
			}
		}

		let imgs;
		if(fileName !== undefined){
			imgs = <Image src={img}/>
		}

		return(
				<span onClick={self.toggle.bind(self,fileName)} id={fileName}>
					{imgs} {fileName}
				</span>
			)
	}
}

DefaultCellRenderer.propTypes={
	parent : React.PropTypes.func,
};

export default DefaultCellRenderer;