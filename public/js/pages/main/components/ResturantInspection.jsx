var React = require('react');

var Thing = require('./Thing');

var ResturantInspection = React.createClass({
    render() {
        var ps = this.props;
        return (
            <Thing>
                {ps.name}&nbsp;({ps.business_id})&nbsp;–&nbsp;{ps.zip_code}
            </Thing>
        );
    }
});

module.exports = ResturantInspection;
