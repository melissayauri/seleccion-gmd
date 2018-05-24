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
    

      /*validando el formulario */

    //let namePattern = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$";
    //let namePattern = "^[a-z[:space:]]*$";
    /*
    let namePattern ="^[a-zA-Z ]+$";
    function checkInput(idInput, pattern) {
      return $(idInput).val().match(pattern) ? true : false;
  }
    function enableSubmit (idForm) {
        $(idForm + " #enviar").removeAttr("disabled");
       
        //window.location.href = 'view/prueba.html';
    }
    
    function disableSubmit (idForm) {
        $(idForm + " #enviar").attr("disabled", "disabled");
        
    }
  
    function checkForm (idForm) {
        //let $letter = $('#univ, #city');
        $(idForm + " *").on(" keydown keyup", function() {
            if (checkInput("#univ", namePattern))
            {
                enableSubmit(idForm);
                
            } else {
                disableSubmit(idForm);
            }
        });
        
    }
    
    
    $(function() {
        checkForm("#contacto");
    });
    







*/





      /*enviando el formulario a firebase */
      $('#enviar').on('click', function(event) {
        event.preventDefault();
        let objectFormul = {
          universidad: $('#univ').val()
        }
      //let universidad = $('#univ').val();
      var firebaseFormul = firebase.database().ref('usuarios').child(objectUsers.uid);
      /*rama para el formulario */
      firebaseFormul.child('formulario').set(objectFormul);
      window.location.href = '../views/prueba.html';
      })
      /*termina el if */
    }






    });
});