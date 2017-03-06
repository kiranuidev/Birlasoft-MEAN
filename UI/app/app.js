//module creating
angular.module("snapkart", ["register", "common"]);

//Controller syntax.
//Every controller belongs to a module
angular.module("snapkart")
    .controller("mainCtrl", [function() {
        var vm = this;
        vm.headerUrl = "app/templates/header.html";
        vm.brandName = "SnapKart";
        vm.loadContent = function(type) {
            var baseUrl = "app/templates/";
            vm.content = baseUrl + type + ".html"
        };
    }]);