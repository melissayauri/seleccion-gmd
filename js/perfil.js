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
      /*usuario */
      console.log(user)
      let objectUsers = {
        uid: user.uid,
        name: user.displayName,
        mail: user.email,
        photo: user.photoURL
      }
      let photo = ` <img src="${objectUsers.photo}" alt="" class="img-profile">`;
      /*Creando la rama usuarios en firebase */
      var firebasePostREsfName = firebase.database().ref('usuarios').child(objectUsers.uid);
      /* incorporando datos en la rama según el usuario que ingrese */
      firebasePostREsfName.set(objectUsers);
      /*Incorporando */
      $('#root').append(photo);
    }
    });
});