import { addPost, getPost } from '../firebase/firebase.js';

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
  // div contenedor formulario post
  const divPost = document.createElement('div');
  divPost.className = 'divPosts';
  homeDiv.appendChild(divPost);
  // form post
  const formPost = document.createElement('form');
  formPost.className = 'formPosts';
  divPost.appendChild(formPost);
  // text area posts
  const textAreaPost = document.createElement('textarea');
  textAreaPost.className = 'textAreaPosts';
  textAreaPost.rows = '5';
  textAreaPost.cols = '30';
  formPost.appendChild(textAreaPost);
  // boton publicar
  const btnShare = document.createElement('button');
  btnShare.className = 'btnShare';
  btnShare.textContent = 'Compartir';
  formPost.appendChild(btnShare);
  // div contenedor de posts
  const postsContainer = document.createElement('div');
  postsContainer.className = 'postsContainer';
  homeDiv.appendChild(postsContainer);

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      const postContent = doc.data();
      const createPost = document.createElement('div');
      createPost.className = 'createPost';
      createPost.textContent = postContent;
      postsContainer.appendChild(createPost);
      console.log(postContent);
    });
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const post = textAreaPost.value;
    addPost(post);
    formPost.reset();
  });

  btnClose.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
