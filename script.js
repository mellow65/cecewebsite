var countBy = 1; // Default count by 1
var currentNumber = countBy;
var correctNumbers = [];

function checkAnswer() {
  var answerBox = document.getElementById("answerBox");
  var answer = parseInt(answerBox.value);
  
  if (answer === currentNumber) {
    correctNumbers.push(answer);
    currentNumber += countBy;
    answerBox.value = "";
    document.getElementById("message").innerHTML = "";
    updateCorrectList();
  } else {
    document.getElementById("message").innerHTML = "Try again";
    answerBox.value = "";
  }
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    checkAnswer();
  }
}

function updateCorrectList() {
  var correctListContainer = document.getElementById("correctListContainer");
  correctListContainer.innerHTML = "";

  var heading = document.createElement("h2");
  heading.style.marginTop = "0";
  heading.appendChild(document.createTextNode("Numbers you've gotten right so far:"));
  correctListContainer.appendChild(heading);

  var lineCount = Math.ceil(correctNumbers.length / 10);

  for (var i = 0; i < lineCount; i++) {
    var correctList = document.createElement("div");
    correctList.style.display = "flex";
    correctList.style.flexWrap = "wrap";
    correctList.style.justifyContent = "center";

    var start = i * 10;
    var end = Math.min((i + 1) * 10, correctNumbers.length);

    for (var j = start; j < end; j++) {
      var span = document.createElement("span");
      span.style.fontSize = "32px";
      span.appendChild(document.createTextNode(correctNumbers[j]));

      // Add comma and space after each correct answer except the last one
      if (j < end - 1) {
        span.appendChild(document.createTextNode(", "));
      }

      correctList.appendChild(span);
    }

    correctListContainer.appendChild(correctList);
  }
}



document.getElementById("countBy").addEventListener("change", function() {
  countBy = parseInt(this.value);
  currentNumber = countBy;
  correctNumbers = [];
  updateCorrectList();
});

// Auto-fill the "Enter the number to count by" box with 1 on page load
window.addEventListener("load", function() {
  document.getElementById("countBy").value = 1;
});
