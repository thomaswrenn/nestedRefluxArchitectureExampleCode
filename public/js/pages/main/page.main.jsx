var React = require('react');
var ReactDOM = require('react-dom');

var APIUtils = require('./api-utils/ApiUtils');
var Actions = require('./actions/Actions');

var ListsOfThingsDashboard = require('./components/ListsOfThingsDashboard');

Actions.fetchResturantInspections();
Actions.fetchFoundPets();

ReactDOM.render(
    <ListsOfThingsDashboard></ListsOfThingsDashboard>,
    document.getElementById('main')
);
