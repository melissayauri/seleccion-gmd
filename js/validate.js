/*
$(document).ready(function(){
    $("#myForm").validate({
        debug: true,
        rules: {
            dni: {
                required: true,
                minlength: 2,
                maxlength: 15
                //lettersonly: true 
            },
            celular: {
                required: true,
                digits: true,
            }
        },
        messages: {
            dni: {
                required: "Nombre es obligatorio",
                //lettersonly: "solo letras" ,
            },
            celular: {
                digits: "solo numeros"
            }
        }
    });
    
    $('#enviar').click(function(event) {
        if($("#myForm").valid() ){
            alert('esta bien')
        }
        else{
            console.log('no esta bien')
        }
    });


});



*/

















/*function validate(){
    let $letter = $('#first, #apellidos');
    let $send= $('#enviar');
    function isLetter(){
        let letterPattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
        return letterPattern.test($letter.val());
        /*return prueba;
        console.log($letter.val());
    }

    function areAllValidationsPassing() {  
        return isLetter();
    }

    function formStateEvent() {
        $send.prop('disabled', !areAllValidationsPassing());
    }
    function redirectSight() {
        //event.preventDefault()
        //window.location.assign('completed.html');
        alert('todo esta habilitado')
      }

      $letter.focus();

    //$letter.focus(isLetter).on('keyup',isLetter ).on('keyup', formStateEvent);
      
    $letter.on('keyup',isLetter ).on('keyup', formStateEvent);
    $send.on('click',redirectSight);

    formStateEvent();
    
}

$(document).ready(validate);

*/





$(document).ready(function() {










    
   // let letter = "a[hreflang|='en']" 
  
    let dniPattern= "^([0-9]{7,7})*$";
    let phonePattern = /^9[\d]{7}$/;
    let namePattern = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,30}$";
    //let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";*/
     let letterPattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
    function checkInput(idInput, pattern) {
        return $(idInput).val().match(pattern) ? true : false;
    }
    
    function checkTextarea(idText) {
        return $(idText).val().length > 12 ? true : false;	
    }
    
    function checkRadioBox(nameRadioBox) {
      return $(nameRadioBox).is(":checked") ? true : false;
    }
    
    function checkSelect(idSelect) {
        return $(idSelect).val() ? true : false;
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
        $(idForm + " *").on("change keydown", function() {
            if (checkInput("#univ", namePattern) && checkInput("#city", namePattern)
             && checkInput("#career", namePattern) && checkInput("#empresa", namePattern)
            && checkInput("#ciudad", namePattern) /* && checkInput("#resum", namePattern)/*  && 
               checkInput("#celular",  phonePattern) /*&&
              checkInput("#dni",  dniPattern)*/
               /*&&*/ 
                /*checkInput("#first", namePattern )*/ /*&& 
          checkInput("#email", emailPattern) && 
                checkSelect("#edad") && 
                checkTextarea("#comentario") && 
                checkRadioBox("#legal") &&
        checkRadioBox("[name=boletin]")*/)
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
    
    $('#enviar').click(function(event) {
        event.preventDefault();
        alert('esta okey');
       //console.log('esta correcto')
    })
 
});
 