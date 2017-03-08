angular.module("products", []);

//config syntax
angular.module("products")
    .config([function() {
        console.log("config : products Module");
    }]);


//config syntax
angular.module("products")
    .run([function() {
        console.log("run : products Module");
    }]);