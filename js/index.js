const form = document.getElementById('primaryForm');
const emailFiel = document.getElementById('email');
const error = document.querySelector('.error');
const mainContent = document.querySelector('.main-wrapper');
const successMessage = document.querySelector('.success-container');
const targetEmail = document.querySelector('.target-email');
const dismissMessage = document.querySelector("[data-id='successBtn']");

let emailIsReady = false;
document.addEventListener('DOMContentLoaded', () => {
  successMessage.classList.remove('show-success-container');
  emailFiel.addEventListener('keyup', (e) => {
    emailIsReady = validateEmail(emailFiel, e.target.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailIsReady) {
      mainContent.style.display = 'none';
      successMessage.classList.add('show-success-container');
      targetEmail.textContent = emailFiel.value.toLowerCase();
      dismissMessage.addEventListener('click', () => {
        window.location.reload();
      });
    }
  });
});

const setError = () => {
  error.classList.add('display-error');
};
const setSucces = () => {
  error.classList.remove('display-error');
};
const validateEmail = (email, emailValue) => {
  let validEmail = false;
  if (emailValue === '') {
    setError();
    emailFiel.classList.add('input-error');
    validEmail = false;
    return validEmail;
  } else if (!isValidEmail(emailValue)) {
    setError();
    emailFiel.classList.add('input-error');
    validEmail = false;
    return validEmail;
  } else {
    setSucces(email);
    emailFiel.classList.remove('input-error');
    validEmail = true;
    return validEmail;
  }
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
