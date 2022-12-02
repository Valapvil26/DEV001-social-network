export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'divHome';
  // div contenedor de inputs
  const inputDiv = document.createElement('div');
  inputDiv.className = 'divInputs';
  homeDiv.appendChild(inputDiv);
  // input usuario
  const inputMail = document.createElement('input');
  inputMail.className = 'inputMail';
  inputMail.textContent = 'Correo Electronico o Nombre de Usuario';
  inputDiv.appendChild(inputMail);
  // input contraseña
  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputPassword';
  inputPassword.textContent = 'Contraseña';
  inputDiv.appendChild(inputPassword);
  // div contenedor de botones ir al registro o logearse
  const divSignUpLogin = document.createElement('div');
  divSignUpLogin.className = 'divSingUpLogin';
  homeDiv.appendChild(divSignUpLogin);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  divSignUpLogin.appendChild(btnSignUp);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.textContent = 'Inicia Sesión';
  divSignUpLogin.appendChild(btnLogin);

  btnSignUp.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;
};
