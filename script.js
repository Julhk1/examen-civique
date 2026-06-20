let questions = [
  {
    level: "facile",
    q: "Quelle est la capitale de la France ?",
    a: ["Lyon", "Paris", "Marseille"],
    correct: 1,
    explanation: "Paris est la capitale de la France et le siège principal des institutions politiques (Élysée, Assemblée nationale)."
  },
  {
    level: "moyen",
    q: "En France, qui détient le pouvoir législatif (vote les lois) ?",
    a: ["Le Président de la République", "Le Parlement (Assemblée nationale et Sénat)", "Le Premier ministre"],
    correct: 1,
    explanation: "C'est le Parlement qui vote les lois. Le Président promulgue les lois et le Premier ministre dirige l'action du gouvernement."
  },
  {
    level: "difficile",
    q: "Combien de députés siègent à l’Assemblée nationale ?",
    a: ["577", "500", "350"],
    correct: 0,
    explanation: "Il y a exactement 577 députés, chacun élu dans une circonscription législative lors des élections législatives."
  }
];

let current = 0;
let score = 0;
let time = 60;
let timer;

function startExam() {
  score = 0;
  current = 0;
  time = 60;
  document.getElementById("score").innerText = score;
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time <= 0) {
      clearInterval(timer);
      alert("⏱ Temps écoulé ! Score final : " + score + "/" + questions.length);
      resetQuiz();
    }
  }, 1000);

  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  document.getElementById("progress").innerText = `Question ${current + 1} / ${questions.length} [${q.level.toUpperCase()}]`;
  document.getElementById("question").innerText = q.q;
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach((answer, i) => {
    let btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = () => {
      // Désactiver tous les boutons après le clic
      let allButtons = answersDiv.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (i === q.correct) {
        score++;
        btn.classList.add("correct-ans");
      } else {
        btn.classList.add("wrong-ans");
        allButtons[q.correct].classList.add("correct-ans"); // Montrer la bonne réponse
      }

      document.getElementById("score").innerText = score;
      
      // Afficher l'explication
      let fb = document.getElementById("feedback");
      fb.innerHTML = `<strong>💡 Explication :</strong> ${q.explanation}`;
      fb.style.display = "block";
      
      document.getElementById("next-btn").style.display = "block";
    };

    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    clearInterval(timer);
    alert(`🎉 Examen terminé ! Score final : ${score}/${questions.length}`);
    resetQuiz();
  } else {
    showQuestion();
  }
}

function resetQuiz() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("start-btn").style.display = "block";
}
