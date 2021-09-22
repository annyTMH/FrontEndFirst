
let buttonId= document.querySelector("#button-id")
//console.log(buttonId);
let body= document.querySelector("body")
console.log(body)

//addEventListener(function )click is parameter. function() callback function
// buttonId.addEventListener("click",function() {
//       body.classList.add("bg-yellow")
//     alert("Lets do something stupid");
    
// })
///--
// buttonId.addEventListener("click",function() {
//     body.classList.add("bg-yellow")
// })
//---Click me to change color
buttonId.addEventListener("click",function() {
     if(body.classList.contains("bg-yellow")){
         body.classList.remove("bg-yellow")
     }
     else{
         body.classList.add("bg-yellow")
     }

    })

    //---
    buttonId.addEventListener("mouseover", function() {
        body.classList.add("bg-red")
        
    })
    //button change color

    buttonId.addEventListener("mouseout", function() {
        body.classList.remove("bg-red")
        
    })
    //---
    // password input
    let elementInput= document.querySelector("#password");
   
    elementInput.addEventListener("keydown", function () {
        if(elementInput.value.length >= 8){
            elementInput.classList.add("bg-red")
 
        }
       
         else{
            elementInput.classList.remove("bg-red");
           // elementInput.classList.add("bg-yellow");
        }

        //console.log(elementInput.value)
    })

    let array=["one","two","three"]
    let html="";
    array.forEach(function (el) {
        html+=`<button class='button-tag'>${el}</button>`;
        
    })

    let buttonsContainer=document.querySelector(".buttons");
    console.log(html)
    buttonsContainer.innerHTML=html;

    let buttons=document.querySelectorAll(".button-tag");
    let num=1;
   
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            console.log(button.value);
        })
    })

