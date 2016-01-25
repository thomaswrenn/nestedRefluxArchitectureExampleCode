var React = require('react');
var _ = require('lodash');

var FoundPetsToResturantInspectionsRatiosStore = require('../stores/FoundPetsToResturantInspectionsRatiosStore');

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
        if (isLoading || foundPetsToResturantInspectionsRatios.length === 0) {
            foundPetsToResturantInspectionsRatios = self.state.foundPetsToResturantInspectionsRatios;
        }

        this.setState({
            foundPetsToResturantInspectionsRatios: foundPetsToResturantInspectionsRatios,
            isLoading: isLoading
        });
    },
    render() {
        return (
            <div>
                <div>Found Pets to Resturant Inspections Ratio</div>
                <div>
                    {
                        _.map(this.state.foundPetsToResturantInspectionsRatios, (foundPetsToResturantInspectionsRatio) => {
                            return (
                                <FoundPetsToResturantInspectionsRatio {...foundPetsToResturantInspectionsRatio}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = FoundPetsToResturantInspectionsRatiosList;
