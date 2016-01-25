var React = require('react');
var _ = require('lodash');

var FilteredResturantInspectionsStore = require('../stores/FilteredResturantInspectionsStore');

var ResturantInspection = require('./ResturantInspection');

var ResturantInspectionsList = React.createClass({
    getInitialState() {
        return {
            filteredResturantInspections: [],
            isLoading: true
        };
    },
    componentDidMount() {
        this.unsubscribes = [
            FilteredResturantInspectionsStore.listen(this.handleStoreChange)
        ];
    },
    componentWillUnmount() {
        _.each(this.unsubscribes, (unsubscribe) => { unsubscribe(); });
    },
    handleStoreChange() {
        var self = this;
        var isLoading = FilteredResturantInspectionsStore.isLoading;
        var filteredResturantInspections = FilteredResturantInspectionsStore.filteredResturantInspections;
        if (isLoading || filteredResturantInspections.length === 0) {
            filteredResturantInspections = self.state.filteredResturantInspections;
        }

        this.setState({
            filteredResturantInspections: filteredResturantInspections,
            isLoading: isLoading
        });
    },
    render() {
        return (
            <div>
                <div>Resturant Inspections</div>
                <div>
                    {
                        _.map(this.state.filteredResturantInspections, (resturantInspection) => {
                            return (
                                <ResturantInspection {...resturantInspection}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = ResturantInspectionsList;