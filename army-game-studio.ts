// Create a TypeScript function that accepts a variable of type string. 


// (1.) A function in TypeScript is identical in form to that of JavaScript, and can house the same contents
// (2.) Declare a variable with the type string inside the function


// Declare a variable with the type string
// TypeScript declaring a Variable: var [variable name] : [type of annotation] = value of that variable;
// We want the string to be in uniform casing - so we use the toLocaleLowerCase function to do so
function isItAPalindrome (myString: string): boolean {
    var myString:string = 'radar';
    // var myString:string = 'Radar';
    // case is important, as it will read forward and backward and if not all characters are in the
    // same case, it will return false: It is not a palindrome;
    // try uncommenting the second myString variable to verify
    // myString.toLowerCase;

    const reverseInput = myString
        .split('')
        .reverse()
        .join('')
        if (reverseInput == myString) {
            alert('The string ' + myString + ' is a Palindrome')
            return true;
        } else {
            alert('The string ' + myString + ' is not a Palindrome');
            return false;
        }
        // we want to establish conditionals to ensure one is compared against the other
    // this will return true or false, based on the method used (in this case, boolean)
        
    
}

console.log(isItAPalindrome(''));
// The function should determine whether or not the provided string is a palindrome or not. 
    // If so, return true; otherwise, false. 
    
// Provide the function a string in the TypeScript file. Prepare to compile to JavaScript. 


// function myFunction() {
//     var Test_String = 'This is a string.';
//     return Test_String;
// }