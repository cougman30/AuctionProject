namespace MyApp.Services {

    export class ItemService
    {
        private itemResource;

        constructor(private $resource: ng.resource.IResourceService)
        {
            this.itemResource = this.$resource('/api/items/:id');
        }

        public ListItems()
        {
            return this.itemResource.query();
        }

        public GetItem(id)
        {
            //console.log("GetItem(id)");
            return this.itemResource.get({ id: id });
        }

        public SaveItem(itemToSave)
        {
            return this.itemResource.save(itemToSave).$promise;
        }
    }

    export class BidService
    {
        private bidResource;

        constructor(private $resource: ng.resource.IResourceService)
        {
            this.bidResource = this.$resource('/api/bids/:id');
        }

        SaveBid(bidToSave)
        {
            //console.log("SaveBid in BidService");
            return this.bidResource.save(bidToSave).$promise;
        }
    }

    angular.module("MyApp").service('itemService', ItemService);
    angular.module("MyApp").service('bidService', BidService);
}