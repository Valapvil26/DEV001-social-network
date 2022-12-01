export const login = (onNavigate) => {
// div cuerpo login
  const homeDiv = document.createElement('div');
  homeDiv.className = 'divHome';
  // input usuario
  const inputMail = document.createElement('input');
  inputMail.className = 'inputMail';
  inputMail.textContent = 'Correo Electronico o Nombre de Usuario';
  homeDiv.appendChild(inputMail);
  // input contraseña
  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputPassword';
  inputPassword.textContent = 'Contraseña';
  homeDiv.appendChild(inputPassword);
  // boton ir al registro
  const btnSignUp = document.createElement('button');
  btnSignUp.className = 'btnSingUp';
  btnSignUp.textContent = 'Regístrate';
  homeDiv.appendChild(btnSignUp);
  // boton logearse
  const btnLogin = document.createElement('button');
  btnLogin.className = 'btnLogin';
  btnLogin.textContent = 'Inicia Sesión';
  homeDiv.appendChild(btnLogin);
  // boton logearse con Google
  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btnGoogle';
  btnGoogle.textContent = 'Regístrate con Google';
  homeDiv.appendChild(btnGoogle);
  // boton logearse con LinkedIN
  const btnLinked = document.createElement('button');
  btnLinked.className = 'btnLinkedIn';
  btnLinked.textContent = 'Regístrate con LinkedIn';
  homeDiv.appendChild(btnLinked);

  btnSignUp.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;
};
