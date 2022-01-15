const textInput = document.querySelector('.todosInput');
const todos = document.querySelector('.todosList');
const form = document.querySelector('form');
const allDelete = document.querySelector('.allDelete');
const todosTodo = document.querySelector('.todosTodo');

const createTodo = function (txt) {
  const todo = document.createElement('div');
  todo.classList.add('todosTodo');

  const todoDelete = document.createElement('div');
  todoDelete.classList.add('todoDelete');
  todoDelete.innerText = '❌';

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';

  const todoText = document.createElement('div');
  todoText.classList.add('todoText');
  todoText.innerText = txt;

  todo.appendChild(todoDelete);
  todo.appendChild(todoCheckbox);
  todo.appendChild(todoText);

  todoCheckbox.addEventListener('change', function () {
    todo.classList.toggle('done');
  });

  todoDelete.addEventListener('click', () => {
    removeTodo(todo);
  });

  allDelete.addEventListener('click', () => {
    removeTodo(todo);
  });

  return todo;
};

const addTodo = function (todo) {
  todos.prepend(todo);
};

const checkTodo = function (todo) {
  todo.classList.toggle('done');
};

const removeTodo = function (todo) {
  todo.remove();
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const { value } = textInput;
  textInput.value = '';

  const todo = createTodo(value);
  addTodo(todo);
});
