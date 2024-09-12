import { signInGoogle } from '../firebase/firebase.js';

export const Home = (onNavigate) => {
// div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  // titulo de la pagina
  const imageLogo = document.createElement('img');
  imageLogo.className = 'imageLogo';
  imageLogo.src = 'https://i.postimg.cc/ZRrKhmZQ/logo.png';
  homeDiv.appendChild(imageLogo);
  // div contenedor para botones login y registro
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'divButtons';
  homeDiv.appendChild(buttonsDiv);
  // boton ir a login
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.textContent = 'Inicia Sesión';
  buttonsDiv.appendChild(buttonLogin);
  // boton ir a registro
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonRegister';
  buttonRegister.textContent = 'Registrate';
  buttonsDiv.appendChild(buttonRegister);
  // texto o
  const option = document.createElement('h3');
  option.className = 'option';
  option.textContent = '------------------ ó ------------------';
  homeDiv.appendChild(option);
  // div contenedor botones logearse con google
  const divGoogle = document.createElement('div');
  divGoogle.className = 'divGoogle';
  homeDiv.appendChild(divGoogle);
  // boton logearse con Google
  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btnGoogle';
  divGoogle.appendChild(btnGoogle);
  const iconGoogle = document.createElement('i');
  iconGoogle.className = 'fa-brands fa-google';
  btnGoogle.appendChild(iconGoogle);

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  btnGoogle.addEventListener('click', () => {
    signInGoogle()
      .then(() => {
        onNavigate('/wall');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });

  return homeDiv;
};
