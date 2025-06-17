/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (i == indexOfTodo) {
        this.todos.splice(i, 1);
      }
    }
  }
  update(index, updatedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (i == index) {
        this.todos[i] = updatedTodo;
      }
    }
  }
  getAll() {
    return this.todos;
  }
  get(index) {
    if (index < 0 || index >= this.todos.length){
      return null
    }
    return this.todos[index];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
