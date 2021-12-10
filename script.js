// Requisito 1

let body = document.querySelector("body");
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
body.appendChild(header);
header.appendChild(h1);

// Requisito 2

let p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(p);
//-------------------------------------------------//
let main = document.createElement('main');
body.appendChild(main);
//-------------------------------------------------//

// Requisito 3

let input = document.createElement('input');
input.id = 'texto-tarefa';
main.appendChild(input);
