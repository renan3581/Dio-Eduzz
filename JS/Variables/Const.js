// define MY_FAV como uma constante e lhe atribui o valor 7
const MY_FAV = 7;

// isto falha mas não emite erros no Firefox e Chrome (porém não falha no Safari)
MY_FAV = 20;

// a variável MY_FAV possui o valor 7
console.log("my favorite number is: " + MY_FAV);

// tentar redeclarar a constante emite um erro - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// o nome MY_FAV está reservado para a constante acima, logo também irá falhar
var MY_FAV = 20;

// isso também vai falhar
let MY_FAV = 20;

// É importante notar a natureza de escopo por bloco
if (MY_FAV === 7) {
    // não tem problema fazer isso, pois cria uma variável de bloco MY_FAV
    // com escopo local (o nome MY_FAV poderia ser usado com let também)
    let MY_FAV = 20;

    // MY_FAV agora é 20
    console.log("meu número favorito é " + MY_FAV);

    // isso retorna um erro, pois tenta registrar a variável no contexto global
    var MY_FAV = 20;
}

//MY_FAV ainda é 7
console.log('meu número favorito é ' + MY_FAV);

// const deve ser inicializada
const FOO; // SyntaxError: missing = in const declaration

// const também funciona com objetos
const MY_OBJECT = {'key':'value'};

// Sobrescrever o objeto também falha (no Firefox e Chrome mas não no Safari) - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {"OTHER_KEY": "value"};

// Entretanto, atributos de objetos não estão protegidos,
// logo a seguinte instrução é executada sem problemas
MY_OBJECT.key = "otherValue"; // Utilize Object.freeze() se quiser tornar um objeto imutável

// o mesmo se aplica para arrays
const MY_ARRAY = [];
// É possível utilizar push para incluir itens no array
MY_ARRAY.push('A'); //["A"]
// Todavia, atribuir um novo array para a variável gera um erro
MY_ARRAY = ['B'];