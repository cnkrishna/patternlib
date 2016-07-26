"use strict";
var React = require('react');
import AssetsList from './assetsList';

class assetsContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                assetsData: props.assetsData,
                /*how many columns going to display*/
                column: 2,
                /* grid column count for responsive design*/
                cssGridLayout:6,
                /* how many records going to show per page*/
                limitRecords: 4
            }

            this.componentWillMount = props.componentWillMount.bind(this);
        }

        render() {
                var limit = this.state.limitRecords,
                    dataArray,
                    size = this.state.column,
                    cssGridLayout = this.state.cssGridLayout,
                    resultsArray = [];

                dataArray = this.props.assetsData;

                while(dataArray && dataArray.length > 0)
                    resultsArray.push(dataArray.splice(0, size));


            var indents = resultsArray.map(function (i) {
                return (
                   <div key={i[0].id} className="row">
                        <AssetsList list = {i} cssGridLayout = {cssGridLayout} />
                   </div>
                );
            });


        var body = (
          <ul>
            {indents}
          </ul>
        );


            var empty = < div className = "alert alert-info" > Cart is empty < /div>;

                return ( < div class = "container">
                    { resultsArray.length > 0 ? body : empty }
                </div>);
            }
        }

        module.exports = assetsContainer;