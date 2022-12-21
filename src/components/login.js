import { singIn } from '../firebase/firebase.js';

export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivLogin';
  // imagen logo
  const imageLogo1 = document.createElement('img');
  imageLogo1.className = 'imageLogo1';
  imageLogo1.src = './img/logo_1.png';
  homeDiv.appendChild(imageLogo1);
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // formulario login
  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';
  inputDiv.appendChild(formLogin);
  // input usuario
  const email = document.createElement('input');
  email.className = 'inputMail';
  email.type = 'email';
  email.placeholder = 'Correo o Usuario';
  formLogin.appendChild(email);
  // input contraseña
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

  btnSignUp.addEventListener('click', () => onNavigate('/register'));
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    singIn(email.value, password.value)
      .then((userCredential) => {
        onNavigate('/wall');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Contraseña Incorrecta');
        }
        if (errorCode === 'auth/invalid-email') {
          console.log('correo no valido');
        }
        if (errorCode === 'auth/user-disabled') {
          console.log('Usuario no habilitado');
        }
        if (errorCode === 'auth/user-not-found') {
          console.log('Usuario no encontrado');
        } else {
          console.log(errorMessage);
        }
      });
  });

  return homeDiv;
};
