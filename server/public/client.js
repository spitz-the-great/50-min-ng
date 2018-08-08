console.log('js');

let foodApp = angular.module( 'foodApp', [] );

foodApp.controller( 'FoodController', function(){
    // "this" is the Controller itself, we're holding it in a variable callev "vm"
    let vm = this;
    vm.favoriteFood = [];

    vm.addFood = function(){
        console.log( 'in addFood', vm.foodIn );
        vm.favoriteFood.push( vm.foodIn );
        console.log( 'favorite movies thus far:', vm.favoriteFood );
    } // end funk
}); // end controller