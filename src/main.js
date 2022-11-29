/* eslint-disable import/no-cycle */
import { login } from './components/login.js';
import { register } from './components/register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/login': login,
  '/register': register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component);

// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
