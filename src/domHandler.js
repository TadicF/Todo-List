import './styles.css'
import { createUser } from './createUser.js';

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
}

function defaultProjectLoader(defaultProjectName) {
  const main = document.querySelector("#main");
  main.replaceChildren('');

  if(defaultProjectName === 'important') {
    displayProjectCard('Important');
  }
  else if(defaultProjectName === 'completed') {
    displayProjectCard('Completed');
  }
  else if(defaultProjectName === 'pending') {
    displayProjectCard('Pending');
  }
}

function displayProjectCard(pTitle) {
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
}

export const pageLoader = {
  loadPage: () =>  {
    headerLoader();
    sidebarLoader();
  },
}