var Reflux = require('reflux');

var Actions = Reflux.createActions({
    "fetchFoundPets" : {children: ["completed","failed"]}, // called when requesting Users from the Web API and when completed or failed after async
    "fetchResturantInspections" : {children: ["completed","failed"]}, // called when requesting Timesheets from the Web API and when completed or failed after async

    "updateZipcodeFilterString" : {}, // called when user unchecks or checks a client in the Timesheets Dashboard filter
});

module.exports = Actions;
