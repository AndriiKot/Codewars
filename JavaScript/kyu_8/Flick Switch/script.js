'use strict';

// DESCRIPTION:
// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr){
    const len = arr.length;
    const newArray = Array(len);
    let isNotFlick = true;
    for(let i = 0; i < len; i++){
        if (arr[i] === 'flick') {
            isNotFlick = !isNotFlick;
        }
        newArray[i] = isNotFlick;
    }
    return newArray;
}

// Time: 834ms Passed: 1Failed: 0
// Test Results:
// Sample tests
// Basic tests
// Test Passed
// Completed in 1ms
// Completed in 1ms
// You have passed all of the tests! :)
