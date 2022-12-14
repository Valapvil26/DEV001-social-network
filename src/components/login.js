import { singIn } from '../firebase/firebaseconfig.js';

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
  const email = document.createElement('input');
  email.className = 'inputMail';
  email.type = 'email';
  email.placeholder = 'Correo o Usuario';
  inputDiv.appendChild(email);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputPassword';
  password.type = 'password';
  password.placeholder = 'Contraseña';
  inputDiv.appendChild(password);
  // div contenedor de botones ir al registro o logearse
  const divSignUpLogin = document.createElement('div');
  divSignUpLogin.className = 'divSingUpLogin';
  homeDiv.appendChild(divSignUpLogin);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.textContent = 'Inicia Sesión';
  divSignUpLogin.appendChild(btnLogin);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  divSignUpLogin.appendChild(btnSignUp);

  btnSignUp.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('click', () => {
    singIn(email.value, password.value)
      .then((userCredential) => {
        onNavigate('/wall');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error en singup', errorCode, errorMessage);
      });
  });

  return homeDiv;
};
