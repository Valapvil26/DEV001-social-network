import { singUp } from '../firebase/firebaseconfig.js';

export const register = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivRegister';
  // imagen logo de registro
  const imageLogo2 = document.createElement('img');
  imageLogo2.className = 'imageLogo2';
  imageLogo2.src = './img/logo_1.png';
  homeDiv.appendChild(imageLogo2);
  // div contenedor formulario de registro
  const divInput = document.createElement('div');
  divInput.className = 'divInputRegister';
  homeDiv.appendChild(divInput);
  // input nombre de usuario
  const userName = document.createElement('input');
  userName.className = 'inputAddUserName';
  userName.placeholder = 'Nombre Usuario';
  divInput.appendChild(userName);
  // input correo
  const email = document.createElement('input');
  email.className = 'inputAddMail';
  // email.type = 'email';
  email.placeholder = 'Correo Electónico';
  divInput.appendChild(email);
  // input contraseña
  const password = document.createElement('input');
  password.className = 'inputAddPassword';
  // password.type = 'password';
  password.placeholder = 'Contraseña';
  divInput.appendChild(password);
  // input confirmar contraseña
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.className = 'inputConfirmPassword';
  // inputConfirmPassword.type = 'password';
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
  const option1 = document.createElement('h3');
  option1.className = 'option1';
  option1.textContent = '------------------ ó ------------------';
  homeDiv.appendChild(option1);
  // div contenedor botones logearse con google register
  const divGoogle1 = document.createElement('div');
  divGoogle1.className = 'divGoogle1';
  homeDiv.appendChild(divGoogle1);
  // boton logearse con Google1
  const btnGoogle1 = document.createElement('button');
  btnGoogle1.className = 'btnGoogle1';
  divGoogle1.appendChild(btnGoogle1);
  const iconGoogle1 = document.createElement('i');
  iconGoogle1.className = 'fa-brands fa-google';
  btnGoogle1.appendChild(iconGoogle1);

  btnHome.addEventListener('click', () => onNavigate('/'));
  btnGoogle1.addEventListener('click', () => {});

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
