var React = require('react');
var he = require('he');

var FoundPetsToResturantInspectionsRatio = React.createClass({
    render() {
        var ps = this.props;
        return (
            <div style={{textAlign: 'right', width: 150, fontFamily:'monospace'}}>
                {
                    ((ps.ratio && _.padStart(ps.ratio.toFixed(3), 3)) || '–.–––') +
                    ' (' +
                    _.padStart(ps.foundPets.toString(), 3, he.decode('&nbsp;')) +
                    ' / ' +
                    _.padStart(ps.resturantInspections.toString(), 3, he.decode('&nbsp;')) +
                    ')'
                }
            </div>
        );
    }
});

module.exports = FoundPetsToResturantInspectionsRatio;
