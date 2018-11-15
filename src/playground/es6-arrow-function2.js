const add =(a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1, 1001));

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
const user = {
    name: 'Roms',
    cities: ['Iligan', 'Auckland', 'Manila'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => this.name +' has lived in '+city);
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    multiplicand:[10,20,30],
    multiplyBy: 2,
    multiply() {
        return this.multiplicand.map((mul) => mul * this.multiplyBy);
    }
}
console.log(multiplier.multiply());