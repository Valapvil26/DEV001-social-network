export const register = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al Registro';

  // boton regresar al home
  const btnHome = document.createElement('button');
  btnHome.textContent = 'Regresar al Home';
  homeDiv.appendChild(btnHome);

  btnHome.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
