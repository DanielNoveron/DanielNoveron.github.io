let check = document.querySelector("#ctSondea"),
    styleIconPower = document.querySelector("#icon2"),
    salida = document.getElementById("ctSalida");
 
 check.addEventListener('change', function(){
            styleIconPower.innerHTML = this.checked ? "toggle_on" : "toggle_off";

            if(this.checked){
                styleIconPower.style.color = "#0000FF";
            }else{
                styleIconPower.style.color = "#C0C0C0";
            }
            
});


salida.addEventListener('change', function(){
    if(salida.value === 1){
        alert("ddddd");
    }
})