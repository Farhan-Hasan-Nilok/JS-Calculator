
(function(){
    
    let display = document.querySelector(".calculator-display");
    let buttons = document.querySelectorAll(".button");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".key-equal");

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            if(document.getElementById("display").innerText == '0'){
                display.innerText = value;
            }
            else{
            display.innerText += value;
            }
        })

        equal.addEventListener("click", function(e){
            if(display.innerText == "0"){
                display.innerText = "0"
            }

            else{
                let result = eval(display.innerText);
                display.innerText = result;
            }
        })

        clear.addEventListener("click", function(e){
            display.innerText = "0";
        })
    })
})();