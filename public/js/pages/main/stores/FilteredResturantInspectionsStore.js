var _ = require('lodash');
var Reflux = require('reflux');

var ResturantInspectionsStore = require('./ResturantInspectionsStore');
var ZipcodeFilterStringStore = require('./ZipcodeFilterStringStore');

var Actions = require('../actions/Actions');

var FilteredResturantInspectionsStore = Reflux.createStore({
    init() {
        this.isLoading = true;
        this.filteredResturantInspections = this.filterResturantInspectionsGivenZipcodeFilterString(
            ResturantInspectionsStore.resturantInspections,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        ResturantInspectionsStore.listen(this.recalculateAndEmitChange);
        ZipcodeFilterStringStore.listen(this.recalculateAndEmitChange);
    },
    recalculateAndEmitChange() {
        this.isLoading = ResturantInspectionsStore.isLoading || ZipcodeFilterStringStore.isLoading || false;
        this.filteredResturantInspections = this.filterResturantInspectionsGivenZipcodeFilterString(
            ResturantInspectionsStore.resturantInspections,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            filteredResturantInspections: this.filteredResturantInspections,
            isLoading: this.isLoading
        });
    },
    filterResturantInspectionsGivenZipcodeFilterString(resturantInspections, zipcodeFilterString) {
        return _.filter(resturantInspections, (value, key) => {
            return true;
        });
    }
});

module.exports = FilteredResturantInspectionsStore;


