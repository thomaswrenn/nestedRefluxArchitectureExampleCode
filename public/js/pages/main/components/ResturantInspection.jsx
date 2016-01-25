var React = require('react');

var ResturantInspection = React.createClass({
    render() {
        var ps = this.props;
        return (
            <div>
                <div>{ps.name} ({ps.business_id})</div>
            </div>
        );
    }
});

module.exports = ResturantInspection;
