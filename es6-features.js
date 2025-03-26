// ES6 Features Demonstration

// 1. let and const
let name = "Peter";
const age = 25;
console.log(`Name: ${name}, Age: ${age}`);

// 2. Arrow Functions
const greet = (person) => `Hello, ${person}!`;
console.log(greet("Alice"));

// 3. Template Literals
const message = `This is an example of template literals in JavaScript.`;
console.log(message);

// 4. Destructuring Arrays & Objects
const user = { username: "JohnDoe", email: "john@example.com" };
const { username, email } = user;
console.log(`User: ${username}, Email: ${email}`);

const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(`Numbers: ${first}, ${second}, ${third}`);

// 5. Spread and Rest Operators
const newNumbers = [...numbers, 4, 5, 6]; // Spread Operator
console.log(newNumbers);

const sum = (...args) => args.reduce((acc, num) => acc + num, 0); // Rest Operator
console.log(sum(1, 2, 3, 4, 5));

// 6. Default Parameters
const sayHello = (name = "Guest") => console.log(`Hello, ${name}!`);
sayHello();
sayHello("Peter");

// 7. Promises with Async/Await
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched successfully!"), 2000);
    });
};

const getData = async () => {
    const data = await fetchData();
    console.log(data);
};
getData();
