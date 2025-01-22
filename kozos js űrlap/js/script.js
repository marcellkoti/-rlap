function beolvas() {    
    if (knev) {
        document.getElementById("eredmeny").innerHTML = "Kedves <b>" + knev + " </b>a regisztráció sikeres!";
    document.getElementById("successform").style.display = "block";
    document.getElementById("myform").style.display = "none";
    }else{
        document.getElementById("kernev").style.border = "2px solid red";
        document.getElementById("veznev").style.border = "2px solid red";
        alert("A mező kitöltése KÖTELEZŐ!");
    }

    
    
}

function teszt(){
    var knev = document.getElementsByName("knev")[0].value;
    var vnev = document.getElementsByName("vnev")[0].value;
    var p1 = document.getElementsByName("p1")[0].value;    
    var p2 = document.getElementsByName("p2")[0].value;
    var mail = document.getElementsByName("mail")[0].value;

    if (!knev || !vnev || !p1 || !p2 || !mail) {
        //alert("Nem lehet üres mező!");
        var tomb = ["knev","vnev","p1","p2","mail"];
        for (let index = 0; index < tomb.length; index++) {
            if (!document.getElementsByName(tomb[index])[0].value) {
                document.getElementsByName(tomb[index])[0].style.border = "2px solid red";
            }else{
                document.getElementsByName(tomb[index])[0].style.border = "2px solid lightgreen";

            }
        }
    }
    
    if(p1 !== p2 || !p1){
        alert("A beírt jelszavak nem egyeznek");
    }else{
        document.getElementById("eredmeny").innerHTML="KÉSZ";
    }

}




