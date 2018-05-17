$(document).ready(function() {

    var namePattern = "^[a-z A-Z]{4,30}$";
    var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
    
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
        $(idForm + " button.submit").removeAttr("disabled");
        //window.location.href = 'view/prueba.html';
    }
    
    function disableSubmit (idForm) {
        $(idForm + " button.submit").attr("disabled", "disabled");
    }
    
    function checkForm (idForm) {
        $(idForm + " *").on("change keydown", function() {
            if (checkInput("#nombre", namePattern) && 
                checkInput("#apellidos", namePattern) && 
                checkInput("#first", namePattern) /*&& 
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
    
    $('button.submit').click(function(event) {
        alert('esta okey')
    })
        
    });