const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have. `;

function greet(name = "", age = 3, pet ="cat"){
    return `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have. `;

};


const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();





//AdvancedArrays
const array = [1, 2, 10 ,16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

//map, filter, reduce

const mapArray = array.map(num => num * 2);
;

console.log('map', mapArray);

//filter

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log('reduce', reduceArray);