angular.module("common")
    .directive("bsClick", [function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                console.log(element);
                console.log(attrs);

                function handleClick() {
                    console.log(attrs["bsClick"]);
                    console.log("use clicked");
                    scope.$apply(attrs["bsClick"]);
                }

                element.bind("click", handleClick);
            }
        }
    }]);


angular.module("common")
    .directive("bsToggle", [function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                function handleToggle() {
                    console.log(element);
                    var body = element[0].getElementsByClassName("panel-body");
                    $(body).toggle();
                }
                element.bind("click", handleToggle);
            }
        }

    }]);