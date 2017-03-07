angular.module("products")
    .controller("productsCtrl", ["productsSvc", function(productsSvc) {
        var vm = this;
        vm.products = productsSvc.getProducts();
        vm.pagination = {
            totalItems: vm.products.length,
            currentPage: 1
        };
        vm.pageChanged = function() {
            console.log(vm.pagination.currentPage);
            var startCount = vm.pagination.currentPage * 10 - 9;
            var endCount = vm.pagination.currentPage * 10;
            vm.productsToBind = vm.products.slice(startCount, endCount);
        };
        vm.pageChanged();
    }]);