var nameVar ='Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Roms';

console.log('nameLet', nameLet);

const nameConst = 'Romey'

console.log('nameConst', nameConst);
//function scoping 
function getPetName(){
    var petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log("getPetName", petName);
//block level scoping

var fullName = 'Roms Ungab';
if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
