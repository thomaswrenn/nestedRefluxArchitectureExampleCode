var React = require('react');
var _ = require('lodash');

var FoundPetsToResturantInspectionsRatiosStore = require('../stores/FoundPetsToResturantInspectionsRatiosStore');

var ListOfThings = require('./ListOfThings');
var FoundPetsToResturantInspectionsRatio = require('./FoundPetsToResturantInspectionsRatio');

var FoundPetsToResturantInspectionsRatiosList = React.createClass({
    getInitialState() {
        return {
            foundPetsToResturantInspectionsRatios: [],
            isLoading: true
        };
    },
    componentDidMount() {
        this.unsubscribes = [
            FoundPetsToResturantInspectionsRatiosStore.listen(this.handleStoreChange)
        ];
    },
    componentWillUnmount() {
        _.each(this.unsubscribes, (unsubscribe) => { unsubscribe(); });
    },
    handleStoreChange() {
        var self = this;
        var isLoading = FoundPetsToResturantInspectionsRatiosStore.isLoading;
        var foundPetsToResturantInspectionsRatios = FoundPetsToResturantInspectionsRatiosStore.foundPetsToResturantInspectionsRatios;
        if (isLoading) {
            foundPetsToResturantInspectionsRatios = self.state.foundPetsToResturantInspectionsRatios;
        }

        this.setState({
            foundPetsToResturantInspectionsRatios: foundPetsToResturantInspectionsRatios,
            isLoading: isLoading
        });
    },
    render() {
        return (
            <ListOfThings title="Found Pets to Resturant Inspections Ratio">
                {
                    _.map(this.state.foundPetsToResturantInspectionsRatios, (foundPetsToResturantInspectionsRatio, zipcode) => {
                        return (
                            <div>
                                <h3>{zipcode}</h3>
                                <FoundPetsToResturantInspectionsRatio {...foundPetsToResturantInspectionsRatio}/>
                            </div>
                        );
                    })
                }
            </ListOfThings>
        );
    }
});

module.exports = FoundPetsToResturantInspectionsRatiosList;
