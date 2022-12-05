export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDivLogin';
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // titulo usuario o email
  const userEmailTitle = document.createElement('h3');
  userEmailTitle.className = 'userEmailTilte';
  userEmailTitle.textContent = 'Correo Electronico';
  inputDiv.appendChild(userEmailTitle);
  // input usuario
  const inputMail = document.createElement('input');
  inputMail.className = 'inputMail';
  inputMail.textContent = 'Correo Electronico o Nombre de Usuario';
  inputDiv.appendChild(inputMail);
  // titulo password
  const passwordTitle = document.createElement('h3');
  passwordTitle.className = 'passwordTilte';
  passwordTitle.textContent = 'Contraseña';
  inputDiv.appendChild(passwordTitle);
  // input contraseña
  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputPassword';
  inputPassword.textContent = 'Contraseña';
  inputDiv.appendChild(inputPassword);
  // div contenedor de botones ir al registro o logearse
  const divSignUpLogin = document.createElement('div');
  divSignUpLogin.className = 'divSingUpLogin';
  homeDiv.appendChild(divSignUpLogin);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.textContent = 'Inicia Sesión';
  divSignUpLogin.appendChild(btnLogin);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  divSignUpLogin.appendChild(btnSignUp);

  btnSignUp.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;
};
