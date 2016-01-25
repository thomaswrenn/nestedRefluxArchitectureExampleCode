var React = require('react');

var FoundPetsToResturantInspectionsRatiosList = require('./FoundPetsToResturantInspectionsRatiosList');
var FoundPetsList = require('./FoundPetsList');
var ResturantInspectionsList = require('./ResturantInspectionsList');
var ZipcodeFilterField = require('./ZipcodeFilterField');

var ListsOfThingsDashboard = React.createClass({
    render() {
        return (
            <div>
                <ZipcodeFilterField/>
                <FoundPetsToResturantInspectionsRatiosList/>
                <FoundPetsList/>
                <ResturantInspectionsList/>
            </div>
        );
    }
});

module.exports = ListsOfThingsDashboard;
