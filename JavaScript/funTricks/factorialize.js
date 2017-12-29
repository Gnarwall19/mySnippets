// 1)
// ==========================================================
// Factorialize with Recursion
// ==========================================================

function factorialize(num) {
    // If num is < 0 reject it
    if (num < 0) {
        return -1;
    } else if (num == 0) { // If num === 0 the answer is 1
        return 1;
    } else {
        return (num * factorialize(num - 1));

        /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */


    }
}

console.log(factorialize(10));

// 2)
// ==========================================================
// Factorialize with a WHILE Loop
// ==========================================================

function factorialize2(num) {
    // Create a var to store the number
    var result = num;

    // if num = 0 OR num = 1 the answer will be 1
    if (num === 0 || num === 1) {
        return 1;
    } else {
        // while num is greater than 1, decrement it and multiply it by the previous increment
        while (num > 1) {
            num--;
            result *= num;
        }

        return result;
    }
}

console.log(factorialize2(5));

// 3)
// ==========================================================
// Factorialize with FOR Loops
// ==========================================================

function factorialize3(num) {

    // if num = 0 or 1 the answer will be 1
    if (num === 0 || num === 1) {
        return 1;
    } else {
        // Start the for loop with 1 less than num
        // decrement after each iteration
        for (i = num - 1; i >= 1; i--) {
            // Store the value of num after each iteration
            num *= i;
        }
        return num;
    }
}

console.log(factorialize3(3));