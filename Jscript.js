function generatPass(){
    document.getElementById("txtresult").value= null;
    var lenght = document.getElementById("range").value;
    var Upper = false;
    var Symbol = false;
    var number =false;
    var lettre = "abcdefghijklmnopqrstuvwxyz";
    var password = ""; 
    if(document.getElementById("checkboxUpper").checked){
        Upper = true;
    }
    if(document.getElementById("checkboxSymbol").checked){
        Symbol = true;
    }
    if(document.getElementById("checkboxNumber").checked){
        number = true;
    }
    if(Upper == true){
         lettre += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(Symbol == true){
        lettre +="!@#$%^&*()";
    }
    if(Symbol == true){
        lettre +="0123456789";
    }

    // for (var i =0 ; i < range;i++  ){
    //     randomNumber= Math.floor(Math.random* lettre) ;
    //     password += chars.substring(randomNumber, randomNumber +1);
    // }
    // document.getElementById("txtresult").value = password;

    password = Math.floor(Math.random());
    document.getElementById("txtresult").value=password;
    debugger
}



