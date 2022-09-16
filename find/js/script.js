// find 

// const newArray = arr.find((element, index, array) => {
//     // Return true if you find the element you want
//     // Return false if you haven't found the element you want
//   }); 

  // find the element the value of 5

const values = [1, 2, 4, 5, 6, 7, 88, 100, 3];

const foundValue = values.find((currentValue) =>{
    // condition
    if(currentValue === 5 ){
        return true;
    }

});

console.log(foundValue);

// example 2 

// given an array of temperatures, find the first temperature above 120 fahrenheit


const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const newArray = temperatures.find((currentOne) => {
    if(currentOne > 120){
        return true;
    }
})

console.log(newArray);
//_______________________


const profiles = [
    {
        name: "Uzo",
        id: 1221212
    },
    {
        name: "Hesh",
        id: 12323241
    },
    {
        name: "Fariad",
        id: 5435354
    },
    {
        name: "Mats",
        id: 34341
    }
];

// in the gien of profiles ,please fin the first name that starts with letter h

const foundProfile = profiles.find((profile) => {
    // condition is: first name that starts with the letter h
    if(profile.name[0].toLowerCase() === "h"){
        return true;
    }
});

console.log(foundProfile);

// example _________________

const books = [
    { title: 'Building a Spaceship', inStock: false },
    { title: 'Growing Orchids', inStock: false },
    { title: 'River Fisher', inStock: true }
]

const foundBooks = books.find((book) => {
    if(book.inStock === true){
        return true;
    }
});

// "foundBooks" will be undefined there are no books
// 

//console.log(foundBooks);
if(foundBooks === undefined){
    console.log("no books in stock!");
} else {
    console.log("First book in stock", foundBooks.title);
}
