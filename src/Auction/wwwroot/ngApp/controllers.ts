namespace MyApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class ItemsController
    {
        public items;

        constructor(private itemService: MyApp.Services.ItemService)
        {
            this.items = this.itemService.ListItems();
        }


    }

    export class DetailsController
    {
        public item;
        public bid;

        constructor(private itemService: MyApp.Services.ItemService,
                    private $stateParams: ng.ui.IStateParamsService,
                    private $state: ng.ui.IStateService,
                    private bidService: MyApp.Services.BidService)
        {
            this.GetItem();
        }

        GetItem()
        {
            let itemID = this.$stateParams['id'];
            //console.log(itemID);
            this.item = this.itemService.GetItem(itemID);
        }

        SaveBid()
        {
            this.bid.itemID = this.item.id;
            //console.log(this.bid);
            this.bidService.SaveBid(this.bid).then(() =>
            {
                this.bid.name = "";
                this.bid.price = "";
                this.GetItem();
            });
        }
    }

    export class ItemCreateController
    {
        public itemToCreate;

        constructor(private itemService: MyApp.Services.ItemService, private $state: ng.ui.IStateService)
        {
            console.log("ItemCreateController");
        }

        SaveItem()
        {
            this.itemService.SaveItem(this.itemToCreate).then(() =>
            {
                this.itemToCreate.name = "";
                this.itemToCreate.description = "";
                this.itemToCreate.daysLeft = "";
                this.$state.go('items');
            });
        }
    }

}
