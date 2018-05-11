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
    let template = `<li class="cards-js"  id="${ref.cargo}">
                        <div class="collapsible-header indigo-text text-darken-4">
                            <i class="material-icons indigo-text text-darken-4">filter_drama</i>
                            ${ref.cargo}-${ref.ubicacion}
                            <span class="badge">Postular</span></div>
                        </div>
                        <div class="collapsible-body justify">
                            <span class="indigo-text text-darken-4 ">${ref.funciones}</span>
                        </div>
                    </li>`;
    $container.append(template);
  }
  /* Colocando el registro: gmail-linkedin */
  let $login = $('#login');
  $login.on('click', login);
  function login() {
    /* Incorporando el modal de registro */
    $containerModal = $('.register');
    console.log('efect');
    let modal = `<div id="register" class=" modal">
                  <div class=" modal-content center-align">
                    <h5 class="indigo-text text-darken-4">¡Gran decisión!</h5>
                    <p class="indigo-text text-darken-4">Ahora podrás acceder a todas las ofertas laborales</p>
                      <div class="col s3 ">
                        <img src="../assets/img/register.PNG" alt="">
                      </div>
                      <div class="col s9 ">
                        <p>dhddh</p>
                      </div>
                  </div>
                </div>`;
    $containerModal.append(modal);
    $('.modal').modal();
  };
});