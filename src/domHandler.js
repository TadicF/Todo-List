import './styles.css'
import { createUser } from './createUser.js';
import { addDefaultProject } from './addProjects.js';
import { addUserProject } from './addProjects.js';
import { addTask } from './addTask.js';
import { loadTasks } from './addTask.js';
import { checkTaskInput } from './checkInput.js';

const data = {
  projectForm: false,
  sameTaskNames: 0,
}

// Load Page Header
function headerLoader() {
  const header = document.querySelector("#header");

  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profileContainer');
  header.appendChild(profileContainer);
  profileContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>`
  const userName = document.createElement('p');
  userName.textContent = 'Guest';
  profileContainer.appendChild(userName);

  const appTitle = document.createElement("div");
  appTitle.classList.add('appTitle');
  header.appendChild(appTitle);
  const myH1 = document.createElement('h1');
  myH1.textContent = `PlanPal`;
  appTitle.appendChild(myH1);

  const signUpContainer = document.createElement('div');
  signUpContainer.classList.add('signUpContainer');
  header.appendChild(signUpContainer);
  const signUpButton = document.createElement('button');
  signUpButton.classList.add("signUpButton")
  signUpButton.textContent = 'Sign Up';
  signUpContainer.appendChild(signUpButton);
  signUpButton.addEventListener('click', () => createUser());

  const optionsSection = document.createElement('div');
  optionsSection.classList.add('optionsSection');
  header.appendChild(optionsSection);
  const myPara1 = document.createElement('p');
  myPara1.textContent = 'Options';
  optionsSection.appendChild(myPara1);
  optionsSection.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`;
}

function sidebarLoader() {
  const sidebar = document.querySelector('#sidebar');
  const todoProjects = document.createElement('div');
  todoProjects.classList.add("todoProjects")
  sidebar.appendChild(todoProjects);

  const importantProjects = document.createElement('nav');
  importantProjects.classList.add("importantProjects");
  todoProjects.appendChild(importantProjects);
  importantProjects.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>`;
  const importantTitle = document.createElement('p');
  importantTitle.textContent = 'Important';
  importantProjects.appendChild(importantTitle);
  importantProjects.addEventListener('click', () => defaultProjectLoader('important'));
  
  const completedProjects = document.createElement('nav');
  completedProjects.classList.add('importantProjects');
  todoProjects.appendChild(completedProjects);
  completedProjects.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  const completedTitle = document.createElement('p');
  completedTitle.textContent = 'Completed';
  completedProjects.appendChild(completedTitle);
  completedProjects.addEventListener('click', () => defaultProjectLoader('completed'));


  const pendingProjects = document.createElement('nav');
  pendingProjects.classList.add('pendingProjects');
  todoProjects.appendChild(pendingProjects);
  pendingProjects.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,2H18V8H18V8L14,12L18,16V16H18V22H6V16H6V16L10,12L6,8V8H6V2M16,16.5L12,12.5L8,16.5V20H16V16.5M12,11.5L16,7.5V4H8V7.5L12,11.5M10,6H14V6.75L12,8.75L10,6.75V6Z" /></svg>`;
  const pendingTitle = document.createElement('p');
  pendingTitle.textContent = 'Pending';
  pendingProjects.appendChild(pendingTitle);
  pendingProjects.addEventListener('click', () => defaultProjectLoader('pending'));


  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('addProject');
  addProjectBtn.textContent = 'Add Project'
  todoProjects.appendChild(addProjectBtn);
  addProjectBtn.addEventListener('click', () => {
      if(!data.projectForm) {
        displayProjectForm();
        data.projectForm = true;
      }
  }); 
}

function defaultProjectLoader(defaultProjectName) {
  const main = document.querySelector("#main");
  main.replaceChildren('');

  if(defaultProjectName === 'important') {
    loadDefaultProject('Important');
  }
  else if(defaultProjectName === 'completed') {
    loadDefaultProject('Completed');
  }
  else if(defaultProjectName === 'pending') {
    loadDefaultProject('Pending');
  }
}

function loadDefaultProject(pTitle) {
  const mainContainer = document.querySelector("#main");
  const project = document.createElement('div');
  project.classList.add('project');
  mainContainer.appendChild(project);

  const projectTitle = document.createElement('div');
  projectTitle.classList.add("projectTitle")
  project.appendChild(projectTitle);

  const title = document.createElement('p');
  title.textContent = pTitle;
  projectTitle.appendChild(title);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.classList.add('closeProjectBtn');
  projectTitle.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => { 
    mainContainer.replaceChildren('');
    // ***** Add function to load Default Main page (informations) *********
  })

  addDefaultProject(title);
}

function displayProjectForm() {
  const todoProjects = document.querySelector('.todoProjects');
  const projectForm = document.createElement('form');
  projectForm.classList.add('projectForm');
  todoProjects.appendChild(projectForm);

  const formDiv = document.createElement('div');
  formDiv.classList.add("formDiv");
  projectForm.appendChild(formDiv);

  const formLabel = document.createElement('label');
  formLabel.textContent = 'Project Name';
  formLabel.setAttribute('for', 'projectName')
  formDiv.appendChild(formLabel);

  const formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('name', 'projectName');
  formInput.setAttribute('id', 'projectName');
  formDiv.appendChild(formInput);

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('formButtons');
  projectForm.appendChild(buttonDiv);

  const acceptButton = document.createElement('button');
  acceptButton.classList.add('acceptProjectBtn');
  acceptButton.textContent = 'Accept';
  buttonDiv.appendChild(acceptButton);
  acceptButton.addEventListener('click', (event) => {
    event.preventDefault();
    data.projectForm = false;

    const projectName = formInput.value;
    if(projectName === '') {
      alert(`That field can not be empty!`);
      return;
    }
    addUserProject(projectName);

    projectForm.replaceChildren('');
    projectForm.remove();

    displayUserProject(projectName);
  })

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancelProjectBtn');
  cancelButton.textContent = 'Cancel';
  buttonDiv.appendChild(cancelButton);
  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    projectForm.replaceChildren('');
    projectForm.remove();
    data.projectForm = false;
  })
}

function displayUserProject(projectName) {
  const todoProjects = document.querySelector('.todoProjects');
  const addProjectBtn = document.querySelector('.addProject');
  const project = document.createElement('nav');
  todoProjects.appendChild(project);
  project.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,5V19H19V12H12V5H5Z" /></svg>`;
  const pTitle = document.createElement('p');
  pTitle.textContent = projectName;
  project.appendChild(pTitle);
  addProjectBtn.before(project);

  project.addEventListener('click', () => {
    loadUserProject(projectName);
  })
}

function loadUserProject(projectName) {
  const main = document.querySelector("#main");
  main.replaceChildren('');
  const project = document.createElement('div');
  project.classList.add('project');
  main.appendChild(project);

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('projectTitle');
  project.appendChild(projectTitle);

  const title = document.createElement('p');
  title.textContent = projectName;
  projectTitle.appendChild(title);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btnContainer');
  projectTitle.appendChild(btnContainer);

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('addTaskBtn');
  addTaskBtn.textContent = 'Add Task';
  btnContainer.appendChild(addTaskBtn);
  addTaskBtn.addEventListener('click', () => {
    taskForm(projectName);
  })

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('closeProjectBtn');
  closeBtn.textContent = 'Close';
  btnContainer.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    if(main.firstElementChild)
    main.replaceChildren('');
  });

  const projectTasks = document.createElement('div');
  projectTasks.classList.add("projectTasks");
  project.appendChild(projectTasks);

  loadTasks(projectName);  
}

function taskForm(projectName) {
  clearInput();
  const taskDialog = document.querySelector('#taskDialog');
  taskDialog.showModal();
  
  const acceptTaskBtn = document.createElement('button');
  const cancelTaskBtn = document.createElement('button');
  const taskButtons = document.querySelector('.taskButtons');
  acceptTaskBtn.classList.add("acceptTaskBtn");
  cancelTaskBtn.classList.add("cancelTaskBtn");
  acceptTaskBtn.textContent = 'Accept';
  cancelTaskBtn.textContent = 'Cancel';
  taskButtons.appendChild(acceptTaskBtn);
  taskButtons.appendChild(cancelTaskBtn);

  acceptTaskBtn.addEventListener('click', function() {
    acceptTask(event, projectName);
  })

  cancelTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log('closed');
    taskDialog.close();
    acceptTaskBtn.remove();
    cancelTaskBtn.remove();
  })
}

function acceptTask(event, projectName) {
  event.preventDefault();
  const taskDialog = document.querySelector('#taskDialog');
  const acceptTaskBtn = document.querySelector(".acceptTaskBtn");
  const cancelTaskBtn = document.querySelector(".cancelTaskBtn");
  let title = document.querySelector('#task_title').value;
  let desc = document.querySelector("#task_desc").value;
  let date = document.querySelector("#due_date").value;
  let priority;
  if(checkTaskInput(title, projectName)) {
    if(document.querySelector('#low_priority').checked) {
      priority = 'low';
    }
    else if(document.querySelector("#medium_priority").checked) {
      priority = 'medium'
    }
    else if(document.querySelector("#high_priority").checked) {
      priority = 'high';
    }
    addTask(title, desc, date, priority, projectName);
    displayTasks(title, date, priority, desc);
    taskDialog.close();
    acceptTaskBtn.remove();
    cancelTaskBtn.remove();
  }

  else {
    return;
  }
}

export function displayTasks(title, date, priority, desc) {
  const projectTasks = document.querySelector(".projectTasks")
  const task = document.createElement('div');
  task.setAttribute('data-name', title);
  task.classList.add('task');
  task.classList.add(`${priority}`);
  task.classList.add(`${title}`);
  task.classList.add('taskDescClosed')
  projectTasks.appendChild(task);
   
  const boxContainer = document.createElement('div');
  boxContainer.classList.add('boxContainer');
  boxContainer.innerHTML += `<svg class='checkbox' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>`;
  task.appendChild(boxContainer);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  const taskTitle = document.createElement('p');
  taskTitle.classList.add('taskTitle');
  taskTitle.textContent = `${title}`;
  titleContainer.appendChild(taskTitle);
  task.appendChild(titleContainer);

  const dateContainer = document.createElement('div');
  dateContainer.classList.add('dateContainer');
  dateContainer.innerHTML += `<svg class='dateSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>`;

  const taskDate = document.createElement('p');
  taskDate.classList.add('taskDate');
  if(date === '') {
    taskDate.textContent = 'No Date Set';
  }
  else {
    taskDate.textContent = `${date}`;
  }
  dateContainer.appendChild(taskDate);   
  titleContainer.appendChild(dateContainer);

  const downContainer = createDownContainer(title, desc);
  task.appendChild(downContainer);
}

function createDownContainer(title, desc) {
  const downContainer = document.createElement('div');
  downContainer.classList.add('downContainer');     
  downContainer.setAttribute('data-desc', title); 
  const downText = document.createElement('p');
  downText.textContent = 'Description';     
  downContainer.appendChild(downText);
  downContainer.innerHTML += `<svg class='showDescBtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>`;
  downContainer.addEventListener('click', function() {
    if(!document.querySelector('.descriptionBox')) {
      displayDesc(title, desc);
    }
  })

  return downContainer;
}

function displayDesc(title, desc) {
  const task = document.querySelector(`.${title}`);
  const descriptionBox = document.createElement('div');
  descriptionBox.classList.add("descriptionBox");
  const textContainer = document.createElement('div');
  textContainer.classList.add('textContainer');
  descriptionBox.appendChild(textContainer);
  const descText = document.createElement('p');
  if(desc === '') {
    descText.textContent = 'No Desc Set';
  }
  else {
    descText.textContent = `${desc}`;
  }
  textContainer.appendChild(descText);
  task.appendChild(descriptionBox);
  task.classList.add('taskDescOpened');
  task.classList.remove('taskDescClosed');

  const downContainer = document.querySelector(`[data-desc="${title}"]`);
  downContainer.remove();

  const upContainer = document.createElement('div');
  upContainer.classList.add('upContainer');
  const upText = document.createElement('p');
  upText.textContent = 'Close';
  upContainer.appendChild(upText);
  upContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>`;
  descriptionBox.appendChild(upContainer);
  upContainer.addEventListener('click', function() {
    const downContainer = createDownContainer(title, desc);
    task.appendChild(downContainer);
    upContainer.remove();
    descriptionBox.remove();
    task.classList.remove('taskDescOpened');
    task.classList.add('taskDescClosed');
  })
}

function clearInput() {
  document.querySelector('#task_title').value = '';
  document.querySelector('#task_desc').value = '';
  document.querySelector('#due_date').value = '';
  document.querySelector("#low_priority").value = '';
  document.querySelector('#medium_priority').value = '';
  document.querySelector('#high_priority').value = '';
}

export const pageLoader = {
  loadPage: () =>  {
    headerLoader();
    sidebarLoader();
  },
}