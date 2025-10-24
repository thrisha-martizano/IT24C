

function updateDisplay(){
    let textbox = document.getElementById("textbox");
    let displaytext = document.getElementById("display");

    displaytext.textContent = textbox.value;
    
}
    

    
//     document.getElementById("btn").addEventListener("onclick" , function() {
//     alert("Suprise Me!"); 
// })
// const quoteBtn = document.getElementById("qouteBtn");
// const quoteOutput = document.getElementById("suprise");
// quoteBtn.addEventListener()

function showQuote() {
    let randomIndex = Math.floor(Math.random() *quotes.length);
    // document.getElementById("quoteDisplay").innerText = quotes [randomIndex];
    document.getElementById("btn").addEventListener("onclick" , function() {
    alert("Suprise Me!"); 
})

}
    let quotes = [
        "Progress, not Perfection", 
        "Your only limit is you"
    ];
