/** @format */

/* var topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

if (0) {
  console.log("I'm 0!"); //0 and null are falsy!
} else if (null) {
  console.log("I'm null!");
} else if (true) {
  console.log("I'm true!");
}
*/

var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

console.log("Here are the topics we learned through Prework:");
listTopics();

console.log("Which topic should we study first?");
selectTopic();
