var _ = require('lodash');
var Reflux = require('reflux');

var FoundPetsStore = require('./FoundPetsStore');
var ResturantInspectionsStore = require('./ResturantInspectionsStore');

var Actions = require('../actions/Actions');

var ZipcodesWithInfoStore = Reflux.createStore({
    init() {
        this.isLoading = true;
        this.zipcodesWithInfo = this.getUniqueZipcodesAndInfoFromAllDataSourcesUsingPaths({
            foundPets: {
                source: FoundPetsStore.foundPets,
                path: 'zip',
            },
            resturantInspections: {
                source: ResturantInspectionsStore.resturantInspections,
                path: 'zip_code'
            }
        });
        FoundPetsStore.listen(this.recalculateAndEmitChange);
        ResturantInspectionsStore.listen(this.recalculateAndEmitChange);
    },
    recalculateAndEmitChange() {
        this.isLoading = FoundPetsStore.isLoading || ResturantInspectionsStore.isLoading || false;
        this.zipcodesWithInfo = this.getUniqueZipcodesAndInfoFromAllDataSourcesUsingPaths({
            foundPets: {
                source: FoundPetsStore.foundPets,
                path: 'zip',
            },
            resturantInspections: {
                source: ResturantInspectionsStore.resturantInspections,
                path: 'zip_code'
            }
        });
        this.emitChange();
    },
    emitChange() {
        this.trigger({
            zipcodesWithInfo: this.zipcodesWithInfo,
            isLoading: this.isLoading
        });
    },
    getUniqueZipcodesAndInfoFromAllDataSourcesUsingPaths(sourcesAndPaths) {
        return _.merge.apply(_,
            _.map(sourcesAndPaths, (sourceAndPath, sourceKey) => {
                return _(sourceAndPath.source)
                    .groupBy(sourceAndPath.path)
                    .mapValues((sourceItemsForZip) => {
                        var returnObj = {};
                        returnObj[sourceKey] = sourceItemsForZip;
                        return returnObj;
                    })
                    .value();
            })
        );
    }
});

module.exports = ZipcodesWithInfoStore;


