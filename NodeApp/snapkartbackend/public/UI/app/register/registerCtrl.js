angular.module("register")
    .controller("registerCtrl", ["lookupSvc", "$state", "registerSvc",
        function(lookupSvc, $state, registerSvc) {
            var vm = this;
            vm.user = {};
            vm.countries = lookupSvc.getCountries();
            vm.registerUser = function() {
                registerSvc.registerUser(vm.user)
                    .then(function(response) {
                        $state.go("products", { details: response.data });
                    })
                    .catch(function(response) {
                        vm.showErrorMessage = true;
                    })

            };
        }
    ]);