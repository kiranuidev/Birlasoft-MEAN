angular.module("register")
    .controller("registerCtrl", ["lookupSvc", function(lookupSvc) {
        var vm = this;
        vm.user = {};
        vm.countries = lookupSvc.getCountries();
    }]);