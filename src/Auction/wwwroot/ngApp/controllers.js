var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from the home page!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var ItemsController = (function () {
            function ItemsController(itemService) {
                this.itemService = itemService;
                this.items = this.itemService.ListItems();
            }
            return ItemsController;
        }());
        Controllers.ItemsController = ItemsController;
        var DetailsController = (function () {
            function DetailsController(itemService, $stateParams, $state, bidService) {
                this.itemService = itemService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.bidService = bidService;
                this.GetItem();
            }
            DetailsController.prototype.GetItem = function () {
                var itemID = this.$stateParams['id'];
                //console.log(itemID);
                this.item = this.itemService.GetItem(itemID);
            };
            DetailsController.prototype.SaveBid = function () {
                var _this = this;
                this.bid.itemID = this.item.id;
                //console.log(this.bid);
                this.bidService.SaveBid(this.bid).then(function () {
                    _this.bid.name = "";
                    _this.bid.price = "";
                    _this.GetItem();
                });
            };
            return DetailsController;
        }());
        Controllers.DetailsController = DetailsController;
        var ItemCreateController = (function () {
            function ItemCreateController(itemService, $state) {
                this.itemService = itemService;
                this.$state = $state;
                console.log("ItemCreateController");
            }
            ItemCreateController.prototype.SaveItem = function () {
                var _this = this;
                this.itemService.SaveItem(this.itemToCreate).then(function () {
                    _this.itemToCreate.name = "";
                    _this.itemToCreate.description = "";
                    _this.itemToCreate.daysLeft = "";
                    _this.$state.go('items');
                });
            };
            return ItemCreateController;
        }());
        Controllers.ItemCreateController = ItemCreateController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map