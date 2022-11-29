/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al Registro';
  const btnLogin = document.createElement('button');

  btnLogin.textContent = 'Regresar al Login';

  homeDiv.appendChild(btnLogin);

  return homeDiv;
};
