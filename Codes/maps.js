var myMap = new Map();

myMap.set(1, "This is one");
myMap.set(2, "This is two");
myMap.set(3, "This is three");
myMap.set(4, "This is four");

console.log(myMap);

// for( let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }
// for( let value of myMap.keys()){
//     console.log(`Value is ${value}`);
// }

for(let [key, value] of myMap){  //when we use for of loop we first get key then value 
    console.log(`Key is ${key} and holds ${value}`);
}

myMap.forEach( (key) => console.log(`${key}`));  //foreach gives importance to value rather than index or key 
myMap.forEach( (v, k) => console.log(`${v} and key is ${k}`));

myMap.delete(2);

console.log(myMap);