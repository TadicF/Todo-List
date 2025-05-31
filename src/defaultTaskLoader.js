import { defaultProjects, userProjects } from "./addProjects";

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

}

function loadCompletedTasks() {

}

function loadPendingTasks() {

}