'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: designed to return the value unchanged 
 * 
 * @param {value}: returns the value unchanged 
 * @param {Function} action: The Function to be applied to each value inputed in the argument 
 */
 
 //takes in any any value and it returns value unchanged 
//_.   - refers to the value above that we have to insert and it reference the object above so we can input the function into it 

function identity (value){
    //return the value unchanged 
    return value;
}

module.exports.identity = identity;

/** 
 * typeOf : designed to take in a value and return the type of value being inputed and return it as a string 
 * 
 * @param {value}: returns the value inputed as a string 
 * @ {function} action: The Function to be applied to the value to return the type of value being inputed and return as a string 
*/

function typeOf (value){
    if (typeof(value) === 'string') {
        return 'string';
    } else if (typeof(value) === 'boolean') {
        return 'boolean';
    } else if (typeof(value) === 'number') {
        return 'number';
    } else if (typeof(value) === 'undefined') {
        return 'undefined';
    } else if (typeof(value) === 'function') {
        return 'function';
    } else if (typeof(value) === 'object') {
        if (value === null) {
            return 'null';
        } else if (Array.isArray(value) === true) {
            return 'array';
        } else return 'object';
    }
  
    
}
module.exports.typeOf = typeOf;

/** 
 * first: designed to check the array and number 
 * @param {array, number}: checks array and if array is not an array returns an empty array and if array is array 
 * we check to see if there are any numbers negative. Then check to see if any number is number isnt given and if a number 
 * is given return the first index of an empty array 
 * @param {function}: the function checks to if an array is an array and checks the indexes in the array and numbers to see if they 
 * pass the given test 
*/

function first (array, number){
    
    //create en empty array that will hold final return value 
     let result = [];
    //use an if else chain
    //check to see that the argument passed thru the array parameter is an array
    //if it isnt, or if the number is negative, return an empty array
    if (Array.isArray(array) === false || number < 0) {
        return [];
    //if a number isn't given return the first index of the array
    } else if (number == null) {
        return array[0];
    //if there are more numbers than there are indexes in the array, return the whole array
    } else if (number > array.length) {
        return array;
    //finally,  if the previous conditions aren't fufilled, return the first x(number) items of the array
    } else {
    //use a for loop to loop over array as many times as number 
        for (let i = 0; i < number; i++) {
            result.push(array[i]);
        }
    } return result;
    
}

module.exports.first = first;

//   1) If <array> is not an array, return []
// *   2) If <number> is not given or not a number, return just the last element in <array>.
// *   3) Otherwise, return the last <number> items of <array>
// * Edge Cases:

/** 
 * last: checks the array to return the value 
 * @param: {array, number}: check to see if the given array has a number and if it is a n array, returns the last number items of array 
 * 
 * @param {function}: checks to see if the array is an array and loops through array to check if has numbers and returns the last number items of array 
*/

function last (array, number){
        // create an empty array 
      let result = [];
    //use an if else chain
    //check to see that the argument is an array and if not return an empty array 
    if (Array.isArray(array) === false || number < 0) {
        return [];
    //if a number isn't given return the last index of the array
    } else if (number == null) {
        return array[array.length -1];
    //if there are more numbers than there are indexes in the array, return the whole array
    } else if (number > array.length) {
        return array;
    } else {
    //use a for loop to loop over array to return the last item number in array 
        for (let i = array.length - number; i < array.length; i++) {
            result.push(array[i]);
        }
    } return result;
    
}

module.exports.last = last;

/**
 * indexOf: checks the index of an array and compares the values 
 * @param: {array, value}: loops through array and comapres to see if the values in array are equal and if they are not then it returns -1
 * 
 * @param: {function}: the function checks the array and the values to see if the values match and if they dont return negative 1 
*/

function indexOf (array, value){
     for (let i = 0; i < array.length; i++) {
    //check to see at what indexes value occurs
        if (array[i] === value) {
            return i;
        } 
    } return -1; 
    
}
module.exports.indexOf = indexOf;
/**
 * each: check to see if collection is an array or object and if it passes both test you call the function
 * 
 * @param {collection, test} you pass a value into collectio to test to see if it is a object or array then call test based on result 
 * 
 * @param {function} test collection and calls test if collection passes implemeented tests 
*/

  function each (collection, test){
    
    if (Array.isArray(collection) === true){
        for (let i=0; i < collection.length; i++){
            test(collection[i], i, collection)
        }
    } else if(typeof(collection) === 'object'){
        for (var i in collection){
            test(collection[i], i, collection)
        }
        
    }
    
}

module.exports.each = each;

/**
 * unique: checks array and removes all of the duplicates from the array 
 * 
 * @param {array} inputs arary with duplicates and tests for duplicates and returns array without the duplicates 
 * 
 * @param {function} return array without duplicates 
*/
function unique (array){
    // you create an emplty 
    var result = [];
    // create a for loop to loop through array 
    for (var i = 0; i < array.length; i++){
        // then you use the index of filter to filter through the array 
        // as it is filtering through the array it needs return all of the elements with duplicates removed
        // -1 returns if value is not in array
        // return a. new array of all elements from array with duplicates removed 
         if(indexOf(result,array[i]) === -1){
          result.push(array[i]);
      }
  } 
  return result;
        
    
    
}

/** 
 * filter: filters through array and if passes test push the elements into an empty array 
 * 
 * @param{array, test} inputs array and checks tests and if passes test push into empty array 
 * 
 * @param {function} filters through array and if passes test push the elements into an empty array
*/
function filter (array, test){
 
    let elementArray = [];
    if (each(array, test) === true) {
        elementArray.push(test(array));
    } else {
        for (let i = 0; i < array.length; i++) {
            if (test(array[i], i, array) === true) {
                elementArray.push(array[i]);
            }
        }
    }
    return elementArray;
// }
}
module.exports.filter = filter; 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/** 
 * reject: call function for each element in the array passing the arguments from the tests and pushes them into array 
 * 
 * @param {array, test} an array that is being tested by test for all of the elements 
 * 
 * @param {function} checks the elements in array and returns the tests results 
*/

function reject (array, test){
    let result = []; 
    for (let i = 0; i < array.length; i++){
        if (test(array[i], i, array) === false){
            result.push(array[i]);
        }
    } return result; 
}

module.exports.reject = reject;
/** 
 * partition: checks array and to see if it passes the given test 
 * 
 * @param {array, test} test array for each result and based off of results pushes them into an empty array 
 * 
 * 
 * @param {function} checks array and sees if it passes the given tests and returns results 
*/
function partition (array, test){
    // create an empty array 
    let result = [];
    let result2 = []; 
    let result3 = []; 
    // create a for loop to loop through the array 
    for (let i =0; i < array.length; i++){
        if (test(array[i], array[i].key, array)=== true){
            result.push(array[i]);
        } else{
            result2.push(array[i])
            
        } 
        
        
    } result3.push(result, result2); 
    return result3; 
    
}

module.exports.partition = partition;

/** 
 * map: return an array return the calls a callback function on each element or object 
 * 
 * @param {collection, func} returns the callback function on each element or object
 * 
 * @param {function} returns callback function 
*/
function map (collection, func) {
//create an empty array to hold results
let result = [];
//create an if statement to determine if collection is an object or an array
    if (Array.isArray(collection) === true) {
//create a for loop so that all of the values in the array will be run thru the function func
        for (let i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    } else {
//create a for in loop in order to run collection thru func
        for (const property in collection) {
            result.push(func(collection[property], property, collection));
        }
    } return result; 
} 

module.exports.map = map;

/**
 * pluck: returns an array and the object properties 
 * 
 * @param: returns array and object properties from array 
 * 
 * @param {function} returns array properties 
*/

function pluck (array, property){
    

     return array.map(function(obj) {
         return obj[property];
        
  })
    
    
}

module.exports.pluck = pluck;
/**
 * every: test collection to see every element with and returns callback function 
 * 
 * @param: {collection, test} check collection and if it passes test callback the function and return true 
 * 
 * @param: {function} checks the collection and returns true or false based on results 
*/

function every (collection, test){
    // assigned two different values to check 
    var check = test || identity;
    for (let i = 0; i < collection.length; i++){
//if even one value when run thru test equals false, return false
        if (check(collection[i]) === false) { 
            return false; 
        }
    }
     return true; 

}

module.exports.every = every;


/** 
 * some: checks collecgion and returns true or false based on results
 * 
 * @param: {collection, test} collection is given and each element is tested 
 * 
 * @param: {param} checks the value of collection and tests each element inside of collection 
*/

function some (collection, test){
 let trueOrFalse = false;
    each(collection, function(element, index, collection) {
        if(typeOf(test) === 'function' && test(element, index, collection)) {
            trueOrFalse = true;
        } else if (element === true) {
            trueOrFalse = true;
        }
    }); return trueOrFalse;

}

module.exports.some = some;



/**
 * reduce: averages the arguments of array 
 * 
 * @param: {array, test, seed} array, test which is the accumalator, seed its the initial value 
 * 
 * @param: {
*/
function reduce (array, func, seed) { 
//declare a variable that will hold our final return
let previousResult;
//create an if/else chain to determine if seed is given or not (undefined)
if (seed !== undefined) {
//if seed is given let it equal previousResult 
    previousResult = seed;
//call the each function 
//each will pass every value in the array thru our reducer function (func)
each(array, function(e,i,a) {
    previousResult = func(previousResult, e, i, a);
});
//if seed is not given, set it equal to the first value in the array
} else {
    previousResult = array[0];
//instead of using each, use a for loop to iterate over the array
    for (let i = 1; i < array.length; i++) {
        previousResult = func(previousResult, array[i], i, array);
        }
    } 
    return previousResult;
}

module.exports.reduce = reduce;

/**
 * extend: returns object 1
 * 
 * @param: {object, ...args} assigns object2 properties to object1 properties 
 * 
 * @param: {function} returns object1 properties after they are assigned from object2 
*/
function extend (object1, ...args) {
    Object.assign(object1, ...args);
    return object1;
}

module.exports.extend = extend;
