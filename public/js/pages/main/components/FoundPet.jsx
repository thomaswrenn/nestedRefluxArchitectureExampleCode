var React = require('react');

var Thing = require('./Thing');

var FoundPet = React.createClass({
    render() {
        var ps = this.props;
        var height = 45;
        return (
            <Thing style={{maxHeight: height}}>
                {
                    (ps.image)?
                        (<img style={{maxHeight: height}} src={ps.image.url}/>):
                        ('No Image')
                }
                &nbsp;–&nbsp;{ps.zip}
            </Thing>
        );
    }
});

module.exports = FoundPet;
