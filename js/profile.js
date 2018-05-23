$(document).ready(function() {
  /*Inicialización firebase */
 var config = {
    apiKey: "AIzaSyDdXkiM8c_LdEJVT6OeyEIfOQ2N7k0sjRU",
    authDomain: "seleccion-gmd.firebaseapp.com",
    databaseURL: "https://seleccion-gmd.firebaseio.com",
    projectId: "seleccion-gmd",
    storageBucket: "seleccion-gmd.appspot.com",
    messagingSenderId: "246386059278"
  };
  firebase.initializeApp(config);

  /*Sección para registarse */
  let $buttonRegister = $('#registers');
  $buttonRegister.on('click', register);
  function register() {
    /*variable del contenedor del modal */
    $containerModal = $('.register');
    /*variable del modal */
    let modal = `<div id="register" class=" modal white">
                  <div class=" modal-content center-align">
                    <h5 class="indigo-text text-darken-4">¡Gran decisión!</h5>
                    <p class="indigo-text text-darken-4">Ahora podrás acceder a todas las ofertas laborales</p>
                    <div class="row margin-btn">
                      <div class="col s3 m2 offset-m3">
                        <img src="../assets/img/register.PNG" alt="">
                      </div>
                      <div class="col s7 offset-s2 m5">
                      <a class="waves-effect waves-light btn red gmail" id="login-gmail"><i class="fab fa-google-plus-g white-text"></i>Ingresa con Google</a>
                      </div>
                      </div>
                  </div>
                </div>`;
    $containerModal.append(modal);
    /*Inicialización del modal */
    $('.modal').modal();

    // autenticando al usuario con google
    
    /*Iniciar sesión con Gmail */
    let $loginGoogle = $('#login-gmail');
    $loginGoogle.on('click', googleLogin);
    function googleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      });
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in
        // var name = $('#inputName').val();
        // localStorage.setItem('userName', name);
        window.location.href = '../views/profile.html';
        //console.log('usuario logeado');
      } else {
        console.log('usuario no logeado');
      }
    });
  }
  });






