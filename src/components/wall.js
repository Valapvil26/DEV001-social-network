export const Wall = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivWall';
  // boton regresar al home
  const btnClose = document.createElement('button');
  btnClose.className = 'btnCloseSesion';
  btnClose.textContent = 'Cerrar Sesión';
  homeDiv.appendChild(btnClose);
  // titulo del muro
  const wallTitle = document.createElement('h1');
  wallTitle.className = 'wallTitle';
  wallTitle.textContent = 'Creciendo Juntos';
  homeDiv.appendChild(wallTitle);
  // div contenedor formulario posts
  const divPosts = document.createElement('div');
  divPosts.className = 'divPosts';
  homeDiv.appendChild(divPosts);
  // form posts
  const formPosts = document.createElement('form');
  formPosts.className = 'formPosts';
  divPosts.appendChild(formPosts);
  // text area posts
  const textAreaPosts = document.createElement('textarea');
  textAreaPosts.className = 'textAreaPosts';
  textAreaPosts.rows = '5';
  textAreaPosts.cols = '30';
  formPosts.appendChild(textAreaPosts);
  // boton publicar
  const btnShare = document.createElement('button');
  btnShare.className = 'btnShare';
  btnShare.textContent = 'Compartir';
  formPosts.appendChild(btnShare);

  btnClose.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
