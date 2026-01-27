function add7(x=0){ 
    return x + 7;
}

function multiply(a=1, b=1) {
    return a*b;
}

// function capitalize(words='No Text Passed') {
//     return words.slice(0,1).toUpperCase() + words.slice(1).toLowerCase();
// }


let capitalize = function(words) {
    return words.slice(0,1).toUpperCase() + words.slice(1).toLowerCase();
    };

let lastLetter = (inputText = '') => inputText.slice(-1);



// Test capitalize
console.log('Cap Test 1: ' + capitalize('Hello'));
console.log('Cap Test 2: ' +capitalize('HELLO'));
console.log('Cap Test 3: ' +capitalize('hello'));
console.log('Cap Test 4: ' +capitalize('hElLo'));
console.log('Cap Test 5: ' +capitalize('HeLlo'));

// Test lastLetter
console.log("lastLetter Test 'Hi': "  + lastLetter('Hi'));
console.log("lastLetter Test '': "  + lastLetter(''));
console.log("lastLetter Test (No Input): "  + lastLetter());
console.log("lastLetter Test 'abcd2': "  + lastLetter('abcd2'));
console.log("lastLetter Test 'HellO': "  + lastLetter('HellO'));



