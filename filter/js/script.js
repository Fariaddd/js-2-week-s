// example 1

// const numbers = [2, 4, 55, 66];

// const filteredNumbers= numbers.filter((number) => {
//     // returen to me in the new array all the numbers which is greater  than or equal 4
//     if(number >= 4){
//         return true;
//     } else{
//         return false;
//     }

// })

// console.log(filteredNumbers);

// [4,55, 66]

// const numbers = [2, 4, 55, 66];

// const filteredNumbers = numbers.filter((number) => number >= 4);
// console.log(filteredNumbers);
//______

// write a function which filters for me the values which is greater than or equal 100


// function filtergreaterEqual100(arr){
//     const filterredValues = arr.filter((item) => {
//         if(item >= 100){
//             return true
//         } else {
//             return false
//         }
//     })
//     return filterredValues
// }

// const myfilteredValues = filtergreaterEqual100(values);

// console.log(filterredValues);


// const values = [0, 23, 55, 66, 777, 100, 500, 250]

// const filteredNumbers = values.filter((value) => value >= 100);

// console.log(filteredNumbers);
//___________

// example 3

// const people = [
    
//         { name: 'Kari', age: 28 },
//         { name: 'Astrid', age: 32 },
//         { name: 'Hans', age: 22 },
//         { name: 'Inger', age: 19 },
//         { name: 'Liv', age: 42 },
//         { name: 'Kristoffer', age: 12 },
//         { name: 'Anne', age: 12 },
//         { name: 'Martin', age: 17 },
//         { name: 'Joakim', age: 45 },
//         { name: 'Ellen', age: 7 },   
// ]

// please filter for me this array to  ages => 22

// const adults = people.filter((person) => {
//     if(person.age >= 22){
//         return true;
//     }
// });

// desctruting way

// const adults = people.filter(({age}) => age >= 22);

// console.log(adults);
//_________________

// in this exaplme we have a list of games.
// we want to filter the games that have multiplayer and ratin of 8 or higher.

// const games = [
//     { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
//     { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
//     { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
//     { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
//     { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
// ];

// // // const numbers = games.filter((game)=>{
// // //     if((game.isMultiplayer === true) && (game.rating >= 8)){
// // //         return true;
// // //     }

// // // })

// // console.log(numbers);

// // // desctruvting way
// const filterGames = games.filter(({isMultiplayer, rating}) =>  ((isMultiplayer === true) && (rating >= 8)));

// console.log(filterGames);

//isMultiPlayer === true && rating => 8
//______

//condition way

// (isMultiplayer, rating) && (rating >= 8 ? true : false)
//_________________________
