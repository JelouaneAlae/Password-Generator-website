function generatPass(){
    document.getElementById("txtresult").value= null;
    var lenght = document.getElementById("range").value;
    var Upper = false;
    var Symbol = false;
    var number =false;
    var password ="";
    var cpt  = 1;

    var lettre = "abcdefghijklmnopqrstuvwxyz";
    var lettre_Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var char_symbol = "!@#$%^&*()";
    var char_number = "0123456789";


    if(document.getElementById("checkboxUpper").checked){
        Upper = true;
        cpt ++;
    }

    if(document.getElementById("checkboxSymbol").checked){
        Symbol = true;
        cpt ++;
    }

    if(document.getElementById("checkboxNumber").checked){
        number = true;
        cpt ++;
    }


    for (var i = 0; i <lenght/cpt; i++) {

        var r0 = Math.floor(Math.random() *10);
        password += lettre[r0];

        if(Upper == true){
            var r = Math.floor(Math.random() *10);
            password += lettre_Upper[r];
        }

        if(Symbol == true){
            var rr = Math.floor(Math.random() *10);
            password += char_symbol[rr];
        }

        if(number == true){
            var rrr = Math.floor(Math.random() *10);
            password += char_number[rrr];
        }
    }

    document.getElementById("txtresult").value = password;
    // alert(cpt);
    // alert(lenght+"____"+password);
}



