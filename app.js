
let box=document.getElementById("box")
let boxContainer=new Array();
let symbols = ['🍎', '🍎', '🚀', '🚀', '💎', '💎', '👻', '👻', '👨🏻‍💻', '👨🏻‍💻', '🤖', '🤖'];
let randomSymbols=shuffleArray(symbols);

for(let i=0;i<12;i++){
   let boxes=document.createElement("div");
   boxContainer.push(boxes);
   boxContainer[i].innerHTML=randomSymbols[i];
   box.appendChild(boxContainer[i]);    
}


function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // pick random index
    let j = Math.floor(Math.random() * (i + 1));

    // swap elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}