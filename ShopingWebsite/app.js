var shoppingApp = angular.module('shoppingApp', []);

shoppingApp.controller('ProductController', function($scope) {
    

    $scope.cart = [];
    $scope.suggestions = [
        { name: 'BOAT Headphone', description: 'Upto 50% off', price: 1599.99, image: 'images/sugessions/sug1.jpg' },
        { name: 'Prestige Electric kettle ', description: 'Shop now!', price: 549.49, image: 'images/sugessions/sug2.jpg' },
        { name: 'Shoe', description: 'Upto 25% off', price: 999.99, image: 'images/sugessions/sug3.jpg' },
        { name: 'Vageta Statue toy', description: 'Lowest price ever!', price: 45.00, image: 'images/sugessions/sug4.jpg'},
        { name: 'Printed Coffee mug', description: 'Shop now!', price: 200.00, image: 'images/sugessions/sug5.jpg' },
    ];
    $scope.mobiles = [
        { name: 'Poco F5', price: 29999.00, image: 'images/mobiles/m1.jpg' },
        { name: 'Iphone 15 pro max', price: 149800.00, image: "images/mobiles/m2.jpg" },
        { name: 'Relme GT Neo 3T', price: 31999.00, image: 'images/mobiles/m3.jpg' },
        { name: 'Redmi K20 pro',  price: 28999.00, image: 'images/mobiles/m4.jpg' },
        { name: 'Iqoo Neo7 pro',  price: 35999.00, image: 'images/mobiles/m5.jpg' },
    ];
    $scope.fashions = [
        { name: 'Jump Cuts printed Hooded T-Shirt',  price: 999.99, image: 'images/fashion/f1.jpg' },
        { name: 'Shirt White',  price: 450.49, image: 'images/fashion/f2.jpg' },
        { name: 'Men Trousers Black',  price: 600.00, image: 'images/fashion/f3.jpg' },
        { name: 'RapidBox Shoe White',  price: 599.00, image: 'images/fashion/f4.jpg' },
        { name: 'Puma Slides White',  price: 100.99, image: 'images/fashion/f5.jpg' },
    ];
    $scope.electronics = [
        { name: 'Noise Smart Watch 4G',  price: 2999.99, image: 'images/electronics/e1.jpg' },
        { name: 'Apple Airpods pro', price: 20000.00, image: 'images/electronics/e2.jpg' },
        { name: 'Boat Power Bank 20000 mahh',  price: 1500.49, image: 'images/electronics/e3.jpg' },
        { name: 'OnePlus Charger',  price: 800.00, image: 'images/electronics/e4.jpg' },
        { name: 'VR set',  price: 3000.99, image: 'images/electronics/e5.jpg' },
    ];

    $scope.homefurnitures = [
        { name: 'Kitchen Utensils Set',  price: 1000.99, image: 'images/homeAndFurniture/h1.jpg' },
        { name: 'Sofa Single',  price: 15000.00, image: 'images/homeAndFurniture/h2.jpg' },
        { name: 'Smart Door Lock',  price: 4000.49, image: 'images/homeAndFurniture/h3.jpg' },
        { name: 'Foldable Wardrobe',  price: 999.99, image: 'images/homeAndFurniture/h4.jpg' },
        { name: 'Plillow Set Combo of 2',  price: 300.00, image: 'images/homeAndFurniture/h5.jpg' },
    ];
    $scope.appliances = [
        { name: 'Xiomi Smart TV X-Series', price: 29999.99, image: 'images/appliances/a1.jpg' },
        { name: 'Haier Washing machine Top Load', price: 15000.49, image: 'images/appliances/a2.jpg' },
        { name: 'Samsung Refrigerator Double Door',  price: 40000.99, image: 'images/appliances/a3.jpg' },
        { name: 'Microwave Oven',  price: 1000.99, image: 'images/appliances/a4.jpg' },
        { name: 'Ceiling Fan with Remote', price: 2910.99, image: 'images/appliances/a5.jpg' },
    ];
    $scope.toys = [
        { name: 'Toy Car Mini',  price: 100.99, image: 'images/toys/t1.jpg' },
        { name: 'Soft Toys Combo of 9', price: 150.49, image: 'images/toys/t2.jpg' },
        { name: 'Helicopter',  price: 175.49, image: 'images/toys/t3.jpg' },
        { name: 'Chess Set', price: 159.49, image: 'images/toys/t4.jpg' },
        { name: 'Xylophone',  price: 135.49, image: 'images/toys/t5.jpg' },
    ];
    $scope.offers = [
        { name: 'Realme C55', description: 'Flat 25% off', price: 10000.00, image: 'images/offers/o1.jpg' },
        { name: 'LG TV Alpha-Series', description: 'Offer upto 30%', price: 15000.00, image: 'images/offers/o2.jpg' },
        { name: 'First Shoe White', description: 'But 1 get 1 Free!', price: 1000.00, image: 'images/offers/o3.jpg' },
        { name: 'Toy Gun', description: 'But 2 get 1 Free!', price: 120.99, image: 'images/offers/o4.jpg' },
        { name: 'Bean Bag Black', description: 'Flat 10% off', price: 1999.99, image: 'images/offers/o5.jpg' },
    ];


    $scope.addToCart = function(product) {
        product.quantity = 1;

        var existingProductIndex = $scope.cart.findIndex(function(item) {
            return item.name === product.name;
        });

        if (existingProductIndex !== -1) {
            $scope.cart[existingProductIndex].quantity += product.quantity;
            alert('Product added once again !');

        } else {
            $scope.cart.push(angular.copy(product));
            alert('Product added !');

        }

        product.quantity = 1;
    };

    $scope.getTotalPrice = function() {
        return $scope.cart.reduce(function(sum, item) {
            return sum + item.price * item.quantity;
        }, 0).toFixed(2);
    };
    $scope.placeOrder = function() {
        alert('Order placed Sucessfully.')
    };
    $scope.removeItem = function (index) {
        $scope.cart.splice(index, 1);
    };
});
