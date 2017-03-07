//module creating
angular.module("snapkart", ["register", "common", "products", "ui.bootstrap"]);

//Controller syntax.
//Every controller belongs to a module
angular.module("snapkart")
    .controller("mainCtrl", ["$scope", function($scope) {
        var vm = this;
        vm.cartItems = 0;
        vm.headerUrl = "app/templates/header.html";
        vm.brandName = "SnapKart";
        vm.loadContent = function(type) {
            var baseUrl = "app/templates/";
            vm.content = baseUrl + type + ".html"
        };
        vm.click = function() {
            console.log("handle user click");
        };
        $scope.$on("PRODUCT-SELECTED", function(event, args) {
            vm.cartItems++;
        });
        $scope.$on("PRODUCT-REMOVED", function(event, args) {
            vm.cartItems--;
        });
    }]);