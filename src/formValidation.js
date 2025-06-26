import { addUserProject } from "./addProjects"
import { displayUserProject } from "./domHandler"
import { data } from "./domHandler";

export function projectFormValidation() {
  const form = document.querySelector('.projectForm');
  const input = document.querySelector("#projectName");
  const errorMsg = document.querySelector('.errorMsg');

  input.addEventListener('input', (event) => {
    if(input.validity.valid) {
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Max Character Length reached!"
    };
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(input.validity.valueMissing) {
      
      errorMsg.textContent = 'Please fill out this field.';
    } else {
      data.projectForm = false;
      let projectName = input.value
      addUserProject(projectName);
      form.replaceChildren('');
      form.remove();
      displayUserProject(projectName);
    }
  })
}
