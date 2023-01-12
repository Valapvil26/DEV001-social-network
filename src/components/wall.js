import {
  auth, addPost, onGetPost, deletePost, getPost, updatePost, logOut,
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
  const wallTitle = document.createElement('h2');
  wallTitle.className = 'wallTitle';
  wallTitle.textContent = 'Creciendo Juntos';
  homeDiv.appendChild(wallTitle);
  // toastr alert error en muro
  const divtoastr = document.createElement('div');
  divtoastr.className = 'toastr';
  homeDiv.appendChild(divtoastr);
  // contenido toastr alert
  const toastrContent = document.createElement('span');
  toastrContent.className = 'toastrcontent';
  toastrContent.textContent = 'Publicación vacia';
  divtoastr.appendChild(toastrContent);
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
  textAreaPost.cols = '25';
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

  const closeToastr = () => {
    setTimeout(() => {
      toastrContent.style.display = 'none';
    }, 4500);
  };
  const openToastr = (message) => {
    toastrContent.style.display = 'block';
    toastrContent.innerText = message;
    closeToastr();
  };

  let editStatus = false;
  let id = '';
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const userId = user.uid;
    const userName = user.displayName;
    const post = textAreaPost.value;
    const date = new Date().toLocaleString();
    if (post !== '' && !editStatus) {
      await addPost(post, userId, userName, date);
      formPost.reset();
    } else if (editStatus === true) {
      updatePost(id, {
        post,
      });
      editStatus = false;
      formPost.reset();
      btnShare.innerHTML = 'Compartir';
    } else {
      openToastr('Publicación vacia');
      formPost.reset();
    }
    formPost.reset();
  });
  onGetPost((querySnapshot) => {
    let html = '';
    wallTitle.innerHTML = `<h2 class= 'wallTitle'>${auth.currentUser.displayName}</h2>`;
    querySnapshot.forEach((doc) => {
      const postContent = doc.data();
      const user = auth.currentUser;
      if (postContent.userId === user.uid) {
        html += `
        <div class= 'createPost'>
          <div class= 'userAndDateContainer'>
            <h3 class= 'userNamePost'>${postContent.userName}</h3>
            <p class= 'date'>${postContent.date}</p>
          </div>
          <p class= 'postText'>${postContent.post}</p>
          <p class= 'likes'>Me gusta</p>
          <div class= 'divContainerbtns'>
            <button class= 'btnDelete' data-id='${doc.id}'>Eliminar</button>
            <button class= 'btnEdit' data-id='${doc.id}'>Editar</button>
          </div>
        </div>
        `;
      } else {
        html += `
        <div class= 'createPost'>
          <div class= 'userAndDateContainer'>
             <h3 class= 'userNamePost'>${postContent.userName}</h3>
             <p class= 'date'>${postContent.date}</p>
          </div>
          <p class= 'postText'>${postContent.post}</p>
          <p class= 'likes'>Me gusta</p>
          <div class= 'divContainerbtns'>
             <button class= 'btnLike' data-id='${doc.id}'>Me Gusta</button>
          </div>
        </div>
        `;
      }
      postsContainer.innerHTML = html;
    });

    const btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', async () => {
        // eslint-disable-next-line no-restricted-globals, no-alert
        const confirmDelete = confirm('¿Quieres eliminar esta publicación?');
        if (confirmDelete === true) {
          await deletePost(btn.dataset.id);
        }
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
    const btnLike = document.querySelectorAll('.btnLike');
    btnLike.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const doc = await getPost(btn.dataset.id);
        const postContent = doc.data();
        id = doc.id;
        console.log(postContent);
      });
    });
  });

  btnClose.addEventListener('click', async () => {
    formPost.reset();
    await logOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  });

  return homeDiv;
};
