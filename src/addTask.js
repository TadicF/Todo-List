import { userProjects } from "./addProjects";
import { displayTasks } from "./domHandler";
import { saveProjects } from "./localStorage";

class Todos {
  constructor(title, desc, dueDate, priority, isDone) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}

export function addTask(title, desc, dueDate, priority, projectName) {
  const task = new Todos(title, desc, dueDate, priority, false);
  
  const project = checkProject(projectName);
  userProjects.projects[project].tasks.push(task);
  saveProjects(projectName);
}

function checkProject(projectName) {
  let length = userProjects.projects.length;
  for(let i = 0; i < length; i++) {
    if(projectName === userProjects.projects[i].name) {
      return i;
    }
  }
}

export function loadTasks(projectName) {
  let length = userProjects.projects.length;
  console.log(userProjects.projects);
  for(let i = 0; i < length; i++) {
    if(projectName === userProjects.projects[i].name) {
      let tasks = userProjects.projects[i].tasks;
      tasks.forEach(task => {
          let title = task.title;
          let date = task.dueDate;
          let priority = task.priority;
          let desc = task.desc;
          displayTasks(title, date, priority, desc, projectName);
      })
    }
  }
}