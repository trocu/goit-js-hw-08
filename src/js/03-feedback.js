import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK = 'feedback-form-state';
const { email, message } = form.elements;

updateInput();

//Fetches form data and saves in localStorage
form.addEventListener('input', throttle(saveInput, 500));

function saveInput(e) {
  e.preventDefault();

  const clientDataInput = {
    email: email.value,
    message: message.value,
  };
  //   console.log(clientData);
  window.localStorage.setItem(FEEDBACK, JSON.stringify(clientDataInput));
}

//Updates form fields after page reload
function updateInput() {
  if (localStorage.getItem(FEEDBACK) === null) {
    return;
  }
  const clientDataOutput = JSON.parse(window.localStorage.getItem(FEEDBACK));
  email.value = clientDataOutput.email;
  message.value = clientDataOutput.message;
}

//Clears localStorage after form submission
form.addEventListener('submit', clearStorage);

function clearStorage(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Please complete all fields!');
  }
  const showClientData = JSON.parse(window.localStorage.getItem(FEEDBACK));
  console.log(showClientData);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
}
