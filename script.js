
let clrValue = document.getElementById("clr-value");
let elem;

window.addEventListener("load", function(){
    let pColor = randomColor();
    let h_bg = document.querySelector(".heading");
    h_bg.style.backgroundColor = randomColor();
    
    elem = Math.floor(Math.random()*6 + 1); // (max-min) + min
    console.log(elem);

    clrValue.innerHTML = pColor;
    for(let i=1;i<=6;i++){
        let sel =document.getElementById(i);
        if(i==elem){
            sel.style.backgroundColor = pColor;
        }
        else{
            sel.style.backgroundColor = randomColor();
        }
    }
});

function randomColor(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);

    return `RGB(${x},${y},${z})`;
}

function check(userChoice){
    userChoiceId = userChoice.id;
    if(userChoiceId==elem){
        clrValue.innerHTML = "CORRECT";
    }
    else{
        let wrng = document.getElementById(userChoiceId);
        wrng.style.cssText = "opacity: 0;transition: .4s ease-in-out";
    }
}