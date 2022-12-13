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
  // titulo nombre de usuaro
  const userNameTitle = document.createElement('p');
  userNameTitle.className = 'userNameTitle';
  userNameTitle.textContent = 'Nombre de ususario';
  divInput.appendChild(userNameTitle);
  // input nombre de usuario
  const userName = document.createElement('input');
  userName.className = 'inputAddUserName';
  divInput.appendChild(userName);
  // titulo correo electronico
  const emailTitle = document.createElement('p');
  emailTitle.className = 'emailTitle';
  emailTitle.textContent = 'Correo Electronico';
  divInput.appendChild(emailTitle);
  // input correo
  const email = document.createElement('input');
  email.className = 'inputAddMail';
  email.type = 'email';
  divInput.appendChild(email);
  // titulo contraseña
  const passwordTitle = document.createElement('p');
  passwordTitle.className = 'passwordTitle';
  passwordTitle.textContent = 'Contraseña';
  divInput.appendChild(passwordTitle);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputAddPassword';
  password.type = 'password';
  divInput.appendChild(password);
  // titulo contraseña
  const confirmPassword = document.createElement('p');
  confirmPassword.className = 'confirmPassword';
  confirmPassword.textContent = 'Confirmar Contraseña';
  divInput.appendChild(confirmPassword);
  // input confirmar contraseña
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.className = 'inputConfirmPassword';
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirmar Contraseña';
  divInput.appendChild(inputConfirmPassword);
  // boton registrarme
  const btnregister = document.createElement('button');
  btnregister.className = 'btnRegisterMe';
  btnregister.textContent = 'Registrarme';
  homeDiv.appendChild(btnregister);
  // boton regresar al home
  const btnHome = document.createElement('button');
  btnHome.className = 'btnbackHome';
  btnHome.textContent = 'Regresar al Home';
  homeDiv.appendChild(btnHome);

  btnHome.addEventListener('click', () => onNavigate('/'));

  btnregister.addEventListener('click', () => {
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
