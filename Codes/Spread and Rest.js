var myObj = {};
Object.assign(myObj, {a:1, b:2, c:3}, {z:4, y:5, x:6});
console.log(myObj); 

function basicSum(a, b){
    return a+b;
}

var myA = [4, 5]
var result = basicSum(10, 3);
//console.log(basicSum(myA));  returns undefined as it is off array type
//in order to work we use spread operator : `...args`
console.log(basicSum(...myA));  //spread operator : it breaks down value as individual values
console.log(result);    

function generalSum(...args){  //rest operator : it combines values in form of arrays
    let sum = 0;
    for (const arg of args) {
        sum+= arg;
    }
    return sum;
}

console.log(generalSum(1, 2, 3, 4, 5));

function multAndSum(a, b, ...args){  //this fn will multiply first two arguements and rest other will be added seperately
    let sum=0;
    var multi = a*b;
    for (const arg of args) {
        sum+=arg;
    }
    return [multi, sum]
}

console.log(multAndSum(2, 3, 1, 1, 1));