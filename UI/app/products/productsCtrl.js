angular.module("products")
    .controller("productsCtrl", ["productsSvc", function(productsSvc) {
        var vm = this;
        vm.products = productsSvc.getProducts();
    }]);