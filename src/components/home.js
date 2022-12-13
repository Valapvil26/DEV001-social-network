export const Home = (onNavigate) => {
// div general
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  // titulo de la pagina
  const title = document.createElement('h1');
  title.textContent = 'Red Social';
  title.className = 'title';
  homeDiv.appendChild(title);
  // div contenedor para botones login y registro
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'divButtons';
  homeDiv.appendChild(buttonsDiv);
  // boton ir a login
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.className = 'buttonLogin';
  buttonsDiv.appendChild(buttonLogin);
  // boton ir a registro
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'buttonRegister';
  buttonsDiv.appendChild(buttonRegister);
  // texto o
  const option = document.createElement('h3');
  option.textContent = 'ó';
  option.className = 'option';
  homeDiv.appendChild(option);
  // div contenedor botones logearse con google o linkedIn
  const divGoogleLinked = document.createElement('div');
  divGoogleLinked.className = 'divGoogleLinked';
  homeDiv.appendChild(divGoogleLinked);
  // boton logearse con Google
  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btnGoogle';
  btnGoogle.textContent = 'Regístrate con Google';
  divGoogleLinked.appendChild(btnGoogle);
  // boton logearse con LinkedIN
  const btnLinked = document.createElement('button');
  btnLinked.className = 'btnLinkedIn';
  btnLinked.textContent = 'Regístrate con LinkedIn';
  divGoogleLinked.appendChild(btnLinked);

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  btnGoogle.addEventListener('click', () => {

  });

  return homeDiv;
};
