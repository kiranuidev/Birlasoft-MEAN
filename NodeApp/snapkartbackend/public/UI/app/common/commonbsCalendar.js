angular.module("common")
    .directive("bsCalendar", [function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var maxDateAttr = attrs["maxdate"];
                var minDateAttr = attrs["mindate"];
                var config = {};
                if (minDateAttr) {
                    config.minDate = minDateAttr;
                }
                if (maxDateAttr) {
                    config.maxDate = maxDateAttr
                }
                element.datepicker(config);
            }
        }
    }]);