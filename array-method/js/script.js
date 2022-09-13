// // Original array
// const arrayValues = [5, 7, 9, 14];

// // neww array called `newArray` that contains the result from the `map method`
// const newwArray = arrayValues.map(/* code here  */)

// callback functions 

//1. annonymous function ( mostly used one)
// 2. separate named function.




//1. annonymous function ( mostly used one) has 2 types

// 1.functions keyword

// const values = [100, 200, 400, 600];

// const newValues = values.map(function(element, index, array){
//     // modify and return element
//     return array
// });

// console.log(newValues);

//  array function =>

// const newValues = values.map((element, index, array) => {
//     // modify and return element
//     return array
// });

// // 2. separate callback function 
// const values = [100, 200, 400, 600];
// function callback(element, index, array){
//     // modify and retun elemnt here 
// }

//  const newwValues = values.map(callback)
//  //____________________________





// .map

// example 

const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];
  
//   console.log("before map", names);
  
  Returns:
  [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

  console.log("after map", combinedNames);

  // destructer way {}
//   const combinedNames = names.map(({firstName, lastName}) => {
//     return `${firstName} ${lastName}`;
//   });
//   console.log("after map", combinedNames);
//________________________________


const traingles = [
    { base: 100, height: 200},
    { base: 50, height: 100},
    { base: 680, height: 700},
]

// please calculate thearea of the traingles inside the given traindlges array
// please use the .map function to return an array
// Return: [10000, 2500, 2.1x105]

// to calculate the area pf the traingle please use the given
// formula A = 1/2 x b x h
// A Stands for Area
// B stands for base
// h stands for height

const area = traingles.map(({base, height}) => {
    // modify and return element 
    return 1 / 2 * base * height;
});
console.log(area);





