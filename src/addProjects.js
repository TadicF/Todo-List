// Default Project Constructor
export const defaultProjects = {
  projects: [],
}

class DefaultProject {
  constructor(name) {
    this.name = name;
  };
  tasks = [];
}

export function addDefaultProject(name) {
  const project = new DefaultProject(name);
  defaultProjects.projects.push(project);
  console.log('added');
}

addDefaultProject('important');
addDefaultProject('completed');
addDefaultProject('pending');

// User Project Constructor

export const userProjects = {
  projects: [],
}

class UserProject {
  constructor(name) {
    this.name = name;
  }
  tasks = [];
}

export function addUserProject(name) {
  const project = new UserProject(name);
  userProjects.projects.push(project);
}

