import throttle from 'lodash.throttle';

const submitForm = document.querySelector('.feedback-form');
const emailI = submitForm.elements.email;
const messageI = submitForm.elements.message;

const STORED_KEY = 'feedback-form-state';

const savedForm = throttle(() => {
  const objectForm = {
    email: emailI.value,
    message: messageI.value,
  };
  localStorage.setItem(STORED_KEY, JSON.stringify(objectForm));
}, 5000);

const loadFormState = () => {
  const savedState = localStorage.getItem(STORED_KEY);
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailI.value = email;
    messageI.value = message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const formData = {
    email: emailI.value,
    message: messageI.value,
  };
  console.log(formData);
  localStorage.removeItem(STORED_KEY);
  submitForm.reset();
};

submitForm.addEventListener('input', savedForm);
submitForm.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormState);
