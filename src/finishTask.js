import { userProjects } from "./addProjects";

export function changeTaskStatus(title, projectName) {
  const taskElement = document.querySelector(`[data-name="${title}"]`);
  userProjects.projects.forEach(project => {
    if(project.name === projectName) {
      project.tasks.forEach(task => {
        if(task.title === title) {
          if(task.isDone === false) {
            task.isDone = true;
            taskElement.classList.add('finishedTask');
          } else {
            task.isDone = false;
            taskElement.classList.remove('finishedTask');
          }
        }
      })
    }
  })
}