import {
  addPost, onGetPost, deletePost, getPost, updatePost,
} from '../firebase/firebase.js';

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
  textAreaPost.placeholder = 'Comparte aqui...';
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
  let editStatus = false;
  let id = '';
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = textAreaPost.value;
    if (!editStatus) {
      await addPost(post);
    } else {
      updatePost(id, {
        post,
      });
      editStatus = false;
    }
    formPost.reset();
  });
  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const postContent = doc.data();
      html += `
        <div class= 'createPost'>
           <p>${postContent.post}</p>
            <div class= 'divContainer'>
              <button class= 'btnDelete' data-id='${doc.id}'>Delete</button>
              <button class= 'btnEdit' data-id='${doc.id}'>Edit</button>
            </div>
        </div>
        `;
      postsContainer.innerHTML = html;
    });
    const btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', async () => {
        await deletePost(btn.dataset.id);
      });
    });
    const btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const doc = await getPost(btn.dataset.id);
        const postContent = doc.data().post;
        textAreaPost.value = postContent;
        editStatus = true;
        id = doc.id;

        btnShare.innerHTML = 'Actualizar';
      });
    });
  });

  btnClose.addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
