$(document).ready(function() {
  /* vista splash por 4 segundos*/
 
  /* Incorporando iniciar sesión con Gmail */
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login-gmail').on('click', function() {
    alert('hola');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    });
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      // var name = $('#inputName').val();
      // localStorage.setItem('userName', name);
      window.location.href = '../views/profile.html';
    } else {
      console.log('usuario no logeado');
    }
  });

});
  