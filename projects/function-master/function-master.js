//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//Create output array
let arrayOutput = [];
//Itertate through and push each value to output
for (var key in object){
    arrayOutput.push(object[key])
}
//return output
return arrayOutput
};

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
let outputArray = [];

for (var key in object) {
    outputArray.push(key)
}

let returnArray = outputArray.join(' ');

return returnArray;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Creating output array
    let array = [];

//Iterating through the object parameter
    for (var key in object) {
        //Testing to see if current iteration's type is string
        if (typeof object[key] === 'string')
        //If it's a string pushing into the output array
        array.push(object[key])
    }
    //Assign returnArray to the output array joined together with a sapce
    let returnArray = array.join(' ');
    return returnArray
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array'
    } else {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var output = '';
    
    output += string[0].toUpperCase();
    output += string.slice(1)
    return output
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arrayOfWords = string.split(' ');
    for (var i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1)
    }
    console.log(arrayOfWords)
    return arrayOfWords.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

return  `Welcome ${capitalizeWord(object.name)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return  `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (Array.isArray(object.noises) === true && object.noises.length > 1) {
    var joinedArray = object.noises.join(' ')
    return joinedArray
} else {
    return 'there are no noises'
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var wordsArray = string.split(' ');
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word) {
        return true
    }
}
return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
let flag = false;
if (object.friends){
for (var i = 0; i < object.friends.length; i++) {
    if (name === object.friends[i]) {
        flag = true
    }
}
}
return flag
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
let output = []
//iterate through array of people
for (var i = 0; i < array.length; i++) {
    //if the parameter name is not the current iterations name..
    if (array[i].name !== name) {
        //check to see if it includes the parameter name
        if (!array[i].friends.includes(name)){
            //if true then push that person's name into the output array
            output.push(array[i].name)
        }
    }
}

return output
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
 object[key] = value
 return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++) {
     delete object[array[i]];
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let unique = [...new Set(array)]
return unique
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}