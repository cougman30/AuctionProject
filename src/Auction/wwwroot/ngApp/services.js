var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ItemService = (function () {
            function ItemService($resource) {
                this.$resource = $resource;
                this.itemResource = this.$resource('/api/items/:id');
            }
            ItemService.prototype.ListItems = function () {
                return this.itemResource.query();
            };
            ItemService.prototype.GetItem = function (id) {
                //console.log("GetItem(id)");
                return this.itemResource.get({ id: id });
            };
            ItemService.prototype.SaveItem = function (itemToSave) {
                return this.itemResource.save(itemToSave).$promise;
            };
            return ItemService;
        }());
        Services.ItemService = ItemService;
        var BidService = (function () {
            function BidService($resource) {
                this.$resource = $resource;
                this.bidResource = this.$resource('/api/bids/:id');
            }
            BidService.prototype.SaveBid = function (bidToSave) {
                //console.log("SaveBid in BidService");
                return this.bidResource.save(bidToSave).$promise;
            };
            return BidService;
        }());
        Services.BidService = BidService;
        angular.module("MyApp").service('itemService', ItemService);
        angular.module("MyApp").service('bidService', BidService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map