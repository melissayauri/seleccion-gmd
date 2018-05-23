$(document).ready(function(){
/*incializando */
var config = {
    apiKey: "AIzaSyDdXkiM8c_LdEJVT6OeyEIfOQ2N7k0sjRU",
    authDomain: "seleccion-gmd.firebaseapp.com",
    databaseURL: "https://seleccion-gmd.firebaseio.com",
    projectId: "seleccion-gmd",
    storageBucket: "seleccion-gmd.appspot.com",
    messagingSenderId: "246386059278"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      console.log(email)
      var userCode = user.uid;
      $('#user-email-desktop').text(email);
    }
    });
});