// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
// function declaration
function add(n) {
  return n+1;
};
// function expression
let a = function (n) {
  return n+1;
};
//arrow function without curly brackets
let  a = n => n+1;
// arrow function with arrow brackets
let a = n => {
  n+1;
}
// function invocation
add(2); // 3;
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
// function declaration
function sub(n) {
  return n-1;
};
//function expression 
let sub  = function (n) {
  return n-1;
};
// arrow function with curly beackets
let sub = (n) => {
  return n-1;
};
// arrow function without curly brackets
let sub = (n) => n-1;
};
//function invocation
sub(3); 2;
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//function declaration
function add(x,y) {
  return(x+y);
};
//function expression
let add = function (x,y) {
  return(x+y);
};
//arrow function without curly brackets
let add = (x,y) => sum(x+y);
//arrow function with curly brackets
let add = (x,y) => {
  return(x+y);
};
//function invocation
add(1,4)=5;
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//function declaraion
function sub(x,y) {
  return(x-y);
};
//function expression
let test = function sub(x,y) {
      return(x-y);
};
//arrow function with brackets
let test = (x,y) => sum(x-y);
//arrow finction with curly brackets
let test = (x,y) => {
  return(x-y);
};
// function invocation 
sub(3,5);=5-3= -2;
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//function declaration
function multiply(x,y) {
      return(x*y);
};
//function expression 
let test = function(x,y) {
      return(x*y);
};
//arrow function without brackets
let test = (x,y) => (x*y);
//arrow with brackets
let test = (x,y) => {
      return(x*y);
};
//function invocation 
multyiply(2,3);=6;
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//function declaration
function divide(x,y) {
      return(x%y);
};
//function expression 
let test = function (x,y) {
  return(x%y);
};
//arrow function with brackets
let test = (x,y) => {
  return(x%y);
};
//arrow function without brackets
let test = (x,y) => (x%y);
//function  invocation
multiply(4,5);=20;
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//function declaration
function square(x) {
      return(x*x);
};
//function expression 
let test = function (x) {
  return(x*x);
};
//arrow function with brackets
let test = (x) => {
  return(x*x);
};
//arrow funcxtio without brackets
let test = (x) => (x*x);
//function invocation
squre(2);=4
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//function declaration
function value(a, b) {
  return Boolean(a>b);
}
//function expression
var test = function (a,b) {
  return Boolean(a>b);
}
//arrow function with brackets
var test = (a,b) => {
  return Boolean(a>b);
}
//arrow function withiout brackets
var test = (a,b) => return Boolean(a>b);
//function invocation
value(2,4)
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//function invocation
 value(a,b);
//function declration
  function test(a,b) {
      return Boolean(a<b);
  }
//function expression
 var test1 = function (a,b) {
    return Boolean(a);
}
//arrow function with curly brackets
var test1 = (a,b)=> {
    return Boolean(b<a);
  }
// function invocation
value(a,b);
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//function declaration
function test(a,b) {
  return Boolean(a=b);
}
//function expression
var test = function (a,b) {
  return Boolean(a=b);
}
//arrow function with curly brackets
var test = (a,b) => {
  return Boolean(a=b);
}
//arrow function without curly brackets
var test = (a,b) => return => Boolean(a=b);
//function invocation
test(a,b);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
//function declaration
function num(a,b) {
  if (a>b) {
    return b;
  }
  else {
    return a;
  }
}
//function expression
var test = function (a,b) {
  if (a>b) {
    return b;
  }else{
    return a;
  }
}
//arrow function with curly brackets
var test = (a,b)=> {
  if (a>b) {
    return b;
  }else{
    return a;
  }
}
//function invocation 
num(a,b);
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//function declaration 
function value(a,b) {
  if (a>b) {
    return a;
  } esle if (b>a) {
    return b;
  } else {
  return nothing;
  }
}
// function expression
var test = function (a,b) {
  if(a>b) {
    return a;
  } else if (b>a) {
    return b;
  } else {
    return 0;
  }
}
// arrow function with brackets 
var test = (a,b) => {
  if (a>b) {
    return a;
  } else if (b>a) {
    return b;
    } else {
      return 0;
    }
  }
  //function invocation
  value(a,b);
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
// function declaration
function even(n) {
  return Boolean(n%2==0);
}
//function expression
let even = function (n) {
  return Boolean(n%2==0);
}
//arrow function with brackets
let even = (n) => {
  return Boolean(n%2==0);
}
//function invocation 
even(n);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//function declaration
function odd(n) {
  return Boolean(n%2==1);
}
//function expression
let even = function (n) {
  return Boolean(n%2==1);
}
//arrow function with brackets 
let even = (n) => {
  return Boolean(n%2==1);
}
//function invocation
even(n);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//function declaration 
function grade(score ,total) {
  switch(true) {
    case (score>=90 && score <100):
    return "a";
    break;

    case (score>=80 && score <89):
    return "b";
    break;

    case (score>=70 && score <79):
    break;
    return "c";

    case (score>=60 && score <69):
    break;
    return "d";

    case (score>=0 && score <59):
    return "f";
    break;
  }
}
//function expression
let test = function (score ,total) {
  switch(true) {
    case (score>=90 && score <100):
    return "a";
    break;

    case (score>=80 && score <89):
    return "b";
    break;

    case (score>=70 && score <79):
    break;
    return "c";

    case (score>=60 && score <69):
    break;
    return "d";

    case (score>=0 && score <59):
    return "f";
    break;
  }
}
//arrow function with brackets
let test =  (score ,total) => {
  switch(true) {
    case (score>=90 && score <100):
    return "a";
    break;

    case (score>=80 && score <89):
    return "b";
    break;

    case (score>=70 && score <79):
    break;
    return "c";

    case (score>=60 && score <69):
    break;
    return "d";

    case (score>=0 && score <59):
    return "f";
    break;
  }
}
//function invocation
grade(grade, score);
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//function declaration
function add(a, b) {
  return(a + b);
}
//function expression 
let add = function (a, b) {
  return(a + b);
}
//arrow function  with brackets 
let add = (a, b) => {
  return(a + b);
}
//arrow function without brackets 
let add = (a, b) => (a + b);
//function invocation
add(a ,b);