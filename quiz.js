function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 === "Pizza") {
    correct++;
  }
  if (question2 === "Crocodile") {
    correct++;
  }
  if (question3 === "Thursday") {
    correct++;
  }
  var messages = [
    "Great Job Luaren",
    "That's Okay Lauren",
    "You really need to do Better Lauren"
  ];
  //var pictures = ["imges/win2.gif", "imgeslose2.gif", "imges/lose1.gif"];
  var range;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
  }
  if (correct > 2) {
    range = 0;
  }
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML =
    "You Got " + correct + "correct.";
  //document.getElementById("picture").src = pictures[range];
}
