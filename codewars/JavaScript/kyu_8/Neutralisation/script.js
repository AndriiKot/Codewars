'use strict';

// DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

function neutralise(s1, s2) {
    let str = '';
    const len = s1.length;
    for(let i = 0; i < len; i++) {
        if (s1[i] !== s2[i]) {
            str += '0';
        } else {
            str += s1[i];
        }
    }
    return str;
}

// Test Results:
// Fixed Tests
// Basic Test Cases
// Completed in 1ms
// You have passed all of the tests! :)