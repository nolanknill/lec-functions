console.groupCollapsed("Control Flow Review");

let dog = "poodle";
switch (dog) {
    case "poodle":
    case "husky":
        console.log("I own a " + dog);
        break;
    default:
        console.log("I don't know what type of dog that is");
}

let dogs = ["border collie", "husky", "sheepadoodle"];

let i = 0;
while (i < dogs.length) {
    console.log(dogs[i]);
    i++;
}
             
let emptyDogs = [];
i = 0;
do {
    console.log("Do-while is guaranteed to execute once")
    i++;
} while (i < dogs.length);

    
for ( let i = 0 ; i < dogs.length; i++ ) {
    console.log(dogs[i]);    
}

/*
Dogs backward:
    dogs[2];
    dogs[1];
    dogs[0];
*/
/* Backwards for loop! */
for ( let i = dogs.length - 1 ; i >= 0; i-- ) {
    let currentDog = dogs[i];
    console.log(currentDog);
}
console.groupEnd("Control Flow Review");


console.groupCollapsed("Functions Overview");
/*
  When creating functions ask the following questions:
    - Purpose? formatDogAge and name in a nice string
    - Inputs? age: number, name: string
    - Outputs? formattedDogAgeName: string
*/
function formatDogAge(age, name) {
    // Move calculateDogYerars
    let dogAgeInHumanYears = calculateDogYears(age);
    let formattedDogAgeName = name + " is " + age + " years old";
    formattedDogAgeName += " and is " + dogAgeInHumanYears + " in human years";
    
    return formattedDogAgeName;
}

function calculateDogYears(age) {
   return age * 7;
}

let output = formatDogAge(0.5, "Helius");
let output2 = formatDogAge(10, "Oscar");

console.log(output);
console.log(output2);

console.groupEnd("Functions Overview");

/** 
 * Example of creating a data structure to format
 * a list of dog ages
 */
/*
dogs = [
    {
        age: 0.5,
        name: "Helius"
    },
    {
        age: 10,
        name: "Oscar"
    },
]

for (let i = 0; i < dogs.length; i++) {
    console.log(
        formatDogAge(dogs[i].age, dogs[i].name)
    );
}
*/


console.groupCollapsed("Return keyword / Early Returns");
/**
  * Based on the temperature outside, returns
  * the outerwear choice appropriate for that temp
  *
  * @param temperature Number
  * @return string
  */
function decideWardrobe(temperature) {
    if (typeof temperature !== "number") {
        return "Please enter a number value for the temperature";
    }
    
    if (temperature <= 0 && temperature > -30) {
        return "Winter coat";
    } else if (temperature > 0 && temperature <= 10) { 
        return "Windbreaker";
    } else if (temperature > 10 && temperature < 20) { 
        return "Sweater vest";
    } else if (temperature >= 20 && temperature < 40) {
        return "T-shirt";
    } else {
        return "Don't go outside";
    }
    
    console.log("Never reached because a return has already executed");
}
 
console.log("-20:",  decideWardrobe(-20));
console.log("4:", decideWardrobe(4));
console.log("15:", decideWardrobe(15));
console.log("30", decideWardrobe(30));
console.log("50:", decideWardrobe(50));
console.log("Hello World:", decideWardrobe("Hello World"));

/*
Testing all possible inputs in a loop
let inputs = [-20, 4, 15, 30, 50, "Hello World"];
for (let i = 0; i < inputs.length; i++) {
    console.log(
        inputs[i], ": ", decideWardrobe(inputs[i])
    )
}*/

console.groupEnd("Return keyword / Early Returns");