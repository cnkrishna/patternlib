import React from 'react';
import ReactDOM from 'react-dom';
import CustomCellRenderer from './DefaultCellRenderer';

class TreePane extends React.Component{

    constructor(props){
        super(props);
        if(this.props.toggle){
            this.toggle = props.toggle.bind(this);
        }
        if(this.props.componentWillMount){
            this.componentWillMount = props.componentWillMount.bind(this);
        }
    }

    render(){


        let self = this;
        let childNodes = [];
        let classes = [];
        const children = this.props.model.items;
        let cellRenderer =  <CustomCellRenderer model={this.props.model} parent={this.toggle.bind(this)}/>;
        if (children) {



                if (this.props.expanded) {
                childNodes = children.map(function (node, index) {
                    if(node.isFolder){
                        return <TreePane key={index} model={node}
                                toggle={self.props.toggle}/>
                    }
                });
                }
                classes.push('toggle');
                classes.push(this.props.expanded?'collapse':'expand');
            }




        return (
            <div className="Node">
            <div className={classes.join(' ')}>
                {cellRenderer}
            </div>
            {childNodes}
            </div>
            );
    }
}

TreePane.propTypes={
    toggle: React.PropTypes.func,
};
export default TreePane;