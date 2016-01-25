var _ = require('lodash');
var Reflux = require('reflux');

var ZipcodesWithInfoStore = require('./ZipcodesWithInfoStore');
var ZipcodeFilterStringStore = require('./ZipcodeFilterStringStore');

var Actions = require('../actions/Actions');

var FilteredZipcodesWithInfoStore = Reflux.createStore({
    init() {
        this.isLoading = true;
        this.filteredZipcodesWithInfo = this.filterZipcodesGivenFilterString(
            ZipcodesWithInfoStore.zipcodesWithInfo,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        ZipcodesWithInfoStore.listen(this.recalculateAndEmitChange);
        ZipcodeFilterStringStore.listen(this.recalculateAndEmitChange);
    },
    recalculateAndEmitChange() {
        this.isLoading = ZipcodesWithInfoStore.isLoading || ZipcodeFilterStringStore.isLoading || false;
        this.filteredZipcodesWithInfo = this.filterZipcodesGivenFilterString(
            ZipcodesWithInfoStore.zipcodesWithInfo,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            filteredZipcodesWithInfo: this.filteredZipcodesWithInfo,
            isLoading: this.isLoading
        });
    },
    filterZipcodesGivenFilterString(zipcodesWithInfo, zipcodeFilterString) {
        return (zipcodeFilterString !== '')?
            _.pick(zipcodesWithInfo, _.keys(zipcodesWithInfo).filter((key) => {
                return _.startsWith(key, zipcodeFilterString);
            })):
            zipcodesWithInfo;
    }
});

module.exports = FilteredZipcodesWithInfoStore;


