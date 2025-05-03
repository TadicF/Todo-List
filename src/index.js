import { pageLoader } from './domHandler.js';
import { signUp } from './createUser.js';

class Todos {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todo_item1 = new Todos('Work', "Gotta work", new Date(), "High");
console.log(todo_item1)

pageLoader.loadPage();