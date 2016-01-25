var React = require('react');

var FoundPet = React.createClass({
    render() {
        var ps = this.props;
        var height = 45;
        return (
            <div style={{textAlign: 'center', maxHeight: height, display: 'flex', alignItems: 'center'}}>
                {
                    (ps.image)?
                        (<img style={{maxHeight: height}} src={ps.image.url}/>):
                        ('No Image')
                }
            </div>
        );
    }
});

module.exports = FoundPet;
