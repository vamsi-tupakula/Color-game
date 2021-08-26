
let clrValue = document.getElementById("clr-value");

window.addEventListener("load", function(){
    let pColor = randomColor();
    let elem = Math.floor(Math.random()*7);
    
    
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