import React from 'react';
import Image from './IconComponent.js';
import  ProgressBar from '../common/ProgressBar';
let img = '/images/accept.png';

class RenderRow extends React.Component{

constructor(props){
    super(props);
    this.state={
      visible:true,
      display : ''
    };
    this.toggle = this.toggle.bind(this);
}

toggle(type){
	const newState = !this.state.visible;
	const name = type.Name;
    this.setState({visible: newState});
    this.setState({display: name});
    this.props.parent(newState, name);
}


getAssets(node, style){
    const assets = node;
    let assetArry = [];
    var key;
      	for(key in assets){
     		 assetArry.push(
     		 			<div className="children">
     		 			<div className="col-13" style={style}>{assets[key].name}</div>
      					<div className="col-13" style={style}>{assets[key].size}</div>
      					<div className="col-13" style={style}><ProgressBar percentage={'0'}/></div>
      					<div className="col-13" style={style}>
      					
      					<span className="img"><Image src={img}/></span>
      					<span>{assets[key].status}</span>
      					</div>
      					

      					</div>
                    );
    }
    return assetArry;
  }

getChildren(self, assetRow){

	let asset = assetRow.assets;
 	let style = {};
	if(assetRow.Name !== this.state.display){
      style.display = 'none';
    }else if(assetRow.Name === this.state.display){
    	if(this.state.visible){
    		style.display = 'none';
    	}else{
    		style.display = '';
    	}
    }
	return this.getAssets(asset, style);
}


render(){
	var childList;
	self = this;
	var nameElement;
	var test = this.props.myFunc;
	var rows = this.props.rows.map(function(item,index){
	var rowArr = [];
	childList = self.getChildren(self,item);
		for(var row in item){
			
			if(row == 'Name'){
				nameElement = <u><a onClick={self.toggle.bind(self,item)}>{item[row]}</a></u>;
			}
			else if(row == 'Progress'){
				console.log("Progress : "+item[row]);
				if(item[row] === 100){
					nameElement = <ProgressBar percentage={'100'}/>;
					
				}else{
					nameElement = <ProgressBar percentage={'0'}/>;
				}
			}else if(row == 'status'){
				console.log("Status : "+item[row]);
				if(item[row] === 'success')
				{
				nameElement = <div><span className='parentImg'><Image src={img}/></span><span>{item[row]}</span>
							  </div>
				}else{
					nameElement = <div><span><i className="fa fa-check-circle"></i>{item[row]}</span></div>
				}
			}else{
				if(row != 'assets'){
					nameElement = item[row];
				}else{
					nameElement = '';
				}
			}
			if(nameElement != ''){
				rowArr.push(<div className="col-3">{nameElement}</div>);
			}
		}
		rowArr.push(childList);
		return <div className="sub-rows">{rowArr}</div>
				
	});

	return(
			<div>
				{rows}
			</div>
		)
}
}
RenderRow.propTypes={
	parent:React.PropTypes.func,
};
export default RenderRow;