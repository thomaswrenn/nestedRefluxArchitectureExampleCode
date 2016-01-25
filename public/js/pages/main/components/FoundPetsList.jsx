var React = require('react');
var _ = require('lodash');

var FilteredFoundPetsStore = require('../stores/FilteredFoundPetsStore');

var ListOfThings = require('./ListOfThings');
var FoundPet = require('./FoundPet');

var ResturantInspectionsList = React.createClass({
    getInitialState() {
        return {
            filteredFoundPets: [],
            isLoading: true
        };
    },
    componentDidMount() {
        this.unsubscribes = [
            FilteredFoundPetsStore.listen(this.handleStoreChange)
        ];
    },
    componentWillUnmount() {
        _.each(this.unsubscribes, (unsubscribe) => { unsubscribe(); });
    },
    handleStoreChange() {
        var self = this;
        var isLoading = FilteredFoundPetsStore.isLoading;
        var filteredFoundPets = FilteredFoundPetsStore.filteredFoundPets;
        if (isLoading) {
            filteredFoundPets = self.state.filteredFoundPets;
        }

        this.setState({
            filteredFoundPets: filteredFoundPets,
            isLoading: isLoading
        });
    },
    render() {
        return (
            <ListOfThings title="Found Pets">
                {
                    _(this.state.filteredFoundPets)
                        .groupBy('zip')
                        .map((foundPetZipGroup, zipcode) => {
                            return (
                                [<h3>{zipcode}</h3>].concat(
                                    _.map(foundPetZipGroup, (foundPet) => {
                                        return (
                                            <FoundPet {...foundPet}/>
                                        );
                                    })
                                )
                            );
                        })
                        .value()
                }
            </ListOfThings>
        );
    }
});

module.exports = ResturantInspectionsList;
