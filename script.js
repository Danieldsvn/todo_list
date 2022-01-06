// Requisito 1 //
// Cria elementos body, header, h1

let body = document.querySelector("body");
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.style.back
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

// Requisito 5 e 6 //
// criando button
let addButton = document.createElement('button');
addButton.id = 'criar-tarefa';
addButton.style.marginLeft = '10px';
addButton.style.width = '60px';
addButton.style.height = '15px';
addButton.innerText = 'Adicionar'
input.after(addButton); // https://developer.mozilla.org/en-US/docs/Web/API/Element/after

// Função que adiciona a tarefa do input para a lista e que executa os requisitos do 10 e 11. // -----
function inputToList () {
addButton.addEventListener('click', function() {
    let liTask = document.createElement('li');    
    liTask.innerText = input.value;      
    olTaskList.appendChild(liTask);
    input.value = "";  
     removeTasks();
     removeCompletedTasks();
})
};

inputToList ();
// Requisito 7 e 8//


// function taskToColor () {
//     let allTasks = document.querySelectorAll('li');        
//     for ( let i = 0; i < allTasks.length; i += 1) { 
//            allTasks[i].addEventListener('click', function (event) {
//            event.target.id = 'grayMarked';
//            if (allTasks[i] !== event.target) {
//                allTasks.id = '';
//            }
//         })  
              
//     }      

// };

// Requisito 7 e 8//
let allTasks = document.querySelector('ol');
allTasks.addEventListener('click', function(event) {
    let allTasksLi = document.querySelectorAll('li');  
    for ( let i = 0; i < allTasksLi.length; i += 1) {
        allTasksLi[i].style.backgroundColor = 'white';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
     }  
})


// Requisito 9 //
// function taskCompleted() {
//         let allTasks = document.querySelectorAll('li');    
//     for ( let i = 0; i < allTasks.length; i += 1) {        
//         allTasks[i].addEventListener('dblclick', function (event) {
//                if ( event.target.className !== 'completed') {
//                event.target.className = 'completed';
//            }
//                else {
//                event.target.className = "";
//            }
//         })  
              
//     }

// };

allTasks.addEventListener('dblclick', function(event) {      
    if ( event.target.className != 'completed') {
        event.target.className = 'completed';
    }
        else {
        event.target.className = "";
    }
     }  
)
// Requisito 10 //

let deleteAll = document.createElement('button');
deleteAll.id = 'apaga-tudo';
deleteAll.style.marginLeft = '10px';
deleteAll.style.width = '90px';
deleteAll.style.height = '15px';
deleteAll.innerText = 'Limpar tudo';
addButton.after(deleteAll);

function removeTasks () {
    let allTasks = document.querySelector('ol');     
    deleteAll.addEventListener('click', function() {        
    while (allTasks.firstChild) {
        allTasks.firstChild.remove(); //https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    }
    
    })
    
};

// requisito 11 //

let deleteCompleted = document.createElement('button');
deleteCompleted.id = 'remover-finalizados';
deleteCompleted.style.marginLeft = '50px';
deleteCompleted.style.marginTop = '10px';
deleteCompleted.style.width = '110px';
deleteCompleted.style.height = '20px';
deleteCompleted.innerText = 'Limpar feitos';
deleteAll.after(deleteCompleted);

function removeCompletedTasks () {
    let completedTasks = document.getElementsByClassName('completed');     
    deleteCompleted.addEventListener('click', function() {        
    while (completedTasks.length > 0) {
        completedTasks[0].remove();

    }    
    }) 
};

     