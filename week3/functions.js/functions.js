

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } 
    else if (number % 3 === 0) {
        return "Fizz";
    } 
    else if (number % 5 === 0) {
        return "Buzz";
    } 
    else {
        return number;
    }
}


function isEven(number) {
    return number % 2 === 0;
}


function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}


function calculateGrade(marks) {
    if (marks >= 80) {
        return "A";
    } 
    else if (marks >= 70) {
        return "B";
    } 
    else if (marks >= 60) {
        return "C";
    } 
    else if (marks >= 50) {
        return "D";
    } 
    else {
        return "F";
    }
}



function sumToN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}



function multiplicationTable(number) {
    const table = [];

    for (let i = 1; i <= 10; i++) {
        table.push(number * i);
    }

    return table;
}




function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    return reversed;
}




function isPalindrome(text) {
    const reversed = reverseString(text);

    return text === reversed;
}




function countVowels(text) {
    const word = text.toLowerCase();
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (
            word[i] === "a" ||
            word[i] === "e" ||
            word[i] === "i" ||
            word[i] === "o" ||
            word[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}




function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        default:
            return "Invalid operator";
    }
}




function guessNumber(secretNumber, guesses) {
    const results = [];

    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] > secretNumber) {
            results.push("Too high");
        } 
        else if (guesses[i] < secretNumber) {
            results.push("Too low");
        } 
        else {
            results.push("Correct");
        }
    }

    return results;
}




function passwordStrength(password) {
    let hasDigit = false;
    let hasUppercase = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            hasDigit = true;
        }

        if (password[i] >= "A" && password[i] <= "Z") {
            hasUppercase = true;
        }
    }

    if (password.length >= 12 && hasDigit && hasUppercase) {
        return "strong";
    } 
    else if (password.length >= 8 && (hasDigit || hasUppercase)) {
        return "medium";
    } 
    else {
        return "weak";
    }
}




function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } 
    else if (year % 100 === 0) {
        return false;
    } 
    else if (year % 4 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

function assertEqual(actual, expected, label) {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);

    console.log(`${passed ? "PASS" : "FAIL"}: ${label}`);

    if (!passed) {
        console.log("Expected:", expected);
        console.log("Actual:", actual);
    }
}



assertEqual(fizzBuzz(15), "FizzBuzz", "Divisible by 3 and 5");
assertEqual(fizzBuzz(9), "Fizz", "Divisible by 3");
assertEqual(fizzBuzz(10), "Buzz", "Divisible by 5");
assertEqual(fizzBuzz(7), 7, "Not divisible by 3 or 5");


assertEqual(isLeapYear(1900), false, "Century year not divisible by 400");
assertEqual(isLeapYear(2000), true, "Century year divisible by 400");
assertEqual(isLeapYear(2024), true, "Normal leap year");
assertEqual(isLeapYear(2026), false, "Normal non-leap year");


assertEqual(reverseString(""), "", "Empty string");
assertEqual(reverseString("a"), "a", "Single character");
assertEqual(reverseString("abc"), "cba", "Normal string");


assertEqual(countVowels("rhythm"), 0, "No vowels");
assertEqual(countVowels("Education"), 5, "Multiple vowels");
assertEqual(countVowels(""), 0, "Empty string");


assertEqual(passwordStrength("Abc123"), "weak", "Short password");
assertEqual(passwordStrength("abcdefgh1"), "medium", "Medium password");
assertEqual(passwordStrength("Abcdefghij12"), "strong", "Strong password");
assertEqual(passwordStrength(""), "weak", "Empty password");





function makeCounter(start)
{
    let count=start;
    return function counteradd(){
        count++;
        return count;
    }

}

counter1=makeCounter(0);
counter2=makeCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());




function makeMultiplier(factor)
{
    return function (number)
    {
        return number * factor;
    }
}
const double=makeMultiplier(2);
const triple=makeMultiplier(3);

console.log(double(5));
