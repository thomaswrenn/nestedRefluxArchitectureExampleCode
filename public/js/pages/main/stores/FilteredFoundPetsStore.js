var _ = require('lodash');
var Reflux = require('reflux');

var FoundPetsStore = require('./FoundPetsStore');
var ZipcodeFilterStringStore = require('./ZipcodeFilterStringStore');

var Actions = require('../actions/Actions');

var FilteredFoundPetsStore = Reflux.createStore({
    init() {
        this.isLoading = true;
        this.filteredFoundPets = this.filterFoundPetsGivenZipcodeFilterString(
            FoundPetsStore.foundPets,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        FoundPetsStore.listen(this.recalculateAndEmitChange);
        ZipcodeFilterStringStore.listen(this.recalculateAndEmitChange);
    },
    recalculateAndEmitChange() {
        this.isLoading = FoundPetsStore.isLoading || ZipcodeFilterStringStore.isLoading || false;
        this.filteredFoundPets = this.filterFoundPetsGivenZipcodeFilterString(
            FoundPetsStore.foundPets,
            ZipcodeFilterStringStore.zipcodeFilterString
        );
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            filteredFoundPets: this.filteredFoundPets,
            isLoading: this.isLoading
        });
    },
    filterFoundPetsGivenZipcodeFilterString(foundPets, zipcodeFilterString) {
        return _.filter(foundPets, (foundPet) => {
            return _.startsWith(foundPet.zip, zipcodeFilterString);
        });
    }
});

module.exports = FilteredFoundPetsStore;


