// Control Flow

// Conditional Statements
// if / else if / else 

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
for ( let i = dogs.length - 1 ; i >= 0; i-- ) {
    let currentDog = dogs[i];
    console.log(currentDog);
}

let dogAge = 5;
let dogAgeInHumanYears = dogAge * 7;
console.log(dogAgeInHumanYears);