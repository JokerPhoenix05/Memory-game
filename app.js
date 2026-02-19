let box = document.getElementById("box");
let boxContainer = new Array();
let symbols = [
  "🍎",
  "🍎",
  "🚀",
  "🚀",
  "💎",
  "💎",
  "👻",
  "👻",
  "👨🏻‍💻",
  "👨🏻‍💻",
  "🤖",
  "🤖",
];
let randomSymbols = shuffleArray(symbols);
let match = new Array();
let count = 0;
let timer1;
let timer2;
let ok = false;

for (let i = 0; i < 12; i++) {
  let boxes = document.createElement("div");
  boxes.id = "boxes";
  boxContainer.push(boxes);
  flip(i);
  box.appendChild(boxContainer[i]);
}

function flip(i) {
  boxContainer[i].addEventListener("click", function () {
     
    if (match.length == 2) {

       if (match[0].textContent === match[1].textContent) {
           clearTimeout(timer2); 
         match[0].style.visibility = "hidden";
          match[1].style.visibility = "hidden";
          match = [];
      }else{
      clearTimeout(timer1);
      for (let i = 0; i < match.length; i++) {
        match[i].style.transition = "transform 0.6s";
        match[i].style.transform = "rotateY(0deg)";
        match[i].style.backgroundColor = "aqua";
        match[i].innerHTML = "";
      }
      match = [];
    }

  }
    boxContainer[i].style.transition = "transform 0.6s";
    boxContainer[i].style.transform = "rotateY(180deg)";
    boxContainer[i].style.backgroundColor = "white";
    boxContainer[i].innerHTML = randomSymbols[i];
    match.push(boxContainer[i]);
    if (match.length == 2) {
      if (match[0].textContent === match[1].textContent) {
        match[0].style.backgroundColor = "green";
        match[1].style.backgroundColor = "green";
         timer2=setTimeout(function(){
          match[0].style.visibility = "hidden";
          match[1].style.visibility = "hidden";
          match = [];
        },2000)
       
      } else {
        timer1 = setTimeout(function () {
          for (let i = 0; i < match.length; i++) {
            match[i].style.transition = "transform 0.6s";
            match[i].style.transform = "rotateY(0deg)";
            match[i].style.backgroundColor = "aqua";
            match[i].innerHTML = "";
          }
          match = [];
        }, 3000);
      }
    }
  });
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
