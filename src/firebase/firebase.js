import { singIn } from './firebaseconfig.js';

singIn(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error en singin', errorCode, errorMessage);
  });
