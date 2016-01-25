var React = require('react');
var _ = require('lodash');

var Thing = require('./Thing');

var ListOfThings = React.createClass({
    render() {
        return (
            <div style={{padding: 40, width: 400}}>
                <h2 style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.title}</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = ListOfThings;
