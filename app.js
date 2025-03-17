//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); 
    //trim para retirar os espaços em branco antes e depois do nome (Dica da pesquisa)
    //separar o input do nome para poder limpar ele mais facilmente logo após o nome ser armazenado
      
    let lista = document.getElementById("listaAmigos");
    
    if (nomeAmigo == "") {
        alert("Por favor, digite um nome válido.");
        return;
    } else {
        listaAmigos.push(nomeAmigo);
        let item = document.createElement("li");
        item.textContent = nomeAmigo;
        lista.appendChild(item);
        inputAmigo.value = "";
    }

}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Nenhum amigo foi adicionado ainda.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Seu Amigo Secreto Sorteado é: ${amigoSorteado}</li>`;
}
function limparLista() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}