import { defaultProjects, userProjects } from "./addProjects";
import { displayTasks } from "./domHandler";

export function loadDefaultTasks(pTitle) {
  switch(pTitle) {
    case 'Important':
      loadImportantTasks();
      break;
    case 'Completed':
      loadCompletedTasks();
      break;
    case 'Pending':
      loadPendingTasks();
      break;
  }
}
 
function loadImportantTasks() {
  userProjects.projects.forEach(project => {
    project.tasks.forEach(task => {
      if(task.priority === 'high') {
        displayTasks(task.title, task.dueDate, task.priority, task.desc, project.name);
      }
    })
  })
}

function loadCompletedTasks() {
 userProjects.projects.forEach(project => {
  project.tasks.forEach(task => {
    if(task.isDone === true) {
      displayTasks(task.title, task.dueDate, task.priority, task.desc, project.name);
    }
  })
 })
}

function loadPendingTasks() {
  userProjects.projects.forEach(project => {
    project.tasks.forEach(task => {
      if(task.isDone === false) {
        displayTasks(task.title, task.dueDate, task.priority, task.desc, project.name);
      }
    })
  })
}