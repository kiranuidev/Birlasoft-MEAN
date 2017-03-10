//Creating custom filter.
angular.module("common")
    .filter("phoneformat", [function() {
        return function(input, criteria) {
            var output = input;
            console.log(output);
            if (criteria == "IN") {
                output = "+91-" + output.substring(0, 5) + "-" + output.substring(5, 10);
            } else if (criteria == "US") {
                output = "+1-" + output.substring(0, 3) + "-" + output.substring(3, 6) + "-" + output.substring(6, 10);
            }
            return output;

        }
    }]);