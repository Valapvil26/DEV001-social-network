import { singIn } from '../firebase/firebaseconfig.js';

export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivLogin';
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // formulario login
  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';
  inputDiv.appendChild(formLogin);
  // titulo usuario o email
  const userEmailTitle = document.createElement('h3');
  userEmailTitle.className = 'userEmailTilte';
  userEmailTitle.textContent = 'Correo Electronico';
  formLogin.appendChild(userEmailTitle);
  // input usuario
  const email = document.createElement('input');
  email.className = 'inputMail';
  email.type = 'email';
  email.textContent = 'Correo Electronico o Nombre de Usuario';
  formLogin.appendChild(email);
  // titulo password
  const passwordTitle = document.createElement('h3');
  passwordTitle.className = 'passwordTilte';
  passwordTitle.textContent = 'Contraseña';
  formLogin.appendChild(passwordTitle);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputPassword';
  password.type = 'password';
  password.textContent = 'Contraseña';
  formLogin.appendChild(password);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.type = 'submit';
  btnLogin.textContent = 'Inicia Sesión';
  formLogin.appendChild(btnLogin);
  // div contenedor de botone ir al registro
  const divSignUpLogin = document.createElement('div');
  divSignUpLogin.className = 'divSingUpLogin';
  homeDiv.appendChild(divSignUpLogin);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  divSignUpLogin.appendChild(btnSignUp);

  btnSignUp.addEventListener('click', () => onNavigate('/register'));
  btnLogin.addEventListener('submit', (e) => {
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
        console.log('error en singup', errorCode, errorMessage);
      });
  });

  return homeDiv;
};
