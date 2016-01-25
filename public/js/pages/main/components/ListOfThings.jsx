var React = require('react');
var _ = require('lodash');

var Thing = require('./Thing');

var ListOfThings = React.createClass({
    render() {
        return (
            <div style={{padding: 100}}>
                <div>{this.props.title}</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = ListOfThings;
