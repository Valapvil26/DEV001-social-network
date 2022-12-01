export const Home = (onNavigate) => {
// div general
  const homeDiv = document.createElement('div');
  // boton ir a registro
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  homeDiv.appendChild(buttonRegister);
  // boton ir a login
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';
  homeDiv.appendChild(buttonLogin);

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  return homeDiv;
};
