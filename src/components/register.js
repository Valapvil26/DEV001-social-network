import { singUp } from '../firebase/firebaseconfig.js';

export const register = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivRegister';
  // titulo registro
  const registerTitle = document.createElement('h3');
  registerTitle.className = 'registerTitle';
  registerTitle.textContent = 'Bienvenido al Registro';
  homeDiv.appendChild(registerTitle);
  // div contenedor formulario de registro
  const divInput = document.createElement('div');
  divInput.className = 'divInputRegister';
  homeDiv.appendChild(divInput);
  // formulario de registro
  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';
  divInput.appendChild(formRegister);
  // titulo nombre de usuaro
  const userNameTitle = document.createElement('p');
  userNameTitle.className = 'userNameTitle';
  userNameTitle.textContent = 'Nombre de ususario';
  formRegister.appendChild(userNameTitle);
  // input nombre de usuario
  const userName = document.createElement('input');
  userName.className = 'inputAddUserName';
  formRegister.appendChild(userName);
  // titulo correo electronico
  const emailTitle = document.createElement('p');
  emailTitle.className = 'emailTitle';
  emailTitle.textContent = 'Correo Electronico';
  formRegister.appendChild(emailTitle);
  // input correo
  const email = document.createElement('input');
  email.className = 'inputAddMail';
  email.type = 'email';
  formRegister.appendChild(email);
  // titulo contraseña
  const passwordTitle = document.createElement('p');
  passwordTitle.className = 'passwordTitle';
  passwordTitle.textContent = 'Contraseña';
  formRegister.appendChild(passwordTitle);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputAddPassword';
  password.type = 'password';
  formRegister.appendChild(password);
  // titulo contraseña
  const confirmPassword = document.createElement('p');
  confirmPassword.className = 'confirmPassword';
  confirmPassword.textContent = 'Confirmar Contraseña';
  formRegister.appendChild(confirmPassword);
  // input confirmar contraseña
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.className = 'inputConfirmPassword';
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirmar Contraseña';
  formRegister.appendChild(inputConfirmPassword);
  // boton registrarme
  const btnregister = document.createElement('button');
  btnregister.type = 'submit';
  btnregister.className = 'btnRegisterMe';
  btnregister.textContent = 'Registrarme';
  formRegister.appendChild(btnregister);
  // boton regresar al home
  const btnHome = document.createElement('button');
  btnHome.className = 'btnbackHome';
  btnHome.textContent = 'Regresar al Home';
  homeDiv.appendChild(btnHome);

  btnHome.addEventListener('click', () => onNavigate('/'));

  btnregister.addEventListener('submit', (e) => {
    e.preventDefault();
    const userCredentials = singUp(email.value, password.value)
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
    console.log(userCredentials);
  });

  return homeDiv;
};
