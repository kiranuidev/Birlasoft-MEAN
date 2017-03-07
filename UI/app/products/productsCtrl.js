angular.module("products")
    .controller("productsCtrl", ["productsSvc", "$rootScope",
        function(productsSvc, $rootScope) {
            var vm = this;
            vm.products = [];
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
            vm.getProductsFromApi = function() {
                productsSvc.getProductsFromJson()
                    .then(function(response) {
                        console.log(response);
                        vm.products = response.data.products;
                        vm.pagination.totalItems = vm.products.length;
                        vm.pageChanged();
                    })
                    .catch(function(response) {
                        console.log(response);
                    });
            };
            vm.addToCart = function(product) {
                product.isAdded = true;
                $rootScope.$broadcast("PRODUCT-SELECTED", { item: product });
            };
            vm.removeFromCart = function(product) {
                product.isAdded = false;
                $rootScope.$broadcast("PRODUCT-REMOVED", { item: product });
            }
            vm.getProductsFromApi();
        }
    ]);