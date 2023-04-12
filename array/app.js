const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = Array(5, 2);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);
//
const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


const analyticsData = [[1,2,1.6],[-5.4,2.1]];

for (const data of analyticsData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}

console.log(numbers[1]);

const hobbies = ['sports', 'cooking'];
hobbies.push('reading');
hobbies.unshift('writing');
hobbies.shift();
 hobbies.pop(); 


console.log(hobbies);

hobbies.splice(1,0, 'good food');

hobbies.splice(-1,1);
console.log(hobbies);


const testResult = [1, 2, 3, 5, 10.99, 12];

const resultTest = testResult.concat([5,9.3]);

testResult.push(20,10,30);

console.log(testResult,resultTest); 

const personData = [{ name: 'max'}, { name: 'joras'}];

console.log(personData.indexOf({ name: 'joras'}));


const joras = personData.find((person, idx, persons) => {
    return person.name === 'max';
});

console.log(joras);


const prices  = [10.99, 5.99, 3.99, 5.5];
const tax = 0.19;

const taxAdjustedPrices = [];

for (const price of prices){
    taxAdjustedPrices.push(price * (1 + tax));
}

prices.forEach((price, idx, prices) =>{
    const priceobj = { index: idx, taxAdjustedPrices: price * (1 + tax)};
    taxAdjustedPrices.push(priceobj);

});

const sortedPrices = prices.sort((a, b) =>{
    if(a > b){
        return 1;

    } else if ( a===b ){
        return 0;
    } else {
        return -1;
    }

});

sortedPrices.reverse();




console.log(sortedPrices);


const filteredArray = prices.filter((price, index, prices) =>{
    return price > 6
})


console.log(filteredArray);