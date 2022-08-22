// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    
    if (Array.isArray(value)) {
        return true
    } else {return false}
    
    // YOUR CODE ABOVE HERE //
}

function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return true 
    } else {
        return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (isArray(value) || isObject(value)) {
        return true
    } else {
        return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'string') {
        return 'string'
    } else if (Array.isArray(value)) {
        return 'array'
    } else if (typeof value === 'undefined') {
        return 'undefined'
    } else if (typeof value === 'number') {
        return 'number'
    } else if (typeof value === 'boolean') {
        return boolean
    } else if (value === null) {
        return 'null'
    } else if (typeof value === 'function') {
        return 'function'
    } else if (typeof value === 'object' && value !== null && value instanceof Date === true) {
        return 'date'
    } else if (typeof value === 'object' && value !== null ) {
        return 'object'
    }
   
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
