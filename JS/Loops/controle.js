//Continue = Pule para o proximo loop.
//Break = pare o loop.

var index = 0 ;

while (index < 3) {
    index++
    
    if (index > 2) { //Se index > 2 pare o loop 
        break;
    }
    console.log(index)
}


console.log('')


let index2 = 0
while (index2 < 10) {
    index2++
    
    if (index2 >= 2 && index2 <= 4) { //Se index > 2 e < 4 pule para o proximo loop .
        continue;
    }
    console.log(index2)
}