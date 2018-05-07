/*$(document).ready(function() {
  $imgUser = $('#img-profile');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let codeUser = user.uid;
      let nameUser = user.displayName;
      let photoUser = user.photoURL;
    }
    firebase.database().ref('usuarios/' + user.uid).set(dataUser);
  });
});
*/
