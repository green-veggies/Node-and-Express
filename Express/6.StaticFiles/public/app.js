var button = document.getElementById("button");
var blackOut=false;
button.addEventListener("click", () =>{
    if(blackOut){document.body.style.backgroundColor = "";}
    else{document.body.style.backgroundColor = "grey";}
    blackOut=!blackOut;
    
});