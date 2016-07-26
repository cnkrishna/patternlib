/**
 *
 */
var React = require('react');
let interval = {};
let ProgressBarComp = React.createClass({

        getInitialState: function () {
            return {
                percentage: 100 + '%',
                start: true,
                stop: false
            };
        },
        componentWillReceiveProps: function(nextProps){
            this.setState({percentage: nextProps.percentage + '%'});
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            if (nextState.stop === true) {
                clearInterval(interval);
            }
            return (nextState.stop !== true);
        },

        stopProgress:function () {
            this.setState({stop: true});
        },
        render: function () {
            return (
                    < div id = "show-progress-with-jsx" ref = "foo" >
                    < div className = "progress" >
                    < div className = "progress-bar"
                    style = {{width:this.state.percentage}} > < /div>
                < /div>
                < /div>
                );
        }
});
module.exports = ProgressBarComp;