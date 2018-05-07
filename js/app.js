$(document).ready(function() {
  let $loginGoogle = $('#login-gmail');
  $loginGoogle.on('click', googleLogin);
  function googleLogin() {
    /* incorporando la autenticación por gmail */
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      let user = result.user;
      console.log(user);
      saveData(result.user);
      window.location.assign('../views/profile.html');
    });
  }

  const saveData = (user) =>{
    let users = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    };
    firebase.database().ref('usuarios/' + user.uid).set(users);

  };

  firebase.database().ref('usuarios').on('child_added', function(userInfo) {
    var users = userInfo.val();
    var names = `<div>${users.name}</div>`;
    var images = ` <img src="${users.photo}" alt="" class="img-profile">`
    $('#root').append(names);
    $('#img-profile').append(images);
  });
});

 
/* Incorporando iniciar sesión con Gmail 
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login-gmail').on('click', function() {
    alert('hola');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      var user = result.user;
      console.log(user);
      
    });
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      // var name = $('#inputName').val();
      // localStorage.setItem('userName', name);
      window.location.href = '../views/profile.html';
    } else {
      console.log('usuario no logeado');
    }
  });*/
