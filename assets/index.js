let divs = document.querySelectorAll(".col-4");
let img = document.createElement("img");
img.classList.add("w-100", "h-100");
img.src = "./bakri.jpg";

function start() {
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * divs.length);

    divs[randomIndex].appendChild(img);
  }, 400);
}

let startGame = document.getElementById("startGame");

startGame.addEventListener("click", function () {
  start();
});

let score = document.getElementById("score");
let move = document.getElementById("move");
let resetGame = document.getElementById("resetGame");

let movescore = Number(move.innerText);

divs.forEach((e) =>
  e.addEventListener("click", (event) => {
    if (event.target.tagName == "IMG") {
      score.innerText = +score.innerText + 1;
    }
  })
);

divs.forEach((e) =>
  e.addEventListener("click", (event) => {
    if (event.target.tagName !== "IMG" && move.innerText != 0) {
      move.innerText = +move.innerText - 1;
    }
  })
);

resetGame.addEventListener("click", function () {
  score.innerText = 0;
  move.innerText = 10;
});
