// reduce example 1

// const values =[2, 3, 4, 6, 7];

// // we want to use the reduce array method to calculate the sum of the items on the array


// const sum = values.reduce((total,item) => {

//     // 0 = 0 +2
//     // total is 2

//     // total = 2 + 3
//     // total is 5

//     // total is 9

//     //total = 9 + 6
//     // total is 15

//     // total = 15 + 7
//     // total is 22

//     total += item;
//     return total

// }, 0);

// console.log(sum);

//________


// const garages = [
//     { make: "BWM" , cars: 10},
//     { make: "Tesla", cars: 20},
//     { make: "Opel", cars: 40},
//     { make: "volkswagen", cars: 1}
// ];

// // calculate the total number of cars inn all the garages
// // please use reduse array method
// // please beer in main that I have 50cars away in maintenance

// const totalNumberOfCars = garages.reduce((total, garage)=> {
//     total += garage.cars;
//     return total

// }, 50)

// console.log(totalNumberOfCars);

// destrcte way

// const totalNumberOfCars = garages.reduce((total, {cars})=> {
//     total += cars;
//     return total

// }, 50)

// console.log(totalNumberOfCars);


//____________



// const products = [
//     {
//         title: "pudding",
//         isInStock: true,
//         quantity: 10,
//         price: 20,
//         currency: "NOK"
//     }, {
//         title: "cheese",
//         isInStock: false,
//         quantity: 0,
//         price: 200,
//         currency: "NOK"
//     }, {
//         title: "milk",
//         isInStock: true,
//         quantity: 20,
//         price: 100,
//         currency: "NOK"
//     }, {
//         title: "eggs",
//         isInStock: true,
//         quantity: 1000,
//         price: 10,
//         currency: "NOK"
//     }
// ]

// get the total cost of in-stco products
// to culculate the total cost you need to multiply
// price * quantity
// please use reduce array method

// const totalCost = products.reduce((total, product) =>{
//     if(product.isInStock === true){
//         total += product.price * product.quantity;
//     }

//     return total;

    
// }, 0);

// console.log(totalCost);


//___


// const values = [100, 200, 300, 400, 500];

// const endResult = values.reduce(
//   (previousValue, currentElement, index, array) => {
//     return currentElement;
//   },
// );

// console.log(endResult);
//___________________________



// Adding these values together should give us a result of 40
// const values = [
//     { nestedValue: 10 },
//     { nestedValue: 10 },
//     { nestedValue: 10 },
//     { nestedValue: 10 },
//   ];
  
//   const sumOfValues = values.reduce((total, currentObject) => {
//     // Add the 'nestedValue' property from the current object in the array
//     total += currentObject.nestedValue;
//     return total;
//   });
  
//   // We do not get our expected answer of 40
//   console.log(sumOfValues);

const items = [
    {
      name: 'Apple',
      itemsInStock: 10,
      price: 5.99,
    },
    {
      name: 'Banana',
      itemsInStock: 5,
      price: 3.99,
    },
    {
      name: 'Orange',
      itemsInStock: 2,
      price: 3.99,
    },
  ];
  

  // 7.98 +19.95 +

  const totalCostOfItems = items.reduce((totalCost, item) => {
    totalCost += item.itemsInStock * item.price;
    return totalCost;
  }, 0);
  
  // You could destructure the properties from 'item'. This can
  // arguably become more readable.
  const totalCostOfItemsDestructured = items.reduce(
    (totalCost, { itemsInStock, price }) => {
      totalCost += itemsInStock * price;
      return totalCost;
    },
    0,
  );
  
  console.log(totalCostOfItems);

//   // Numbers that we will loop through
// const values = [100, 200, 300, 400, 500];

// const sum = values.reduce(
//   (total, value, index, array) => {
//     // 0 = 1 +  100 
//     // total is 101
    
//     // 101 + 200
//     // 301


// total = total + value;

//     return total;
//   },
//   10);
//   console.log(sum);