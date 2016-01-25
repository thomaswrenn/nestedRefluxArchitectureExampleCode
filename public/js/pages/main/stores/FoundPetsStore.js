var Reflux = require('reflux');

var Actions = require('../actions/Actions');

var FoundPetsStore = Reflux.createStore({
    init() {
        this.foundPets = {};
        this.isLoading = true;
        Actions.fetchFoundPets.listen(this.onFetchFoundPets);
        Actions.fetchFoundPets.completed.listen(this.onFetchFoundPetsCompleted);
    },
    onFetchFoundPets() {
        this.isLoading = true;
        this.emitChange();
    },
    onFetchFoundPetsCompleted(foundPets) {
        this.isLoading = false;
        this.foundPets = foundPets;
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            foundPets: this.foundPets,
            isLoading: this.isLoading
        });
    }
});

module.exports = FoundPetsStore;
