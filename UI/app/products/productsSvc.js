angular.module("products")
    .service("productsSvc", ["$http", "$q", function($http, $q) {
        this.getProducts = function() {
            return [{
                    "_id": "58a3c64c252a52c818362c05",
                    "index": 0,
                    "picture": "http://placehold.it/32x32",
                    "Price": 778819,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c09edbec2083c3c3a",
                    "index": 1,
                    "picture": "http://placehold.it/32x32",
                    "Price": 654441,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64ce0eb245ed450dbe0",
                    "index": 2,
                    "picture": "http://placehold.it/32x32",
                    "Price": 763647,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c81906df65b0aba98",
                    "index": 3,
                    "picture": "http://placehold.it/32x32",
                    "Price": 378917,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 1 unread messages."
                },
                {
                    "_id": "58a3c64c79ecf4f233edb045",
                    "index": 4,
                    "picture": "http://placehold.it/32x32",
                    "Price": 962925,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64c28a64e673d2c27b8",
                    "index": 5,
                    "picture": "http://placehold.it/32x32",
                    "Price": 794132,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c97a1100a6106cf1c",
                    "index": 6,
                    "picture": "http://placehold.it/32x32",
                    "Price": 139558,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64ce36a024d204bf9b1",
                    "index": 7,
                    "picture": "http://placehold.it/32x32",
                    "Price": 558833,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64c52b693e3aeeee779",
                    "index": 8,
                    "picture": "http://placehold.it/32x32",
                    "Price": 54668,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 7 unread messages."
                },
                {
                    "_id": "58a3c64cbc870d30bfea1c0b",
                    "index": 9,
                    "picture": "http://placehold.it/32x32",
                    "Price": 262461,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 8 unread messages."
                },
                {
                    "_id": "58a3c64c999c3052339299e8",
                    "index": 10,
                    "picture": "http://placehold.it/32x32",
                    "Price": 109753,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 1 unread messages."
                },
                {
                    "_id": "58a3c64c03d41ed2848c2c86",
                    "index": 11,
                    "picture": "http://placehold.it/32x32",
                    "Price": 394526,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64cf4546c45649c259f",
                    "index": 12,
                    "picture": "http://placehold.it/32x32",
                    "Price": 116245,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64cc454456713a51757",
                    "index": 13,
                    "picture": "http://placehold.it/32x32",
                    "Price": 394615,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c45f26f22344e6714",
                    "index": 14,
                    "picture": "http://placehold.it/32x32",
                    "Price": 453513,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 1 unread messages."
                },
                {
                    "_id": "58a3c64c425ed3f7f58aed10",
                    "index": 15,
                    "picture": "http://placehold.it/32x32",
                    "Price": 423157,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64cc915a3822d490503",
                    "index": 16,
                    "picture": "http://placehold.it/32x32",
                    "Price": 681658,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 8 unread messages."
                },
                {
                    "_id": "58a3c64c3106961a75a92827",
                    "index": 17,
                    "picture": "http://placehold.it/32x32",
                    "Price": 486588,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c14934eaac2d5bd50",
                    "index": 18,
                    "picture": "http://placehold.it/32x32",
                    "Price": 986060,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c014bf37b0ca24795",
                    "index": 19,
                    "picture": "http://placehold.it/32x32",
                    "Price": 102441,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64cfa841434bc0d111e",
                    "index": 20,
                    "picture": "http://placehold.it/32x32",
                    "Price": 116858,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 7 unread messages."
                },
                {
                    "_id": "58a3c64c402c68d8f3a06e92",
                    "index": 21,
                    "picture": "http://placehold.it/32x32",
                    "Price": 900262,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64cac964505acb0fbeb",
                    "index": 22,
                    "picture": "http://placehold.it/32x32",
                    "Price": 634650,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 7 unread messages."
                },
                {
                    "_id": "58a3c64c60be0c77eec6744d",
                    "index": 23,
                    "picture": "http://placehold.it/32x32",
                    "Price": 745890,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c3f3375641db1ffa7",
                    "index": 24,
                    "picture": "http://placehold.it/32x32",
                    "Price": 422881,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64c16b561e7a3947c4d",
                    "index": 25,
                    "picture": "http://placehold.it/32x32",
                    "Price": 708864,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 7 unread messages."
                },
                {
                    "_id": "58a3c64cbcdf089bc3b82675",
                    "index": 26,
                    "picture": "http://placehold.it/32x32",
                    "Price": 331390,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64c5a2307dce4c7fac8",
                    "index": 27,
                    "picture": "http://placehold.it/32x32",
                    "Price": 831660,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64cba79fde679d9b167",
                    "index": 28,
                    "picture": "http://placehold.it/32x32",
                    "Price": 84583,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c86d2fd841cb2b201",
                    "index": 29,
                    "picture": "http://placehold.it/32x32",
                    "Price": 887895,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 7 unread messages."
                },
                {
                    "_id": "58a3c64ce89b7c8bbf51db76",
                    "index": 30,
                    "picture": "http://placehold.it/32x32",
                    "Price": 188955,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64cc767548dd6223943",
                    "index": 31,
                    "picture": "http://placehold.it/32x32",
                    "Price": 278284,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64cd129ceaade373551",
                    "index": 32,
                    "picture": "http://placehold.it/32x32",
                    "Price": 741093,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 1 unread messages."
                },
                {
                    "_id": "58a3c64c6243cdb4624eb3e9",
                    "index": 33,
                    "picture": "http://placehold.it/32x32",
                    "Price": 29020,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 4 unread messages."
                },
                {
                    "_id": "58a3c64c4aff4688f0e7ba5f",
                    "index": 34,
                    "picture": "http://placehold.it/32x32",
                    "Price": 694030,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64c243454a38425736c",
                    "index": 35,
                    "picture": "http://placehold.it/32x32",
                    "Price": 182583,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 8 unread messages."
                },
                {
                    "_id": "58a3c64c848245a015dc317b",
                    "index": 36,
                    "picture": "http://placehold.it/32x32",
                    "Price": 592066,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64c5daf3c611ca92922",
                    "index": 37,
                    "picture": "http://placehold.it/32x32",
                    "Price": 571638,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64cb7afcf7beed1dedf",
                    "index": 38,
                    "picture": "http://placehold.it/32x32",
                    "Price": 839533,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64cf3104a8c72f3930a",
                    "index": 39,
                    "picture": "http://placehold.it/32x32",
                    "Price": 755493,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64c74d48d8bc6ed9fc1",
                    "index": 40,
                    "picture": "http://placehold.it/32x32",
                    "Price": 965126,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64cf548246dc8224e62",
                    "index": 41,
                    "picture": "http://placehold.it/32x32",
                    "Price": 305399,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 8 unread messages."
                },
                {
                    "_id": "58a3c64c397e956039871978",
                    "index": 42,
                    "picture": "http://placehold.it/32x32",
                    "Price": 570153,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64c196b83772e836270",
                    "index": 43,
                    "picture": "http://placehold.it/32x32",
                    "Price": 546126,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64c02145bf06787fd8c",
                    "index": 44,
                    "picture": "http://placehold.it/32x32",
                    "Price": 279536,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64c202639eb147b0047",
                    "index": 45,
                    "picture": "http://placehold.it/32x32",
                    "Price": 18795,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c7bec3f44f3637d7b",
                    "index": 46,
                    "picture": "http://placehold.it/32x32",
                    "Price": 711630,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64c548dd7776746930d",
                    "index": 47,
                    "picture": "http://placehold.it/32x32",
                    "Price": 888520,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64c7d0e72e088077b1f",
                    "index": 48,
                    "picture": "http://placehold.it/32x32",
                    "Price": 851342,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64cc0611215a1958842",
                    "index": 49,
                    "picture": "http://placehold.it/32x32",
                    "Price": 136470,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 4 unread messages."
                },
                {
                    "_id": "58a3c64ceb6d50f41de7cc3a",
                    "index": 50,
                    "picture": "http://placehold.it/32x32",
                    "Price": 757179,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64c340a4eb6ecef0c4f",
                    "index": 51,
                    "picture": "http://placehold.it/32x32",
                    "Price": 454591,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64cb1193539b6c6d7ed",
                    "index": 52,
                    "picture": "http://placehold.it/32x32",
                    "Price": 596388,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64cc2cb2ca0a2d71632",
                    "index": 53,
                    "picture": "http://placehold.it/32x32",
                    "Price": 604851,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 10 unread messages."
                },
                {
                    "_id": "58a3c64cde2f0ac5c9a191c2",
                    "index": 54,
                    "picture": "http://placehold.it/32x32",
                    "Price": 215345,
                    "Model": "Lenovo",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c55d0c7c12a307d59",
                    "index": 55,
                    "picture": "http://placehold.it/32x32",
                    "Price": 550396,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64c564fdf1096760977",
                    "index": 56,
                    "picture": "http://placehold.it/32x32",
                    "Price": 321321,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 9 unread messages."
                },
                {
                    "_id": "58a3c64c4af50ee31ccda1d4",
                    "index": 57,
                    "picture": "http://placehold.it/32x32",
                    "Price": 229799,
                    "Model": "Blackberry",
                    "Description": "Hello, undefined! You have 3 unread messages."
                },
                {
                    "_id": "58a3c64c96daebe9a1321398",
                    "index": 58,
                    "picture": "http://placehold.it/32x32",
                    "Price": 781789,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 4 unread messages."
                },
                {
                    "_id": "58a3c64c6355b1e679def9a9",
                    "index": 59,
                    "picture": "http://placehold.it/32x32",
                    "Price": 613083,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 1 unread messages."
                },
                {
                    "_id": "58a3c64cd27dc0c8e774ec68",
                    "index": 60,
                    "picture": "http://placehold.it/32x32",
                    "Price": 228442,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64ce1f18d042d78ffe3",
                    "index": 61,
                    "picture": "http://placehold.it/32x32",
                    "Price": 721061,
                    "Model": "OnePlus3T",
                    "Description": "Hello, undefined! You have 2 unread messages."
                },
                {
                    "_id": "58a3c64c2621dbc3d1696236",
                    "index": 62,
                    "picture": "http://placehold.it/32x32",
                    "Price": 17103,
                    "Model": "iPad",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c84c4018dd2fd5450",
                    "index": 63,
                    "picture": "http://placehold.it/32x32",
                    "Price": 364439,
                    "Model": "iPhone",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64cb0a8f0e8b0439dbf",
                    "index": 64,
                    "picture": "http://placehold.it/32x32",
                    "Price": 77802,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 3 unread messages."
                },
                {
                    "_id": "58a3c64c8ef0bded0665be37",
                    "index": 65,
                    "picture": "http://placehold.it/32x32",
                    "Price": 714333,
                    "Model": "MOTOG",
                    "Description": "Hello, undefined! You have 6 unread messages."
                },
                {
                    "_id": "58a3c64ced1da00ed301f6f9",
                    "index": 66,
                    "picture": "http://placehold.it/32x32",
                    "Price": 874425,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 5 unread messages."
                },
                {
                    "_id": "58a3c64c69673797309d3de2",
                    "index": 67,
                    "picture": "http://placehold.it/32x32",
                    "Price": 966629,
                    "Model": "OPPO",
                    "Description": "Hello, undefined! You have 6 unread messages."
                }
            ];
        };
        this.getProductsFromJson = function() {
            //step 1:create deferred object 
            // ex: var dfd = $q.defer();
            var dfd = $q.defer();
            //Making http calls
            $http.get("/api/products.json")
                .then(function(response) {
                    dfd.resolve(response);
                })
                .catch(function(response) {
                    dfd.reject(response);
                });


            //step2: return the promise from the defered object.
            return dfd.promise;
        };
    }])