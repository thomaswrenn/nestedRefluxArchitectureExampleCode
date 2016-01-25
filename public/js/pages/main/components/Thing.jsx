var React = require('react');
var _ = require('lodash');

var Thing = React.createClass({
    render() {
        var ps = this.props;
        var style = _.assign({
            textAlign: 'center',
            maxHeight: 45,
            display: 'flex',
            alignItems: 'center'
        }, ps.style);
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Thing;
