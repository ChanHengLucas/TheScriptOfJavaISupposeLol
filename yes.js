let randomNumber = Math.floor(Math.random() * 1000000);

// for (let i = 0; i < 1000000; i++) {
    if (randomNumber % 7 == 0 && randomNumber % 9 == 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
    randomNumber = Math.floor(Math.random() * 1000000)
// }

console.log("");


let randomTemperature = Math.floor(Math.random() * 50) + 50;

function temperatureMeasurement(temperature) {
    return temperature < 60 ? 'Too Cold'
        : temperature > 90 ? 'Too Hot'
        : 'Just Right';
}

console.log(temperatureMeasurement(randomTemperature));

// if (randomTemperature < 60) {
//     console.log('Too Cold');
// } else if (randomTemperature > 90){
//     console.log('Too Hot');
// } else {
//     console.log('Just Right');
// }

console.log("");

function simpleAddition(a, b) {
    return a + b;
}

console.log(simpleAddition(2, 3));

console.log("");

let simpleArrowAddition = (a, b) => a + b; // I should learn to use this fr

console.log(simpleArrowAddition(Math.floor(Math.random()*10), Math.floor(Math.random()*10)));

console.log("");

const simpleArray = new Array(15).fill("");

for (i = 0; i < simpleArray.length; i++) {
    simpleArray[i] = Math.floor(Math.random() * 100);
}

console.log("Array Length: " + simpleArray.length);
console.log("First Value of Array: " + simpleArray[0]);
console.log("Last Value of Array: " + simpleArray[simpleArray.length - 1]);
console.log("Random Value in Array: " + simpleArray[Math.floor(Math.random()*simpleArray.length)]);

console.log("");

for (i = 0; i < simpleArray.length; i++) {
    for (j = 0; j < simpleArray.length; j++) {
        if (simpleArray[i] < simpleArray[j] && i != j) {
            temp = simpleArray[i];
            simpleArray[i] = simpleArray[j];
            simpleArray[j] = temp;
        }
    }
}

simpleArray.push(101);

for (i = 0; i < simpleArray.length; i++) {
    console.log(i + ") " + simpleArray[i]);
}

console.log("");

const anotherArray = new Array(10).fill("");
let difference = 0;
for (i = 0; i < anotherArray.length; i++) {
    anotherArray[i] = Math.floor(Math.random() * 58) + 29;
    if (i > 0 && difference < Math.abs(anotherArray[i] - anotherArray[i - 1])) {
        difference = Math.abs(anotherArray[i] - anotherArray[i - 1]);
    }
    console.log(anotherArray[i]);
}
console.log("Difference: " + difference);

console.log("");

const squaresOfAnotherArray = anotherArray.map(x => x ** 2); // I should use this function more if needed

for (i = 0; i < squaresOfAnotherArray.length; i++) {
    console.log(squaresOfAnotherArray[i]);
}

console.log("");

let largest = 0;

for (i = 0; i < squaresOfAnotherArray.length; i++) {
    if (squaresOfAnotherArray[i] > largest) {
        largest = squaresOfAnotherArray[i];
    }
}

const halfOrLarger = squaresOfAnotherArray.filter(checkNumber);

function checkNumber(value) {
    return value >= largest / 2;
}

for (i = 0; i < halfOrLarger.length; i++) {
    console.log(halfOrLarger[i]);
}

console.log("");

let sum = halfOrLarger.reduce((a, b) => a + b);

console.log("Sum: " + sum);

console.log("");

halfOrLarger.forEach(loggedMessage);

function loggedMessage(value, index) {
    console.log("array[" + index + "] = " + value);
}

console.log("");

class SomeClass {
    constructor(name, number, square){
        this.name = name;
        this.number = number;
        this.square = square;
    }

    printInfo(){
        console.log(this.name + ", my number is " + this.number + ", and the square of my number is " + this.square + ".");
    }
}

const someClassArray = new Array(10).fill("");

for (i = 0; i < someClassArray.length; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    someClassArray[i] = new SomeClass("My index is " + i, randomNumber, randomNumber ** 2);
    someClassArray[i].printInfo();
}

console.log("");
console.log("Last Question");
console.log("");

const filteredArray = someClassArray.filter(checkName);

function checkName(value) {
    if (value.name.endsWith("0") || value.name.endsWith("2") || value.name.endsWith("4") || value.name.endsWith("6") || value.name.endsWith("8")) {
        return value;
    }
}

for (i = 0; i < filteredArray.length; i++) {
    filteredArray[i].printInfo();
}

console.log("");

const mappedArray = someClassArray.map(x => console.log(x.number));

console.log("");

someClassArray.forEach(changeValue);

function changeValue(value, index){
    value.number = value.number + 10;
    value.square = value.number ** 2;
    value.printInfo();
}

console.log("");

for (i = 0; i < someClassArray.length; i++) {
    for (j = 0; j < someClassArray.length; j++) {
        if (someClassArray[i].number < someClassArray[j].number && i != j) {
            temp = someClassArray[i]
            someClassArray[i] = someClassArray[j];
            someClassArray[j] = temp;
        }
    }
}

for (i = 0; i < someClassArray.length; i++) {
    someClassArray[i].printInfo();
}

console.log("");

let dialogue = "Hello World";
console.log(dialogue);
new Promise((resolve, reject) => {
    console.log("Sadness"); // would run no matter what
    if (dialogue == "Hello World") {
        console.log("More sadness");
        resolve();
    } else {
        console.log("Most sadness");
        reject();
    }
}).then(() => {
    console.log("It worked I suppose :("); // used when the promise is resolved
}).catch(() => {
    console.log("Even more sadness"); // used when the promise is rejected
});

console.log("Goodbye World");

// The promise above outputs "Sadness" when dialogue is equal to "Hello World" and the promise is resolved and the code moves on

console.log("");

new Promise((resolve) => {
    console.log("Wait for 10 seconds");
    setTimeout(() => {
        resolve();
    }
    , 10000);
}).then(() => {
    console.log("I suppose it worked :(");
});

console.log("");

let randomNo = Math.floor(Math.random() * 100);

new Promise((resolve, reject) => { // name a random promise NotAPromise
    console.log("");
    console.log("Random Number: " + randomNo);
    if (randomNo % 2 == 0) {
        resolve();
    } else {
        reject();
    }
}).then(() => {
    console.log(randomNo + " is even :(");
}).catch(() => {
    console.log(randomNo + " is odd :(");
});

console.log("");

let NotAPromise = new Promise((resolve, reject) => {
    let newRandomNumber = Math.floor(Math.random() * 10000);
    console.log("");
    resolve(newRandomNumber);
});

NotAPromise.then((result) => {
    console.log("This is not a promise");
    console.log(result);
    return result ** 2;
}).then((result) => {
    console.log("This is not a promise");
    console.log(result);
    return result ** 2;
}).then((result) => {
    console.log("This is not a promise");
    console.log(result);
});

console.log("");

