let check = document.querySelector("#ctSalida"),
    styleIconPower = document.querySelector("#icon2");
 
 check.addEventListener('change', function(){
            styleIconPower.style.color = this.checked ? "#228B22" : "#A9A9A9";  
            styleIconPower.style.textShadow = 
                this.checked ? "1px 1px 5px #6dff6d, 0 0 1em #6dff6d, 0 0 0.2em #6dff6d" : "";
            
});