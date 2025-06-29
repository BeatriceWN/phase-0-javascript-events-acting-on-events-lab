const dodger = document.getelementbyid("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

// prevent dodger from going beyond right edge i.e. 400px - 40px = 360px
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// add event listener
document.addEventListener("keydown", function (e) {
if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

// add another condition
else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

