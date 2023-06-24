    function Corpo() {
        let soma = document.querySelector("#mais");
        let sub = document.querySelector("#sub");
        let multi = document.querySelector("#multi");
        let divisao = document.querySelector("#divisao");
        let igual = document.querySelector("#igual");
        let resultadovalue = document.querySelector("#resultadovalue"); 
    

        let value =         
        function resultado() {
        resultadovalue.innerHTML = "<p>=10</p>";
        }
    
        igual.addEventListener("click", resultado);
    }
    
    Corpo()