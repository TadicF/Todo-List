// Rewrite this module because it should only create User Object
// instead of appending it to the DOM
import malePfp from './pfp/malepfp.jpg';
import femalePfp from './pfp/femalepfp.jpg';

function createUser() {
  const modalForm = document.querySelector("#userDialog");
  modalForm.showModal();
  let userName = '';
  let userGender = '';
  const confirmButton = document.querySelector(".confirm_button");
  confirmButton.addEventListener("click", (event) => {
    if(!document.querySelector("#username_input").value) {
      return;
    }
    else {
      event.preventDefault();
      modalForm.close();
      userName = document.querySelector("#username_input").value;
      if(document.querySelector("#male_gender").checked) {
        userGender = document.querySelector("#male_gender").value;
      }
      else if(document.querySelector("#female_gender").checked) {
        userGender = document.querySelector("#female_gender").value;
      };
      displayUser(userName, userGender);
      const signUpContainer = document.querySelector('.signUpContainer');
      signUpContainer.replaceChildren('');
    }
  })
}

function displayUser(userName, userGender) {
  const profileContainer = document.querySelector('.profileContainer');
  profileContainer.replaceChildren('');
  const pfp = document.createElement('img');
  const username = document.createElement('p');
  username.textContent = userName;
  if(userGender === 'male' || userGender === '') {
    pfp.classList.add('malePfp');
    pfp.src = malePfp;
  }
  else if (userGender === 'female') {
    pfp.classList.add('femalePfp');
    pfp.src = femalePfp;
  }
  profileContainer.appendChild(pfp);
  profileContainer.appendChild(username);
}

export { createUser };