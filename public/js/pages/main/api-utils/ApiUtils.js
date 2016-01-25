var axios = require('axios');

var Actions = require('../actions/Actions');

Actions.fetchFoundPets.listen( function() {
    axios.get('/foundPets.json', {
        params: {}
    })
        .then((foundPetsResponse) => {
            return foundPetsResponse.data;
        })
        .then( this.completed )
        .catch( this.failed );
});

Actions.fetchResturantInspections.listen( function() {
    axios.get('/resturantInspections.json', {
        params: {}
    })
        .then((resturantInspectionsResponse) => {
            return resturantInspectionsResponse.data;
        })
        .then( this.completed )
        .catch( this.failed );
});
