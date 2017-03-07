angular.module("common")
    .directive("bsCheckuser", [function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(handleValidation);

                function handleValidation(viewValue) {
                    var users = ["kiran", "ravi", "john"];
                    console.log(viewValue);
                    var isUserExists = false;
                    angular.forEach(users, function(item) {
                        if (item == viewValue) {
                            isUserExists = true;
                        }
                    });
                    ctrl.$setValidity("checkuser", !isUserExists);
                }

            }
        }

    }]);