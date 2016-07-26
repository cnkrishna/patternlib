"use strict";
var React = require('react');
import Assets from './assets';

class assetsList extends React.Component {
    render () {
        var cssGridLayout = this.props.cssGridLayout;

        var listItems = this.props.list.map(function(item) {
             return (
                <div key={item.id} className={"col-md-"+cssGridLayout}>
                    <Assets productTemp = {item} />
                </div>
            );
        });

        return (
            <div test>
              {listItems}
            </div>
        )
    }
}

module.exports = assetsList;