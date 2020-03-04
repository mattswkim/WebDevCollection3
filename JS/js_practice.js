const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}


//1 
for (let i = 0; i < basket.length; i++){
    console.log(basket[i])
}

//2
basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// enumeraing - objects
for (item in detailedBasket) {
    console.log(item);
}

var array = [1,2,3,591,392,391,2,5,10,2,1,1,1,20,20]
var newArray = [];
function answer (arr) {
    // put them in a sub array
    // organized the number

    // find the same number
    for (var i = 0; i < arr.length; i++) {
        var j = 0;
        if (arr[i] === arr[j]) {
            newArray.push[arr[i]]
        } else {
            j++;
        }
    }
    console.log(newArray);
}
answer(array);