import React from 'react';


class AccordionSection extends React.Component{

    constructor(props) {
    super(props);
    this.displayName = 'AccordionSection';
    this.onSelect = this.onSelect.bind(this);
    
 }
 onSelect() {
        // tell the parent Accordion component that this section was selected
        this.props._onSelect(this.props.id);   
    }

    
    render() {
        var className = 'accordion-section' + (this.props._selected ? ' selected' : '');
    
        return (
            <div className={className}>
            <div className="sec">
                <a href="#" onClick={this.onSelect}>
                    {this.props.title}
                </a>
            </div>
                <div className="body">
                    {this.props.children}
                </div>
            </div>
        );
    }

};

module.exports = AccordionSection;
