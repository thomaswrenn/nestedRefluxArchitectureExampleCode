var _ = require('lodash');
var Reflux = require('reflux');

var Actions = require('../actions/Actions');

var ZipcodeFilterStringStore = Reflux.createStore({
    init() {
        this.isLoading = false;
        this.zipcodeFilterString = '';
        Actions.updateZipcodeFilterString.listen(this.onUpdateZipcodeFilterString);
    },
    onUpdateZipcodeFilterString(zipcodeFilterStringNewValue) {
        this.zipcodeFilterString = zipcodeFilterStringNewValue;
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            zipcodeFilterString: this.zipcodeFilterString,
            isLoading: this.isLoading
        });
    }
});

module.exports = ZipcodeFilterStringStore;
