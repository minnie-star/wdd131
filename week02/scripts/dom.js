const input = document.querySelector('#favchap');
const button= document.querySelector('button');
const list = document.querySelector('__'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.Value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);