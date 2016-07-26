/**
 *
 */

import React from 'react';


class Accordion extends React.Component{

constructor(props) {
    super(props);
    this.displayName = 'Accordion';
    this.enhanceSection = this.enhanceSection.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
            selected: this.props.selected,
    };
 }


 enhanceSection(child) {
        const selectedId = this.state.selected;
        const id = child.props.id;

        return React.cloneElement(child, {
            key: id,
            // private attributes/methods that the Section component works with
            _selected: id === selectedId,
            _onSelect: this.onSelect
        });
    }

  onSelect(id) {
        this.setState({selected: id});
    }

render() {
    	var children = React.Children.map(
            this.props.children, this.enhanceSection);

        return (
            <div className="accordion">
                {children}
            </div>
        );
    }

};

module.exports = Accordion;

