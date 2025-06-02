import { userProjects } from "./addProjects";

export function checkIfTaskIsDone(title, projectName) {
  const taskElement = document.querySelector(`[data-name="${title}"]`);
  userProjects.projects.forEach(project => {
    if(project.name === projectName) {
      project.tasks.forEach(task => {
        if(task.title === title) {
          console.log(task.isDone);
          if(task.isDone === true) {
            taskElement.classList.add('finishedTask');
          } else {
            taskElement.classList.remove('finishedTask');
          }
        }
      })
    }
  })
}