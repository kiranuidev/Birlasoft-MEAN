//module creating
angular.module("common", []);


//config syntax
angular.module("common")
    .config([function() {
        console.log("config : common Module");
    }]);
angular.module("common")
    .run([function() {
        console.log("run : common Module");
    }]);