// alert("Hello");

// clear();

// console.log("Hello");
// console.error("This is an error message");
// console.warn("This is a warning message");

// let age = 27;
// console.log(age);

// let age1 = 27;
// age1 = 30;
// console.log(age1);

// const age2 = 27;
// age2 = 30;
// console.log(age2);

// const name = "apw";
// const age = 23;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// const s = "Hello Batch 4";
// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(""));

// const name = "apw";
// const age = 23;
// console.log("I am " + name + " and " + age + " years old");
// console.log(`I am ${name} and ${age} years old`);

// const s ="HTML, CSS, Bootstrap, JavaScript";
// console.log(s.split(", "));

// const number = new Array(1, 2, 3, 4, 5);
// console.log(number);

// const fruits = ["Apple", "Orange", "Pineapple"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// const fruits = ["Apple", "Orange", "Pineapple"];
// fruits[3] = "Lemon";
// fruits[4] = "Pear";

// fruits.push("Mango"); /* add value at the end */
// fruits.unshift("Grape"); /* add value at the top */

// fruits.pop(); /* to remove last value */

// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hello"));
// console.log(fruits.indexOf("Orange"));

// const animals = { name: "Dalier", age: 2, type: "cat"};
// console.log(animals);
// console.log(animals.name);
// console.log(animals.age);
// console.log(animals.type);

// const person = {
//     firstName: "Aung",
//     middleName: "Pyae",
//     lastName: "Win",
//     age: 23,
//     gender: "Male",
//     hobbies: ["music", "movies", "sports"],
//     address: {
//         number: "No. 1",
//         street: "Malar 5",
//         township: "Hlaing",
//         city: "Yangon",
//     },
//     email: "aungpyaewin.apw@gmail.com",
//     phone: 09261191166,
// };
// person.maritalStatus = "Single";
// person.education = "-";
// person.workExperience = "NIL";
// console.log(person.firstName, person.middleName, person.lastName);
// console.log(person.address);
// console.log(person.hobbies[1]);
// console.log(person.address.township);

// const todos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         isComplte: true,
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         isComplte: true,
//     },
//     {
//         id: 3,
//         text: "Go to clinic",
//         isComplte: false,
//     },
// ];
// console.log(todos[1].text);
// console.log(todos);

// const todoJSON = JSON.stringify(todos); /* changing array to JSON format */
// console.log(todoJSON);

const person = [
    {
        name: "Aung Aung",
        age: 33,
        gender: "Male",
        job: "NIL",
        hobbies: ["Reading", "Walking"],
        address: {
            number: "No.144",
            street: "6th Street",
            township: "Taungoo",
            city: "Taungoo",
        },
        email: "NIL",
        phone: 09696131415,
    },
    {
        name: "Su Su",
        age: 28,
        gender: "Female",
        job: "NIL",
        hobbies: ["Reading", "Walking"],
        address: {
            number: "No.144",
            street: "6th Street",
            township: "Taungoo",
            city: "Taungoo",
        },
        email: "NIL",
        phone: 09261191155,
    },
    {
        name: "Aung Pyae Win",
        age: 24,
        gender: "Male",
        job: "Student",
        hobbies: ["Swimming", "Travelling", "Music"],
        address: {
            number: " ",
            street: "Dhamayone Street",
            township: "Hlaing",
            city: "Yangon",
        },
        email: "aungpyaewin.apw@gmail.com",
        phone: 09261191166,
    }
];
    console.log(person);
    console.log(person[1]);
    console.log(person[1].address.township);

