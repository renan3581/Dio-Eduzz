/* O hoisting the uma função move todo o escopo dela para a parte superior do escopo em que esta presente */

function fn(){
    log("hoisting de função")

    function log(value){
        console.log(value)
    }
}

fn();

/*
O que o JS fez:
function fn(){
    function log(value){
        console.log(value)
    }

    log("hoisting de função") 
}
*/