// Requisito 1 //
// Cria elementos body, header, h1

let body = document.querySelector("body");
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
body.appendChild(header);
header.appendChild(h1);

// Requisito 2 //
// Cria elemento p

let p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(p);
//-------------------------------------------------//
let main = document.createElement('main');
body.appendChild(main);
//-------------------------------------------------//

// Requisito 3 //
// Cria elemento input

let input = document.createElement('input');
input.id = 'texto-tarefa';
main.appendChild(input);

// Requisito 4 //
// Cria elemento ol

let olTaskList = document.createElement('ol');
olTaskList.id = 'lista-tarefas';
main.appendChild(olTaskList);

// Requisito 5 e 6
// criando button
let button = document.createElement('button');
button.id = 'criar-tarefa';
button.style.marginLeft = '10px';
button.style.width = '60px';
button.style.height = '15px';
button.innerText = 'Adicionar'
input.after(button); // https://developer.mozilla.org/en-US/docs/Web/API/Element/after

// Função que adiciona a tarefa do input para a lista
button.addEventListener('click', function() {
    let liTask = document.createElement('li');
    liTask.innerText = input.value;
    olTaskList.appendChild(liTask);
    input.value = "";

})