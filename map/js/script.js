// // .map

// // example 

const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];
  
  console.log("before map", names);
  
  Returns:
  [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
  const combinedNames = names.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

  console.log("after map", combinedNames);

//   // destructer way {}

  const combinedNamess = names.map(({firstName, lastName}) => {
    return  ` ${firstName} ${lastName}`;
  });
  console.log("after map", combinedNamess);
//________________________________


// const traingles = [
//     { base: 100, height: 200},
//     { base: 50, height: 100},
//     { base: 680, height: 700},
// ]

// // // please calculate thearea of the traingles inside the given traingles array
// // // please use the .map function to return an array
// // // Return: [10000, 2500, 238000]

// // // to calculate the area pf the traingle please use the given
// // // formula A = 1/2 x b x h
// // // A Stands for Area
// // // B stands for base
// // // h stands for height

// const area = traingles.map(({base, height}) => {
//     // modify and return element 
//     return 1 / 2 * base * height;
// });
// console.log(area);

// const values = [ 100, 200, 300, 400, 500, 600, 700, 800, 900];

// const newArray = values.map(( value, index, originalArray)  => {
//   console.log("value", value, "index", index);
//   return value * 2;
// });
// console.log(newArray);

// log
//  value     index    
//  value 100 index 0
//  value 200 index 1
//  value 300 index 2
//  value 400 index 3
//  value 500 index 4
//  value 600 index 5
//  value 700 index 6
//  value 800 index 7
//  value 900 index 8

//______

// (9) [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800]





const values = [100, 200, 400, 600];

const newValues = values.map(function (element, index, array)  {
  return element

});
console.log(newValues);

// arrow function, get same output

const newValuess = values.map( (element, index, array)  => {
  return array

});

console.log(newValuess);


