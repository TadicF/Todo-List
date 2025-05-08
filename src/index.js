import { pageLoader } from './domHandler.js';

class Todos {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todo_item1 = new Todos('Work', "Gotta work", new Date(), "High");
pageLoader.loadPage();