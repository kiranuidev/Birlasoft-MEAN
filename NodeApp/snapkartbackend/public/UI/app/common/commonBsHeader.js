angular.module("common")
    .directive("bsHeader", [function() {
        return {
            restrict: "A,E,C",
            templateUrl: "app/templates/header.html"
                //template: "<h1>I am the header</h1>"
        };
    }]);