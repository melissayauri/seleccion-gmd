$(document).ready(function() {
  /* variable para el buscador*/
  let $searchInput = $('#search');
  /* validando el ingreso del buscador */
  $($searchInput).on('keyup', function() {
    var name = $(this).val().toLowerCase(); 
    console.log($(this).val());
    $('.cards-js').hide();
    $('.cards-js').each(function() {
      if ($(this).attr('id').toLowerCase().indexOf(name) !== -1) {
        $(this).show();
      }
    }); 
  });
  var $container = $('.container-js');
  console.log($container);
  console.log(DATA);
  for (var i = 0; i < DATA.length; i++) {
    $('.collapsible').collapsible();
    var ref = DATA[i];
    console.log(ref.cargo)
    var template = `<li class="cards-js"  id="${ref.cargo}">
                        <div class="collapsible-header indigo-text text-darken-4">
                            <i class="material-icons indigo-text text-darken-4">filter_drama</i>
                        <p >${ref.cargo}</p>
                        </div>
                        <div class="collapsible-body"><span class="indigo-text text-darken-4">Lorem ipsum dolor sit amet.</span></div>
                    </li>`;
    $container.append(template);
  }
});