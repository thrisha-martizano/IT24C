// document.getElementById("btn").addEventListener("click" , function() {
//     alert("Button was Clicked!");
// })

function updateDisplay(){
    let textbox = document.getElementById("textbox");
    let displaytext = document.getElementById("display");

    displaytext.textContent = textbox.value;
}