// obejct

const person = {
    name: "Hesham",
    lastName: "El Masry",
    age:  30
}

// 1. dot notation 
// console.log(person.age);
// console.log(person.lastName);

// breacket Notation

console.log("breacket Notation:", person["name"]);
console.log("breacket Notation:", person["lastName"]);
console.log("breacket Notation:", person["age"]);

//__________

const recipe = {
    "ingredient_0" : "Egg",
    "ingredient_1" : "Milk",
    "ingredient_2" : "flout"
}

for(let i = 0; i <= 2; i++){
    console.log(recipe["ingredient_" + i]);

// i = 0
// recipe ["ingredient_" + 0]
// Egg

// i = 1
// recipe ["ingredient_" + 1]
// Milk

// i = 2
// recipe ["ingredient_" + 1]
// Flour
}

//________

// for... in loop
//syntex
// for(const mykey in myObject){
    // we are looping through the keys of the object, to get the value you
    // need to use the key (myKey) as a way to the reference the key/value pair
//}

const user = {
    // key: name // Value: hesham
    name: "Hesham",
    lastName: "El Masry",
    age:  30
}

for (const theKey in user){
    console.log(user[theKey]);
}
//___________

// example 

// use for in loop 
// console log for me "key" and the "value"

// const carProfile = {
//     make: "bwm",
//     year: 2015,
//     vinNumber: 3434343
// }

// for(const theCar in carProfile){
//     console.log("the" + theCar + " is " + carProfile[theCar]);

// };

 // object methods

 // object.keys()

 const userProfile = { 
    name: "Hesh",
    age: 30
 }

 const  userProfileKeys = Object.keys(userProfile);
 //["name", "age"]

 console.log(userProfileKeys);


  // object.keys()
 // object.values()

