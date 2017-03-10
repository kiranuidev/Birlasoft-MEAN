angular.module("register", []);

//config syntax
angular.module("register")
    .config([function() {
        console.log("config : register Module");
    }]);

angular.module("register")
    .run([function() {
        console.log("run : register Module");
    }]);