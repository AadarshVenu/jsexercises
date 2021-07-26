
//1... Bob will give you a sentence.
// Count how many times each of the 26 letters appears.
// Return the product of all nonzero values.
//     Example: "The quick brown fox jumps over the lazy dog" = 192.
// What is the answer for "With great power comes great responsibility”?  

let string = "With great power comes great responsibility"
let spaceRemovedString = string.split(/\s/).join('')

let eachLetterCount = {};
spaceRemovedString.split('').forEach(function (i) {
    eachLetterCount[i] ? eachLetterCount[i]++ : eachLetterCount[i] = 1;
});
// console.log(eachLetterCount ) ;
let letterCountArray = Object.values(eachLetterCount)
// console.log(c)
let productOfOccurence = letterCountArray.reduce((a, b) => a * b)
console.log(" product of all nonzero values:", productOfOccurence)

//2... A number ABC is magical if ABC, BCA, CAB are primes.How many 3 - digit magical numbers are there  below 1000 ?

let ar = []
function primenumber(a, b) {

    for (i = a; i <= b; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
        }
        if (i == j) {
            ar.push(i)
            // console.log(i);
        }
    }
    // console.log(ar.length)
}
primenumber(100, 1000);
// console.log(ar)
let abc = ar.map(y => (y.toString().split('').join('')))
let xyz = ar.map(y => (y.toString().split('').reverse().join('')))
// console.log(abc)
// console.log(xyz)
const intersection = abc.filter(element => xyz.includes(element));
console.log(intersection.length)




//3... The friend of a number is the sum of its perfect divisors, E.g., Friend of 18 is 21(1 + 2 + 3 + 6 + 9).  2 numbers are best friends of they are friends with each other.
//     Example: Friend of 220 is 284 and friend of 284 is 220.
// What is the sum of all best friends under 10000 ?

function friend(int) {

    let bestfriends = []
    let temp = [];
    for (let i = 1; i < int; i++) {
        if (int % i == 0) {
            temp.push(i);
        }
    }
    let sum = (temp.reduce((a, b) => a + b))
    bestfriends.push(sum, int)
    return bestfriends

}

console.log(friend(1000))

//4.... f(1) = 1 f(x) = (x - 1) * f(x - 1)
// s(x) = sum of digits of x
// Example: f(5) = 24 and s(f(5)) = 6
// What is s(f(101)) ?

function myFunction(number) {
    let factorial;
    let sum;
    function fact(number) {
        if (number === 1) {
            return 1;
        }
        return (number - 1) * fact(number - 1);
    }

    factorial = fact(number);

    if (factorial.toString().includes('e')) {
        factorial = factorial
            .toString()
            .split('e')[0].replace('.', '');
    }

    // console.log('factorial', factorial);

    sum = factorial
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    // console.log(sum);


    return sum;

}

console.log('result', myFunction(101));