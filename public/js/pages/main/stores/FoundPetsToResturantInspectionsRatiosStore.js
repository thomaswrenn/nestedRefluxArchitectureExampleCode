var _ = require('lodash');
var Reflux = require('reflux');

var FilteredZipcodesWithInfoStore = require('./FilteredZipcodesWithInfoStore');

var Actions = require('../actions/Actions');

var FoundPetsToResturantInspectionsRatiosStore = Reflux.createStore({
    init() {
        this.isLoading = true;
        this.foundPetsToResturantInspectionsRatios = this.calculateFoundPetsToResturantInspectionsRatios(
            FilteredZipcodesWithInfoStore.filteredZipcodesWithInfo
        );
        FilteredZipcodesWithInfoStore.listen(this.recalculateAndEmitChange);
    },
    recalculateAndEmitChange() {
        this.isLoading = FilteredZipcodesWithInfoStore.isLoading || false;
        this.foundPetsToResturantInspectionsRatios = this.calculateFoundPetsToResturantInspectionsRatios(
            FilteredZipcodesWithInfoStore.filteredZipcodesWithInfo
        );
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            filteredZipcodesWithInfo: this.filteredZipcodesWithInfo,
            isLoading: this.isLoading
        });
    },
    calculateFoundPetsToResturantInspectionsRatios(zipcodesWithInfo) {
        return _.mapValues(zipcodesWithInfo, (zipcodeWithInfo, zipcode) => {
            var foundPetsCount = _.get(zipcodeWithInfo, 'foundPets.length', 0);
            var resturantInspectionsCount = _.get(zipcodeWithInfo, 'resturantInspections.length', 0);
            return {
                foundPets: foundPetsCount,
                resturantInspections: resturantInspectionsCount,
                ratio: (
                    (resturantInspectionsCount > 0)?
                        (foundPetsCount/resturantInspectionsCount):
                        undefined
                )
            };
        });
    }
});

module.exports = FoundPetsToResturantInspectionsRatiosStore;


