$(document).ready(function() {
  /* variable para el buscador*/
  let $searchInput = $('#search');
  /* validando el ingreso del buscador */
  $($searchInput).on('keyup', function() {
    let name = $(this).val().toLowerCase(); 
    console.log($(this).val());
    $('.cards-js').hide();
    $('.cards-js').each(function() {
      if ($(this).attr('id').toLowerCase().indexOf(name) !== -1) {
        $(this).show();
      }
    }); 
  });
  /* Colocando la data de los trabajos */
  var $container = $('.container-js');
  console.log($container);
  console.log(DATA);
  for (let i = 0; i < DATA.length; i++) {
    $('.collapsible').collapsible();
    let ref = DATA[i];
    console.log(ref);
    /* Creando los bloques con información de trabajo */
    let template = `<li class="cards-js "  id="${ref.cargo}">
                        <div class="collapsible-header indigo-text text-darken-4 ">
                            <i class="material-icons indigo-text text-darken-4">filter_drama</i>
                            ${ref.cargo}-${ref.ubicacion}
                           
                        </div>
                        <div class="collapsible-body justify">
                            <span class="indigo-text text-darken-4 ">${ref.funciones}</span>
                        </div>
                        <span class="badge btn-badge  blue  white-text btn-post" id="' +[i] + '">Postular</span>
                    </li>`;
    $container.append(template);
  }
  /* let btns = `<span class="badge btn-badge  blue  white-text btn-post" id="post">Postular</span>`;
    let containerPost = $('.post')
    containerPost.append(btns);*/
  let $postular = $('.btn-post');
  $postular.on('click', postular);
  function postular() {
    if ($(this).attr('id')) {
      //$( "#list" ).removeClass( "collapsible" )
      alert('hola');
    }
    else{
      $( "#list" ).addClass( "collapsible" )
    }
    /* $( "#list" ).removeClass( "collapsible" )
      var topics = $(this).attr('id');
      console.log( $(this).attr('id'))
      alert('hola')*/
  }
 
  /* let $log = $('#post');
    $log.on('click', logins);
    function logins() {
      alert('gdgdg')
    }*/
 
  /* Colocando el registro: gmail-linkedin */
  let $login = $('#login');
  $login.on('click', login);
  function login() {
    /* Incorporando el modal de registro */
    $containerModal = $('.register');
    console.log('efect');
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
    $('.modal').modal();
    /* Inicio de sesión con Gmail */
    let $loginGoogle = $('#login-gmail');
    $loginGoogle.on('click', googleLogin);
    function googleLogin() {
      console.log('btn-gmail');
      /* incorporando la autenticación por gmail */
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        let user = result.user;
        console.log(user);
        saveData(result.user);
        window.location.assign('../views/profile.html');
      });
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
        var images = ` <img src="${users.photo}" alt="" class="img-profile">`;
        $('#root').append(names);
        $('#img-profile').append(images);
      });
    }
  };
});