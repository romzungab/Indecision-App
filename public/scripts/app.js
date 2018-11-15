'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// const user = {
//     name:'Roms',
//     cities : ['Iligan', 'Auckland', 'Manila'],
//     printPlacesLived : function (){
//           this.cities.forEach( (city) =>{
//             console.log(this.name +' has lived in '+ city)
//         })
//     }
// };
//no more function
// const user ={
//     name : 'Roms',
//     cities: ['Iligan', 'Auckland', 'Manila'],
//     printPlacesLived(){
//         this.cities.forEach( (city) =>
//         { console.log(this.name + ' has lived in ' + city)}
//         );
//     }
// };
//using map
var user = {
    name: 'Roms',
    cities: ['Iligan', 'Auckland', 'Manila'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    multiplicand: [10, 20, 30],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.multiplicand.map(function (mul) {
            return mul * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
