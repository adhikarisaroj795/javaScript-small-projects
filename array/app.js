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

let sum = 0;

prices.forEach((price) => {
    sum += price;
});



console.log(sum);

const sum1 = prices.reduce((prevValue, curValue, curIndex, prices) =>{
    return prevValue + curValue;
}, 0);
console.log(sum1);

const data = 'new year: 20.36: 2000';

const transformedData = data.split(':');

console.log(transformedData);

const nameFragments = ['max', 'saroj'];

const nam = nameFragments.join(' ');
console.log(nam);

const copiedNameFragments = [...nameFragments];
nameFragments.push('mr');
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const personss = [{ name : 'max', age: ' 30'}, { name: 'saroj', age: 31}];
const copiedpersons = personss.map(personss => ({
name: personss.name,
age: personss.age
}) );

personss.push({name: 'manu', age: 29});
personss[0].age = 31;

console.log(personss, copiedpersons);
 

const nameDAta = ['max', 'joras', '30', 'Age'];
const [firstName, LastName, ...otherInformation] = nameDAta;
console.log(firstName, LastName);
console.log(otherInformation);

const ids = new Set(['hello','from', 'jhapa']);
console.log(ids.has(1));

ids.add('hello');

for(const entry of ids.entries()){
    console.log(entry[0]);
}

ids.delete('from');

const person1 = { name: 'max'};
const person2 = { name: 'manuel'};

const personData1 = new Map([[person1,[{ date: 'yesterday', price: 10}]]]);
personData1.set(person2, [{ date : 'two weeaks', price: 100}]);
console.log(personData1);
console.log(personData1.get(person1));

for ( const entry of personData.entries){
    console.log(entry);
}

for(const key of personData1.keys()){
    console.log(key);
}



