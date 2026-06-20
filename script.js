// ==========================================
// 🗄️ BASE DE DONNÉES DE TOUTES LES QUESTIONS
// ==========================================
// C'est ici que nous ajouterons les thématiques au fur et à mesure !
const DATABASE_QUESTIONS = [
  {
    id: "T1_Q1", // Chaque question a maintenant un identifiant unique pour la mémoire
    q: "Quelle est la capitale de la France ?",
    a: ["Lyon", "Paris", "Marseille"],
    correct: 1,
    explanation: "Paris est la capitale de la France et le siège principal des institutions politiques."
  },
  {
    id: "T1_Q2",
    q: "Quelle est la langue officielle de la République française ?",
    a: ["Le français et l'anglais", "Le français", "Le français et les langues régionales"],
    correct: 1,
    explanation: "Le français est la seule langue officielle selon l'article 2 de la Constitution."
  },
  {
    id: "T1_Q3",
    q: "Quel est le nom de l'hymne national ?",
    a: ["Le Chant des Partisans", "La Marseillaise", "L'Ode à la Joie"],
    correct: 1,
    explanation: "La Marseillaise a été composée en 1792 par Rouget de Lisle et est devenue l'hymne national officiel en 1879."
  },
  {
    id: "T1_Q4",
    q: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    a: ["En 1789", "En 1905", "En 1958"],
    correct: 1,
    explanation: "La loi du 9 décembre 1905 est le texte fondateur de la laïcité à la française."
  }
  // Vos futures questions s'ajouteront à la suite ici...
];

// ==========================================
// ⚙️ GESTION DU SYSTÈME ET DU JEU
// ==========================================
let examQuestions = []; // Questions de la session en cours
let current = 0;
let score = 0;
let time = 300;
let timer;
let currentMode = ""; // "suivi", "flash", "erreurs"

// Liste des IDs ratés durant la session actuelle
let sessionErrors = []; 

// Au chargement du site, on calcule et affiche l'état de la mémoire du candidat
window.onload = function() {
  calculerEtAfficherStats();
};

function startExam(mode) {
  currentMode = mode;
  current = 0;
  score = 0;
  sessionErrors = [];
  time = 300; 

  // Récupération des données sauvegardées dans la mémoire locale (LocalStorage)
  let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
  let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

  if (mode === 'suivi') {
    // Filtrer les questions pour ne garder que celles JAMAIS vues
    let nonVues = DATABASE_QUESTIONS.filter(q => !vus.includes(q.id));
    
    // Si on a épuisé tout le stock de questions neuves !
    if (nonVues.length === 0) {
      alert("🎉 Félicitations ! Vous avez traité 100% des questions du code. Utilisez le bouton en bas pour réinitialiser la mémoire et tout refaire.");
      return;
    }
    
    // Mélanger les questions non vues
    nonVues.sort(() => Math.random() - 0.5);
    // Prendre un maximum de 40 questions (ou moins s'il en reste moins)
    examQuestions = nonVues.slice(0, 40);

    // Enregistrer immédiatement ces questions comme "vues" dans la mémoire
    examQuestions.forEach(q => { if(!vus.includes(q.id)) vus.push(q.id); });
    localStorage.setItem('civique_vus', JSON.stringify(vus));

  } else if (mode === 'flash') {
    // Mode Flash : 40 questions totalement au hasard dans TOUTE la base, sans distinction
    let copieBase = [...DATABASE_QUESTIONS];
    copieBase.sort(() => Math.random() - 0.5);
    examQuestions = copieBase.slice(0, 40);

  } else if (mode === 'erreurs') {
    // Mode Révision des fautes enregistrées
    examQuestions = DATABASE_QUESTIONS.filter(q => erreursGlobales.includes(q.id));
    examQuestions.sort(() => Math.random() - 0.5);
  }

  // Configuration de l'interface graphique
  document.getElementById("current-total-q").innerText = examQuestions.length;
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("score").innerText = score;

  // Lancement du Chronomètre
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time <= 0) {
      clearInterval(timer);
      finDeLExamen();
    }
  }, 1000);

  showQuestion();
}

function showQuestion() {
  let q = examQuestions[current];
  document.getElementById("progress").innerText = `Question ${current + 1} / ${examQuestions.length}`;
  document.getElementById("question").innerText = q.q;
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach((answer, i) => {
    let btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = () => {
      let allButtons = answersDiv.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (i === q.correct) {
        score++;
        btn.classList.add("correct-ans");
        // Si on répond juste en mode "erreurs", on l'enlèvera de la liste des erreurs à la fin
      } else {
        btn.classList.add("wrong-ans");
        allButtons[q.correct].classList.add("correct-ans");
        // Enregistrer la faute dans la session en cours
        sessionErrors.push(q.id); 
      }

      document.getElementById("score").innerText = score;
      document.getElementById("feedback").innerHTML = `<strong>💡 Explication :</strong> ${q.explanation}`;
      document.getElementById("feedback").style.display = "block";
      document.getElementById("next-btn").style.display = "block";
    };

    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current >= examQuestions.length) {
    clearInterval(timer);
    finDeLExamen();
  } else {
    showQuestion();
  }
}

function finDeLExamen() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  
  document.getElementById("final-score").innerText = score;
  document.getElementById("final-total").innerText = examQuestions.length;

  // Traitement de la mémoire persistante selon le mode joué
  if (currentMode === 'suivi' || currentMode === 'erreurs') {
    let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

    // 1. Ajouter les nouvelles erreurs commises
    sessionErrors.forEach(id => {
      if (!erreursGlobales.includes(id)) erreursGlobales.push(id);
    });

    // 2. Si on est en mode révision d'erreurs, enlever celles qui ont été réussies
    if (currentMode === 'erreurs') {
      examQuestions.forEach(q => {
        if (!sessionErrors.includes(q.id)) {
          erreursGlobales = erreursGlobales.filter(id => id !== q.id);
        }
      });
    }

    localStorage.setItem('civique_erreurs', JSON.stringify(erreursGlobales));
  }

  // Afficher ou masquer le bouton de rattrapage immédiat
  let retryBtn = document.getElementById("retry-errors-now");
  if (sessionErrors.length > 0) {
    retryBtn.style.display = "block";
  } else {
    retryBtn.style.display = "none";
  }
}

function refaireErreursImmediatement() {
  // On filtre pour ne garder que les questions échouées lors de cette session
  examQuestions = DATABASE_QUESTIONS.filter(q => sessionErrors.includes(q.id));
  current = 0;
  score = 0;
  sessionErrors = []; // On vide pour la nouvelle sous-session
  
  document.getElementById("current-total-q").innerText = examQuestions.length;
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("score").innerText = score;

  showQuestion();
}

function retourAccueil() {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
  calculerEtAfficherStats();
}

// ==========================================
// 📊 UTILITAIRES DE COMPTAGE ET DE CONFIG
// ==========================================
function calculerEtAfficherStats() {
  let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
  let erreurs = JSON.parse(localStorage.getItem('civique_erreurs')) || [];
  let total = DATABASE_QUESTIONS.length;

  document.getElementById("global-vus").innerText = vus.length;
  document.getElementById("global-total").innerText = total;
  document.getElementById("global-restant").innerText = Math.max(0, total - vus.length);
  document.getElementById("global-erreurs").innerText = erreurs.length;

  // Afficher le bouton de la boîte à erreurs seulement s'il y a des fautes dedans
  let btnErreurs = document.getElementById("mode-erreurs-btn");
  if (erreurs.length > 0) {
    btnErreurs.innerText = `🔄 Réviser la boîte à erreurs (${erreurs.length} questions)`;
    btnErreurs.style.display = "block";
  } else {
    btnErreurs.style.display = "none";
  }
}

function resetToutLeCode() {
  if (confirm("Êtes-vous sûr de vouloir vider l'historique ? Cela effacera toutes les questions mémorisées ainsi que votre boîte à erreurs.")) {
    localStorage.removeItem('civique_vus');
    localStorage.removeItem('civique_erreurs');
    calculerEtAfficherStats();
  }
}
