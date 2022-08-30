//capitalize the string and return it
function myFunction(str) {
    return str.charAt(0).toUpperCase()+ str.slice(1);
}

console.log(myFunction('diana'));

//array of numbers, return the biggest
function myArr(num) {

    return num.sort((a,b)=> b-a)[0]
}

console.log(myArr([1,3,5,6]))

// merge two arrays without dubs

function removedubs(arr) {
    return new Set(arr);
}

console.log(removedubs([1,1,3,3,5,5]))

// function takes any type, return an array, but if there is an array dont nest it
function funct(any) {
    if (typeof any === 'array') {
        return any

    }
    return [any] 
}

//reverse a string
function functionreverse(x) {
    
    return x.split('').reverse().join('');
}

//to find the most common letter in a string. use forEach. hint: use Objects.

function mostCommon(str) {
    const arr = str.split('')
    const obj = arr.reduce((pv, cv) => ({ ...pv, [cv]: pv[cv] ? pv[cv] + 1 : 1 }), {});
    let newArr = []  
    Object.entries(obj).forEach((item)=> {
        if(newArr.length===0){
            newArr=[...item];
        } else {
            newArr = newArr[1]>item[1]? [...newArr] : [...item];
        }
    })
return newArr[0]
}
   

const string = 'aaabbbcddddee'
console.log(mostCommon('aaabbbcddddee'))