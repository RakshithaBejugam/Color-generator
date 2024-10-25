let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let  generatedColor = randomColor();
    h3.innerText = generatedColor;
    let div=document.querySelector("div");
    div.style.backgroundColor=generatedColor;

    
});
function randomColor(){
    let red=Math.floor(Math.random()*225);
    let green=Math.floor(Math.random()*225);
    let blue= Math.floor(Math.random()*225);
    let color=`rgb(${red},${green},${blue})`;
    return color;
    }
