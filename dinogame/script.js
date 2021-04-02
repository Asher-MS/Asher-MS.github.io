let character = document.getElementById("character");

document.addEventListener("keyup", jump);

function jump() {
  character.classList.add("animate");
  setTimeout(removeJump, 600);
}
function removeJump() {
  character.classList.remove("animate");
}
let enemy = document.getElementById("block");

function enemygo() {
  enemy.classList.add("enemyanimate");
}
enemygo();

function checkdead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockleft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );
  if (blockleft < 10 && blockleft > -10 && characterTop >= 130) {
    alert("Game Over");
  }
}
let score = 0;
function checkscore() {
  let blockleft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );

  if (blockleft < 20 && blockleft > -20) {
    score = score + 1;
    document.getElementById("scoredisplay").innerHTML = score;
  }
}
setInterval(checkdead, 10);
setInterval(checkscore, 200);

// function foo() {
//   let blockleft = parseInt(
//     window.getComputedStyle(enemy).getPropertyValue("left")
//   );
//   console.log(blockleft);
// }
// setInterval(foo, 10);
