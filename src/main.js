import { Home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { Wall } from './components/wall.js';

const rootDiv = document.getElementById('root');

let routes = {};
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]);
};
routes = {
  '/': Home(onNavigate),
  '/login': login(onNavigate),
  '/register': register(onNavigate),
  '/wall': Wall(onNavigate),
};

const component = () => routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
