var Reflux = require('reflux');

var Actions = require('../actions/Actions');

var ResturantInspectionsStore = Reflux.createStore({
    init() {
        this.resturantInspections = {};
        this.isLoading = true;
        Actions.fetchResturantInspections.listen(this.onFetchResturantInspections);
        Actions.fetchResturantInspections.completed.listen(this.onFetchResturantInspectionsCompleted);
    },
    onFetchResturantInspections() {
        this.isLoading = true;
        this.emitChange();
    },
    onFetchResturantInspectionsCompleted(resturantInspections) {
        this.isLoading = false;
        this.resturantInspections = resturantInspections;
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            resturantInspections: this.resturantInspections,
            isLoading: this.isLoading
        });
    }
});

module.exports = ResturantInspectionsStore;
