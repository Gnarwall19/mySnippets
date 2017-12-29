// 1)
// ==========================================================
// Reverse String using built in functions
// ==========================================================
function reverseString(str) {
    // Use the split method to return a new array
    var splitString = str.split("");

    // Reverse method to reverse the order of the newly created array
    var reverseArray = splitString.reverse();

    // Join method to convert all elements of the array to a string
    var joinArray = reverseArray.join("");

    return joinArray;
}

console.log(reverseString("hello"));

// ==========================================================
// Chaining the three steps above also works:

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
// ==========================================================

// 2)
// ==========================================================
// Reverse a String with a Decrementing For Loop
// ==========================================================
function reverseString2(str) {
    // Create an empty string var that will host the new created string
    var newString = "";

    // Create the For Loop
    // The starting point of the loop will be (str.length - 1) which corresponds to the last letter in the string
    // as long as i is greater than or equal to 0 the loop will go on
    // Decrement i after each iteration
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i]; //newString = newString + str[i]
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString;
}

console.log(reverseString2("howdy"));

// 3)
// ==========================================================
// Reverse String using Recursion
// ==========================================================
function reverseString3(str) {
    if (str === "") { // Terminal case that will end the recursion
        return "";
    } else {
        return reverseString3(str.substr(1)) + str.charAt(0);

        /* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/

    }
}

console.log(reverseString3("hola"));