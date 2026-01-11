// 1. var
// 2. let
// 3. const

console.log('<----var---->')

if (true) {
    var a = 5;
    console.log("var in block: ", a)
     var a = 'ram'
     console.log(a)
}

console.log("var outside block:", a)
console.log('<----let---->')

if (true) {
    let b = 6
    console.log('let in block: ', b)
    b = 'ram'
     console.log('let in block: ', b)
}

 console.log('let outsid block: ', b)

console.log('<----const---->')
const PI = 3.14
console.log("PI: ", PI)
PI = 4.14;
console.log(PI)