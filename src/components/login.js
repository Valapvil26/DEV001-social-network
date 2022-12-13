import { singIn } from '../firebase/firebaseconfig.js';

export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivLogin';
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // titulo usuario o email
  const userEmailTitle = document.createElement('h3');
  userEmailTitle.className = 'userEmailTilte';
  userEmailTitle.textContent = 'Correo Electronico';
  inputDiv.appendChild(userEmailTitle);
  // input usuario
  const email = document.createElement('input');
  email.className = 'inputMail';
  email.type = 'email';
  email.textContent = 'Correo Electronico o Nombre de Usuario';
  inputDiv.appendChild(email);
  // titulo password
  const passwordTitle = document.createElement('h3');
  passwordTitle.className = 'passwordTilte';
  passwordTitle.textContent = 'Contraseña';
  inputDiv.appendChild(passwordTitle);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputPassword';
  password.type = 'password';
  password.textContent = 'Contraseña';
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
