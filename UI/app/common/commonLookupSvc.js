angular.module("common")
    .service("lookupSvc", [function() {
        this.getCountries = function() {
            return [{ name: "India", code: "IN" },
                { name: "Australia", code: "AUS" },
                { name: "Canada", code: "CA" }
            ]

        };

    }]);