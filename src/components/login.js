import { signIn } from '../firebase/firebase.js';

export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivLogin';
  // imagen logo
  const imageLogo1 = document.createElement('img');
  imageLogo1.className = 'imageLogo1';
  imageLogo1.src = 'https://i.postimg.cc/kG0cRWLG/logo-1.png';
  homeDiv.appendChild(imageLogo1);
  // toastr alert error en  login
  const divtoastr = document.createElement('div');
  divtoastr.className = 'toastr';
  homeDiv.appendChild(divtoastr);
  // contenido toastr alert
  const toastrContent = document.createElement('span');
  toastrContent.className = 'toastrcontent';
  toastrContent.textContent = 'Contraseña Incorrecta';
  divtoastr.appendChild(toastrContent);
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // formulario login
  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';
  inputDiv.appendChild(formLogin);
  // input usuario
  const labelEmail = document.createElement('label');
  labelEmail.setAttribute = ('for', 'email');
  labelEmail.className = 'labelEmail';
  labelEmail.textContent = 'Correo Electrónico';
  formLogin.appendChild(labelEmail);
  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('class', 'inputMail');
  email.setAttribute('placeholder', 'Correo');
  formLogin.appendChild(email);
  // email.className = 'inputMail';
  // email.type = 'email';
  // email.placeholder = 'Correo o Usuario';
  // formLogin.appendChild(email);
  // input contraseña
  const labelPassword = document.createElement('label');
  labelPassword.setAttribute('for', 'pasword');
  labelPassword.className = 'labelPasword';
  labelPassword.textContent = 'Contraseña';
  formLogin.appendChild(labelPassword);
  const password = document.createElement('input');
  password.className = 'inputPassword';
  password.type = 'password';
  password.placeholder = 'Contraseña';
  formLogin.appendChild(password);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.type = 'submit';
  btnLogin.textContent = 'Inicia Sesión';
  formLogin.appendChild(btnLogin);
  // div contenedor de boton ir al registro
  const divSignUpLogin = document.createElement('div');
  divSignUpLogin.className = 'divSingUpLogin';
  homeDiv.appendChild(divSignUpLogin);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  divSignUpLogin.appendChild(btnSignUp);

  const closeToastr = () => {
    setTimeout(() => {
      toastrContent.style.display = 'none';
    }, 4500);
  };
  const openToastr = (message) => {
    toastrContent.style.display = 'block';
    toastrContent.innerText = message;
    closeToastr();
  };

  btnSignUp.addEventListener('click', () => onNavigate('/register'));
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    signIn(email.value, password.value)
      .then(() => {
        formLogin.reset();
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          openToastr('Contraseña Incorrecta');
        } else if (errorCode === 'auth/invalid-email') {
          openToastr('correo no valido');
        } else if (errorCode === 'auth/user-disabled') {
          openToastr('Usuario no habilitado');
        } else if (errorCode === 'auth/user-not-found') {
          openToastr('Usuario no encontrado');
        } else {
          openToastr(errorMessage);
        }
      });
  });

  return homeDiv;
};
