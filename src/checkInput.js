import { userProjects } from "./addProjects";

export function checkTaskInput(title, projectName) {
  if(document.querySelector("#task_title").value !== '') {
    // Possible issue, check why is it returning undefined instead of true
    if(checkTaskName(title, projectName)) {
      return true;
    }
  }
  else {
    alert('Please fill the required fields!');
    return false;
  }
}

function checkTaskName(title, projectName) {
  const projLength = userProjects.projects.length;
  for(let i = 0; i < projLength; i++) {
    if(userProjects.projects[i].name === projectName) {
      const taskLength = userProjects.projects[i].tasks.length;
      if(taskLength !== 0) {
        for(let j = 0; j < taskLength; j++) {
          if(title === userProjects.projects[i].tasks[j].title) {
            alert('Error: Task with that title already exists!');
            return false;
          } else {
            return true;
          }
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}