let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter () { 
// definir uma variável (let) para cada um dos valores
//logar no navegador cada um desses valores
// recupera os valores dos inputs com os ids "nome" "cpf" "idade".

let nome = document.getElementById("nome").value;
console.log(nome);


let cpf = document.getElementById("cpf").value;
console.log(cpf);


let idade = document.getElementById("idade").value;
console.log(idade);

if (nome == "" ){
    alert("matoki");
    return;
}






}