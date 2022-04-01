
// Bouton Event
var tipChecked = document.getElementById("tip-container");

tipChecked.addEventListener('change', () =>{

    // Variables Calculs
        var bill = document.getElementById("bill-input").value;
        var nombrePerson = document.getElementById("number-input").value;

    // Variables Bouton Radio
        var five = document.getElementById("five");
        var ten = document.getElementById("ten");
        var fifteen = document.getElementById("fifteen");
        var twentyFive = document.getElementById("twentyfive");
        var fifty = document.getElementById("fifty");

    // Variables Bouton Custom
        var custom = document.getElementById("custom").value

    // Variables Pourcentage
        let pourcentage = ""

    // Variables Affichages
        var tipAmount = document.getElementById("tip-amount-result");
        var total = document.getElementById("total-result");

    // Variables Erreur
        var nombrePersonStyle= document.getElementById("number-input");
        var error = document.getElementById("error");
    // Fonctions
        function calculTotal(nbr1, nbr2, nbr3){
            nbr1 = bill;
            nbr2 = pourcentage
            nbr3 = nombrePerson;
            return nbr1*(nbr2 + 1) /nbr3;
        };

        function calculTip(nbr1, nbr2, nbr3){
            nbr1 = bill;
            nbr2 = pourcentage
            nbr3 = nombrePerson;
            return  nbr1*nbr2/nbr3;

        };

    // Règles 
        if(nombrePerson == "" || nombrePerson == 0){
            nombrePersonStyle.style.border = "2px solid hsl(11, 50%, 60%)"
            error.style.display = "flex"
            return false
         }
         if(five.checked){
            pourcentage = 0.05;
            total.innerHTML = calculTotal().toFixed(2);
            tipAmount.innerHTML = calculTip().toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        }
        if(ten.checked){
            pourcentage = 0.10;
            total.innerHTML = "$" + calculTotal().toFixed(2);
            tipAmount.innerHTML = "$" + calculTip().toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        }
        if(fifteen.checked){
            pourcentage = 0.15;
            total.innerHTML = "$" + calculTotal().toFixed(2);
            tipAmount.innerHTML = "$" + calculTip().toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        }
        if(twentyFive.checked){
            pourcentage = 0.25;
            total.innerHTML = "$" + calculTotal().toFixed(2);
            tipAmount.innerHTML = "$" + calculTip().toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        }
        if(fifty.checked){
            pourcentage = 0.50;
            total.innerHTML = "$" + calculTotal().toFixed(2);
            tipAmount.innerHTML = "$" + calculTip().toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        }
        if(!custom == 0){
            pourcentage = 0.50;
            total.innerHTML = "$" + (bill * ((custom/100) + 1) / nombrePerson).toFixed(2);
            tipAmount.innerHTML = "$" + (bill * (custom/100) / nombrePerson).toFixed(2);
            nombrePersonStyle.style.border = "0px solid hsl(11, 50%, 60%)"
            error.style.display = "none"
        };
        
})






