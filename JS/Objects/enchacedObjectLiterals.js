let obj = {
    1:2
}


let propName = 'teste'
let obj2 = {
    [propName]: 'Prop Value'
}
console.log(obj2)


let prop = '121'
let obj3 = {
    prop, //Shorthand - prop:prop
    Sum(a,b){return a + b}, //Shorthand - Sum: function Sum(){}
}

console.log(obj3.Sum(1,2))

