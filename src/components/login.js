/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const login = () => {
  const homeDiv = document.createElement('div');
  const btnSignUp = document.createElement('button');
  homeDiv.className = 'divHome';
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btnGoogle';
  const btnLinked = document.createElement('button');
  btnLinked.className = 'btnLinkedIn';
  const inputMail = document.createElement('input');
  inputMail.className = 'inputMail';
  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputPassword';
  btnSignUp.className = 'btnSingUp';

  btnSignUp.textContent = 'Regístrate';
  btnGoogle.textContent = 'Regístrate con Google';
  btnLinked.textContent = 'Regístrate con LinkedIn';
  inputMail.textContent = 'Correo Electronico o Nombre de Usuario';
  inputPassword.textContent = 'Contraseña';
  btnLogin.textContent = 'Inicia Sesión';

  homeDiv.appendChild(btnLogin);
  homeDiv.appendChild(btnGoogle);
  homeDiv.appendChild(btnLinked);
  homeDiv.appendChild(inputMail);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(btnSignUp);

  return homeDiv;
};
