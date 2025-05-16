import { defaultProjects, userProjects } from "./addProjects";

class Todos {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function addTask(title, desc, dueDate, priority, projectName) {
  const task = new Todos(title, desc, dueDate, priority);
  
  const project = checkProject(projectName);
  userProjects.projects[project].tasks.push(task);
  console.log(userProjects.projects);
}

function checkProject(projectName) {
  let length = userProjects.projects.length;
  for(let i = 0; i < length; i++) {
    if(projectName === userProjects.projects[i].name) {
      return i;
    }
  }
}
