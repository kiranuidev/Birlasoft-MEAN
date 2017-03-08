angular.module("register")
    .controller("registerCtrl", ["lookupSvc", "$state", function(lookupSvc, $state) {
        var vm = this;
        vm.user = {};
        vm.countries = lookupSvc.getCountries();
        vm.registerUser = function() {
            $state.go("products", { details: vm.user });
        };
    }]);