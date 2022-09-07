// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./issayas-tewodros2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace issayas-tewodros2.github.io with your actual github folder name that is in your workspace.
 */

/* 
### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
 */

 var maleCount = function(array) {

    return _.filter(array, current => current['gender'] === 'male') .length      
        
    
    
    };

    /*### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`*/

var femaleCount = function(array) {

    let females = _.reduce(array, function(accumulator, current){
      if (current.gender === 'female') {
        accumulator += 1
      } return accumulator;
    }, 0)
    return females;
    
    };

var oldestCustomer = function(array){
  let oldest = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > oldest) {
      oldest = array[i].age
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].age === oldest) {
      return array[i].name
    }
  }
}
var youngestCustomer = function(array){
    let youngest = 500
    for (let i = 0; i < array.length; i++) {
      if (array[i].age < youngest) {
        youngest = array[i].age
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].age === youngest) {
        return array[i].name
      }
    }
  }
  
  var averageBalance = function(array) {
    let sumOfBal = 0;
    for (var i = 0; i < array.length; i++) {
      let currentBal = array[i].balance;
     currentBal = currentBal.replace(/[^0-9.-]+/g,"");
      sumOfBal += Number(currentBal)                          
    }
  
    sumOfBal = Math.round(sumOfBal / array.length)
    return sumOfBal
  }


  var firstLetterCount = function(array, letter){

    let output = _.filter(array, current => current['name'][0] === letter)
    let betterOut = [];
  for (var i = 0; i < output.length; i++) {
    betterOut.push(output[i].name)
  }
  return betterOut.length
}


var friendFirstLetterCount = function(array, customer, letter){
    let counter = 0;
    let index = 0;
   for (var i = 0; i < array.length; i++) {
     if (array[i].name === customer){
       index = i; 
     }
   }
    let friendsLength = array[index].friends.length;
    for (var i = 0; i < friendsLength; i++) {
      if (array[index].friends[i].name[0] === letter){
        counter++
      }
    }
     return counter
  }

  var friendsCount = function(array, name){
    let output = [];
    //Iterate through people array
    for (var i = 0; i < array.length; i++) {
      //Let variable = current iteration's length
      let friendsLength = array[i].friends.length
      //Iterate through current iteration's friends array
        for (let k = 0; k < friendsLength; k++){
          //If current iterations, current iteration of friends array name property equals argument name push current iteration's name
          if (array[i].friends[k].name === name) {
            output.push(array[i].name)
          }
        }
    }
    //return
    return output
  }

function topThreeTags(array) {
  let output = [];
  let counterObj = {};
  let returnArray = [];
  
  for (var i = 0; i < array.length; i++) {
    output.push(array[i].tags)
  }
  //List all tags as an object
  output = output.join().split(',')
  console.log(output)
  //Create an object with each key being a unique tags value
  let uniqueOutput = _.unique(output)
  _.each(uniqueOutput, current => counterObj[current] = 0)
  //
  for (var i = 0; i < output.length; i++) {
    //If current iteration value is one of the keys in counter obj increment 1
    let index = i;
    for (let keys in counterObj) {
      if (output[index] === keys) {
        counterObj[keys]++
      }
    }
  }
  let arrayOfCount = Object.entries(counterObj)
  let numbersArray = [];
  for (let i = 0; i < arrayOfCount.length; i++) {
    numbersArray.push(arrayOfCount[i][1])
  }
  numbersArray.sort()
  let top3 = numbersArray.slice(numbersArray.length - 3)
  
  for (var i = 0; i < top3.length; i++) {
    let index = i;
    for (let keys in counterObj){
      if (counterObj[keys] === top3[i]) {
        returnArray.push(keys)
      }
    }
  }

  
    
  
  
  return _.unique(returnArray)
}

var genderCount = function(array) {
  var counterObj = {
    "male": 0,
    "female": 0,
    "non-binary": 0
  }
  _.reduce(array, function(accumulator, current){
    for (keys in counterObj) {
      if (current["gender"] === keys){
        counterObj[keys] ++ 
      }
    }
  })
    return counterObj;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
