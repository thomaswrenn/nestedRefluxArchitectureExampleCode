var React = require('react');
var _ = require('lodash');

var FilteredFoundPetsStore = require('../stores/FilteredFoundPetsStore');

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
        if (isLoading || filteredFoundPets.length === 0) {
            filteredFoundPets = self.state.filteredFoundPets;
        }

        this.setState({
            filteredFoundPets: filteredFoundPets,
            isLoading: isLoading
        });
    },
    render() {
        return (
            <div>
                <div>Found Pets</div>
                <div>
                    {
                        _.map(this.state.filteredFoundPets, (foundPet) => {
                            return (
                                <FoundPet {...foundPet}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = ResturantInspectionsList;
