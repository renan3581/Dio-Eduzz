//For in of
let arr = [3,5,6]
arr.foo = "hello"

//Itera a chave do objeto, no array o index.(foo no array sera contado como index)
for (const i in arr) {
    console.log(i)
}

console.log("")

//Itera sobre os valores do objeto/array.
for (const i of arr) {
    console.log(i)
}