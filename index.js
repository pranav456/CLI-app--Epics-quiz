var readlinesync = require("readline-sync");
var userAnswer = readlinesync.question("Hello, May I know your name? ");
console.log("NAMASTE! " + userAnswer + ". Welcome to Quiz competition.");
console.log("Let's begin with Round 1");

var score = 0;
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  console.log("You entered " + userAnswer);
  if (userAnswer === answer) {
    console.log("You got it right!");
    score = score + 1;
    if (score === 5) {
      console.log("Congratulations!, you have proceeded to Round 2");
    }
    if (score === 10) {
      console.log(
        "Congratulations!, you have proceeded to Round 3. Keep it up"
      );
    }
  } else console.log("You got it wrong!");
  console.log("The right answer is " + answer);
}

var arr = [
  {
    question: `1)Who is the father of Lord Krishna?
    a:Surasena
    b:Ugrasena
    c:Parasurama
    d:Vasudeva
`,
    answer: "Vasudeva",
  },
  {
    question: `2)What is the name of the conchshell of Sahadeva?
    a:Sughosha
    b:Manipushpaka
    c:Devadatta
    d:Panchajanya
`,
    answer: "Manipushpaka",
  },
  {
    question: `3)Who was the wife of Lakshmana?
    a:Mandavi
    b:Shruthakirti
    c:Urmila
    d:Sita
`,
    answer: "Urmila",
  },
  {
    question: `4)Who was the father of Hanuman?
    a:Kesari
    b:Vali
    c:Sugriva
    d:Angada
`,
    answer: "Kesari",
  },
  {
    question: `5)Who was the son of architect Vishwakarma in the Ramayana?
    a:Nala
    b:Mala
    c:Bala
    d:kala
`,
    answer: "Nala",
  },
  {
    question: `6)What is the name of the bow of krishna?
    a:Manigriva
    b:Panchajanya
    c:Saranga
    d:Hare
`,
    answer: "Saranga",
  },
  {
    question: `7)What was the other name of Kunthi?
    a:Krishnaa
    b:Rani
    c:Kunthiram
    d:Santhi
`,
    answer: "Krishnaa",
  },
  {
    question: `8)Who is the son of Chitrangada and Arjuna?
    a:Barbarika
    b:Babruvahana
    c:Krishnaa
    d:Kesi
`,
    answer: "Babruvahana",
  },
  {
    question: `9)What is the name of Balarama's club?
    a:Sunada
    b:Sunanda
    c:Kris
    d:Gada
`,
    answer: "Sunanda",
  },
  {
    question: `10)Who is the father of Yamuna 
devi?
    a:Surya
    b:Chandra
    c:Yama
    d:Indra
`,
    answer: "Surya",
  },
  {
    question: `11)Which of the following are the parts of Ramcharitmanas?
    a:Balakanda
    b:Aranya kanda
    c:Kishkinda Kanda
    d:All of the above
`,
    answer: "All of the above",
  },
];

for (var i = 0; i < arr.length; i++) {
  var query = arr[i];
  play(query.question, query.answer);
  console.log("---------------------");
}
console.log("Your final score is:" + score);
console.log("Thank You:)");
