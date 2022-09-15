// .map

// example 

const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];
  
//   console.log("before map", names);
  
  // Returns:
  // [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
  // const combinedNames = names.map((person) => {
  //   return `${person.firstName} ${person.lastName}`;
  // });

  // console.log("after map", combinedNames);

  // destructer way {}

  const combinedNames = names.map(({firstName, lastName}) => {
    return `${firstName} ${lastName}`;
  });
  console.log("after map", combinedNames);
//________________________________


const traingles = [
    { base: 100, height: 200},
    { base: 50, height: 100},
    { base: 680, height: 700},
]

// // please calculate thearea of the traingles inside the given traindlges array
// // please use the .map function to return an array
// // Return: [10000, 2500, 238000]

// // to calculate the area pf the traingle please use the given
// // formula A = 1/2 x b x h
// // A Stands for Area
// // B stands for base
// // h stands for height

const area = traingles.map(({base, height}) => {
    // modify and return element 
    return 1 / 2 * base * height;
});
console.log(area);
