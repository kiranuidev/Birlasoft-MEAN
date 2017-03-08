//module creating
angular.module("snapkart", ["register", "common", "products", "ui.bootstrap", "ui.router"]);


//config syntax
angular.module("snapkart")
    .config(["$stateProvider", function($stateProvider) {
        console.log("config : Main Module");

        //defining states.
        var registerObj = {
            templateUrl: "app/templates/register.html",
            controller: "registerCtrl as rc"
        };
        var loginObj = {
            templateUrl: "app/templates/login.html"
        };
        var productsObj = {
            templateUrl: "app/templates/products.html",
            controller: "productsCtrl as pc"
        };
        var homeObj = {
            templateUrl: "app/templates/home.html"
        };

        //register the object to the states
        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("home", homeObj);


    }]);

angular.module("snapkart")
    .run([function() {
        console.log("run : Main Module");
    }]);


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