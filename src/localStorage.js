import { userProjects } from "./addProjects";
import { addUserProject } from "./addProjects";
import { displayUserProject } from "./domHandler";
import { addTask } from "./addTask";

// Function that saves projects + tasks to local storage
export function saveProjects(projectName) {
  userProjects.projects.forEach(project => {
    if(project.name === projectName) {
      localStorage.setItem(projectName, JSON.stringify(project));
    }
  })
}

// Next: make a function to retrievce data from local storage
export function loadProjects() {
  Object.keys(localStorage).forEach(key => {
    const retrievedObject = localStorage.getItem(key);
    const parsedObject = JSON.parse(retrievedObject);
    addUserProject(parsedObject.name);
    parsedObject.tasks.forEach(task => {
      addTask(task.title, task.desc, task.dueDate, task.priority, parsedObject.name);
    })

    displayUserProject(parsedObject.name);
  }) 
};