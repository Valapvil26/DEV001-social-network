export const Wall = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivWall';
  // titulo registro
  const wallTitle = document.createElement('h2');
  wallTitle.className = 'wallTitle';
  wallTitle.textContent = 'Bienvenido al Muro';
  homeDiv.appendChild(wallTitle);
  // boton regresar al home
  const btnClose = document.createElement('button');
  btnClose.className = 'btnCloseSesion';
  btnClose.textContent = 'Cerrar Sesión';
  homeDiv.appendChild(btnClose);

  btnClose.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
