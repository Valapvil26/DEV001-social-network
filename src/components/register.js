import { signUp, updateName } from '../firebase/firebase.js';

export const register = (onNavigate) => {
  // div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivRegister';
  // imagen logo de registro
  const imageLogo2 = document.createElement('img');
  imageLogo2.className = 'imageLogo2';
  imageLogo2.src = 'https://i.postimg.cc/kG0cRWLG/logo-1.png';
  homeDiv.appendChild(imageLogo2);
  // toastr alert error en registro
  const divtoastr = document.createElement('div');
  divtoastr.className = 'toastr';
  homeDiv.appendChild(divtoastr);
  // contenido toastr alert
  const toastrContent = document.createElement('span');
  toastrContent.className = 'toastrcontent';
  toastrContent.textContent = 'Contraseña Incorrecta';
  divtoastr.appendChild(toastrContent);
  // div contenedor formulario de registro
  const divInput = document.createElement('div');
  divInput.className = 'divInputRegister';
  homeDiv.appendChild(divInput);
  // formulario de registro
  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';
  divInput.appendChild(formRegister);
  // input nombre de usuario
  const labelUserName = document.createElement('label');
  labelUserName.setAttribute = ('for', 'userName');
  labelUserName.className = 'labelUser';
  labelUserName.textContent = 'Nombre de Usuario';
  formRegister.appendChild(labelUserName);
  const userName = document.createElement('input');
  userName.className = 'inputAddUserName';
  userName.placeholder = 'Nombre Usuario';
  formRegister.appendChild(userName);
  // input correo
  const labelAddMail = document.createElement('label');
  labelAddMail.setAttribute = ('for', 'email');
  labelAddMail.className = 'labelEmail';
  labelAddMail.textContent = 'Correo Electrónico';
  formRegister.appendChild(labelAddMail);
  const email = document.createElement('input');
  email.className = 'inputAddMail';
  email.type = 'email';
  email.placeholder = 'Correo Electrónico';
  formRegister.appendChild(email);
  // input contraseña
  const labelAddPasword = document.createElement('label');
  labelAddPasword.setAttribute = ('for', 'password');
  labelAddPasword.className = 'labelPasword';
  labelAddPasword.textContent = 'Contraseña';
  formRegister.appendChild(labelAddPasword);
  const password = document.createElement('input');
  password.className = 'inputAddPassword';
  password.type = 'password';
  password.placeholder = 'Contraseña';
  formRegister.appendChild(password);
  // input confirmar contraseña
  const labelConfirmPasword = document.createElement('label');
  labelConfirmPasword.setAttribute = ('for', 'inputConfirmPassword');
  labelConfirmPasword.className = 'labelConfirmPasword';
  labelConfirmPasword.textContent = 'Confirmar Contraseña';
  formRegister.appendChild(labelConfirmPasword);
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.className = 'inputConfirmPassword';
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirmar Contraseña';
  formRegister.appendChild(inputConfirmPassword);
  // boton registrarme
  const btnregister = document.createElement('button');
  btnregister.type = 'submit';
  btnregister.className = 'btnRegisterMe';
  btnregister.textContent = 'Registrarme';
  formRegister.appendChild(btnregister);
  // boton regresar al home
  const btnHome = document.createElement('button');
  btnHome.className = 'btnbackHome';
  btnHome.textContent = 'Regresar al Home';
  homeDiv.appendChild(btnHome);

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

  btnHome.addEventListener('click', () => onNavigate('/'));
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    signUp(email.value, password.value)
      .then(() => {
        updateName(userName.value);
        formRegister.reset();
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          openToastr('Correo ya registrado');
        } else if (errorCode === 'auth/invalid-email') {
          openToastr('Correo no valido');
        } else if (errorCode === 'auth/weak-password') {
          openToastr('La contraseña debe tener minimo 6 caracteres');
        } else {
          openToastr(errorMessage);
        }
      });
  });

  return homeDiv;
};
