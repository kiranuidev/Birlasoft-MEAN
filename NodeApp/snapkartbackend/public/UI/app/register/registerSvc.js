angular.module("register")
    .service("registerSvc", ["$http", "$q", function($http, $q) {

        this.registerUser = function(userInfo) {
            //step 1:create deferred object 
            // ex: var dfd = $q.defer();
            var dfd = $q.defer();
            //Making http calls
            //Making http calls
            $http.post("/user/register", userInfo)
                .then(function(response) {
                    dfd.resolve(response);
                })
                .catch(function(response) {
                    dfd.reject(response);
                });
            return dfd.promise;
        };
    }]);