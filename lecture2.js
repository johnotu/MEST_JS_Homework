/*
 * 1. explain the special meaning of the following special characters
 \0 the null character  -   Represents the intentional absence of any object value
 \n new line            -   Represents the beginning of a new line
 \r carriage return     -   Moves the cursor to the beginning of a new line
 \v vertical tab        -   Moves the cursor down one line on the same column
 \t                     -   Moves the cursor to a defined number of spaces from the left
 \backspace             -   Movesthe cursor to the previous position on same line
 \f form feed           -   Moves to a new page
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
arr1.concat(arr2);


/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
arr1.concat(arr2, arr3);


/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.sort()); // [ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ]
console.log(arr); // [ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ]


/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
console.log(arr.sort()); // [ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]
console.log(arr); // [ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]



/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(0,2));


/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-3, -1)); // [ 'Yaw', 'Enoch' ]
console.log(arr); // [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]



/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(2)); // [ 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
console.log(arr); // [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]


/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-2)); // ['Enoch', 'lars']
console.log(arr); // ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
function adder(num1, num2) {
    return num1 + num2;
}
adder(256, 532);


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
var iife = (function () {
    console.log("This is an IIFE");
})();
iife;

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var person1 = {
    name: 'ashwin'
};
var person2 = {
    name: 'lars'
};
function namer() {
    return this.name;
}
namer.bind(person1)();
namer.bind(person2)();


/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
var number = {
    x: 22,
    y: 33
}
var count = function() {
    console.log(this.x + this.y);
}
count(); // Nan
count.bind(number)();


/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
var person1 = {
        firstName: 'ashwin',
        lastName: 'Yaw'
};
var person2 = {
        firstName: 'lars',
        lastName: 'Mike'
};
function hello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
hello.bind(person1)("Good afternoon");
hello.bind(person2)("Good morning");


/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
function titleCase(str) {
    str = str.split(' ');
    var newStr = [];
    for (var i = 0; i < str.length; i++) {
        newStr.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    newStr = newStr.join(' ');
    console.log(newStr);
}

titleCase(str);