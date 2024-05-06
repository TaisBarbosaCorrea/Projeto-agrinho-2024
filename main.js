let nomeUsuário = "" ;
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual é o seu nome?")

}

if(nomeUsuário == null){
    elemento.textContent = "Obrigada!";
}else{
    elemento.textContent = nomeUsuário
}