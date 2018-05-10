
  $(document).ready(function(){
    $('.slider').slider();
    $('.sidenav').sidenav();

     // Initialize Firebase
     var config = {
      apiKey: "AIzaSyDdXkiM8c_LdEJVT6OeyEIfOQ2N7k0sjRU",
      authDomain: "seleccion-gmd.firebaseapp.com",
      databaseURL: "https://seleccion-gmd.firebaseio.com",
      projectId: "seleccion-gmd",
      storageBucket: "",
      messagingSenderId: "246386059278"
  };
  firebase.initializeApp(config);
  });