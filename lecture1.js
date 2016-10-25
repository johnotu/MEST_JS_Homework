/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge';    // Uses a number to begin a variable name
var firstCar = 'Doge';  // Best practice

var var = 'variable';               // Uses the keyword "var" as variable name
var nonKeywordName = 'variable';    // Best Practice

var first name = 'Jerry';   // There's a space between a variable name
var firstName = 'Jerry';    // Best practice

var Sch00lName = 'MEST';    // Not using camelCase; number zero (0) is used in place of letter O
var schoolName = 'MEST';    // Best practice

var totalnumber = 100;  // Not using camelCase
var totalNumber = 100;  // Best practice

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It's nice to me you today!';
    // Not valid. The inner single quote should be escaped or double quotes used for the string
var greeting = 'It\'s nice to me you today!';   // Best practice

var response = "Ashwin said, "Yes Sir!"";   // Not valid. Double quotes inside double quotes.
var response = "Ashwin said, 'Yes Sir!'";   // Best practice


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 *
 * From the left hand side, the JavaScript Engine will add 0.3 to 0.1 and compare the result 0.4 with the
 * 0.4 on the right hand side to check (i) if their values are the same and then (ii) if they are of same type
 * Since the two conditions above are satisfied, it will return the boolean true.
 */

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
function Pizza (type, size, pudding, mainIngredient) {
    this.type = type;
    this.size = size;
    this.pudding = pudding;
    this.mainIngredient = mainIngredient
}

var Pizza = {
    type: "romana",
    size: "12cm",
    pudding: "vanilla",
    mainIngredient: "tomatoes"
}

var Pizza = new function() {
    this.type = "romana";
    this.size = "12cm";
    this.pudding = "vanilla";
    this.mainIngredient = "tomatoes"
}

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal(habitat, skinType, numberOfLegs) {
    this.habitat = habitat;
    this.skinType = skinType;
    this.numberOfLegs = numberOfLegs;
}
Animal.prototype.printInfo = function() {
    console.log(this.habitat + ' ' + this.skinType + ' ' + this.numberOfLegs)
}
Animal.prototype.getHabitat = function() {
    return this.habitat
}
var dog = new Animal('land', 'fur', 2);
var fish = new Animal('water', 'scales', 0);


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
// Using if else statement
var number = prompt("Please enter a number on the Menu");
if (number === 1) {
    console.log("Rice and Stew");
}
else if (number === 2) {
    console.log("Fried Plantain");
}
else {
    console.log("Food is not on the Menu today");
}

// Using switch statement
var number = prompt("Please enter a number on the Menu");
switch (number) {
    case 1:
        console.log("Rice and Stew");
        break;
    case 2:
        console.log("Fried Plantain");
        break;
    default:
        console.log("You need to enter a number on the Menu");
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
for (var i = 0; i < studentScores.length; i++) {
    if (i > 70) {
        console.log(i);
    }
}


/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
studentScores.forEach(function(score) {
    if (score < 50) {
        console.log("Grade is 'F'");
    }
});