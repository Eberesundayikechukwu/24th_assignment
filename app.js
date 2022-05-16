var result = document.querySelector(".results");
    var buttons = document.querySelectorAll("button");

    buttons.forEach(key =>{
        key.addEventListener("click", calculator);
    }); 

    function calculator(){
        var keypad = this.innerText;
        if(keypad === "C"){
        result.innerText = ""; 
        return;
        }

    if(keypad === "Del"){
        result.textContent = result.textContent.slice(0,-1);
        return;
    }
    if(keypad === "="){
    result.innerText = eval(result.innerText);
    }
    else{
        result.textContent += keypad;
        return;
    }

    }