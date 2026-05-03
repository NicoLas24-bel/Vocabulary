/* ═══════════════════════════════════════════════════════
   LEXICON PRO — app.js 
   Modos: Vocabulario, Traducción, Tiempos Verbales, Mezcla
═══════════════════════════════════════════════════════ */

// ─── BANCO DE DATOS ───────────────────────────────────────
// Vocabulario C1-C2 (palabra → significado)
const VOCAB_SET = [
  { word: "Ephemeral", type: "adjective", meanings: ["efímero", "fugaz", "pasajero"], hint: "Que dura muy poco tiempo", example: "The beauty of cherry blossoms is ephemeral." },
  { word: "Ubiquitous", type: "adjective", meanings: ["omnipresente", "ubicuo"], hint: "Que está en todas partes", example: "Smartphones have become ubiquitous in modern society." },
  { word: "Mitigate", type: "verb", meanings: ["mitigar", "atenuar", "aliviar"], hint: "Reducir la gravedad de algo", example: "Trees help mitigate the effects of urban heat." },
  { word: "Ambivalent", type: "adjective", meanings: ["ambivalente", "indeciso"], hint: "Sentimientos contradictorios", example: "She felt ambivalent about leaving her hometown." },
  { word: "Cogent", type: "adjective", meanings: ["convincente", "sólido"], hint: "Argumento lógico y convincente", example: "She made a cogent case for reforming the policy." },
  { word: "Erudite", type: "adjective", meanings: ["erudito", "culto", "sabio"], hint: "Con mucho conocimiento", example: "Her erudite commentary enriched the lecture series." },
  { word: "Laconic", type: "adjective", meanings: ["lacónico", "conciso"], hint: "De pocas palabras", example: "His laconic reply—'no'—ended the discussion." },
  { word: "Magnanimous", type: "adjective", meanings: ["magnánimo", "generoso"], hint: "Noble y sin rencor", example: "The magnanimous victor offered aid to the defeated." },
  { word: "Onerous", type: "adjective", meanings: ["oneroso", "gravoso"], hint: "Que implica gran carga", example: "The onerous regulations stifled small businesses." },
  { word: "Pragmatic", type: "adjective", meanings: ["pragmático", "práctico"], hint: "Que prioriza lo práctico", example: "She took a pragmatic approach to solving the crisis." },
  { word: "Quixotic", type: "adjective", meanings: ["quijotesco", "idealista"], hint: "Idealista de forma impráctica", example: "His quixotic plan to end poverty charmed but alarmed." },
  { word: "Reticent", type: "adjective", meanings: ["reticente", "reservado"], hint: "Que no habla mucho", example: "She was reticent about her past." },
  { word: "Sanguine", type: "adjective", meanings: ["optimista", "confiado"], hint: "Optimista en situaciones difíciles", example: "She remained sanguine about the company's prospects." },
  { word: "Tenacious", type: "adjective", meanings: ["tenaz", "perseverante"], hint: "Que se aferra con persistencia", example: "Her tenacious spirit kept her going." },
  { word: "Vacuous", type: "adjective", meanings: ["vacuo", "superficial"], hint: "Sin contenido intelectual", example: "The celebrity's vacuous interviews revealed nothing." },
  { word: "Whimsical", type: "adjective", meanings: ["caprichoso", "fantasioso"], hint: "De humor curioso y fantasioso", example: "Her whimsical illustrations charmed children." },
  { word: "Alacrity", type: "noun", meanings: ["presteza", "entusiasmo"], hint: "Rapidez y entusiasmo", example: "She accepted the challenge with alacrity." },
  { word: "Bombastic", type: "adjective", meanings: ["bombástico", "grandilocuente"], hint: "Lenguaje inflado y pretencioso", example: "His bombastic speech failed to impress." },
  { word: "Capricious", type: "adjective", meanings: ["caprichoso", "voluble"], hint: "Que cambia sin razón", example: "The capricious weather ruined their picnic." },
  { word: "Duplicity", type: "noun", meanings: ["duplicidad", "engaño"], hint: "Comportamiento engañoso", example: "His duplicity was eventually exposed." }
];

// Traducciones (oraciones EN → ES)
const TRANSLATE_SET = [
  { sentence: "The committee reached a consensus after hours of debate.", meaning: "El comité alcanzó un consenso después de horas de debate.", hint: "acuerdo unánime", context: "Reunión formal" },
  { sentence: "Despite the obstacles, she persevered and achieved her goals.", meaning: "A pesar de los obstáculos, ella perseveró y logró sus metas.", hint: "continuó a pesar de las dificultades", context: "Superación personal" },
  { sentence: "The new policy will have far-reaching implications for the industry.", meaning: "La nueva política tendrá implicaciones de gran alcance para la industria.", hint: "consecuencias importantes", context: "Negocios" },
  { sentence: "His actions were deemed inappropriate by the board of directors.", meaning: "Sus acciones fueron consideradas inapropiadas por la junta directiva.", hint: "juzgadas como", context: "Corporativo" },
  { sentence: "The ancient ruins attract thousands of tourists every year.", meaning: "Las ruinas antiguas atraen a miles de turistas cada año.", hint: "lugar histórico", context: "Turismo" }
];

// Tiempos verbales (oración → tiempo)
const TENSE_SET = [
  { sentence: "She has been working at the company for five years.", verb: "has been working", tense: "present perfect continuous", tenseEs: "presente perfecto continuo", hint: "Acción que empezó en el pasado y continúa" },
  { sentence: "They will have finished the project by tomorrow.", verb: "will have finished", tense: "future perfect", tenseEs: "futuro perfecto", hint: "Acción completada en el futuro" },
  { sentence: "I was walking home when it started to rain.", verb: "was walking", tense: "past continuous", tenseEs: "pasado continuo", hint: "Acción en progreso en el pasado" },
  { sentence: "He had already eaten when we arrived.", verb: "had eaten", tense: "past perfect", tenseEs: "pasado perfecto", hint: "Acción anterior a otra en el pasado" },
  { sentence: "She goes to the gym every morning.", verb: "goes", tense: "simple present", tenseEs: "presente simple", hint: "Acción habitual o rutina" },
  { sentence: "We will visit them next summer.", verb: "will visit", tense: "simple future", tenseEs: "futuro simple", hint: "Acción que ocurrirá en el futuro" },
  { sentence: "They are studying for the exam right now.", verb: "are studying", tense: "present continuous", tenseEs: "presente continuo", hint: "Acción que está ocurriendo ahora" },
  { sentence: "She visited Paris last year.", verb: "visited", tense: "simple past", tenseEs: "pasado simple", hint: "Acción completada en el pasado" }
];

const TENSE_OPTIONS = [
  { value: "present simple", label: "Presente Simple" },
  { value: "present continuous", label: "Presente Continuo" },
  { value: "present perfect", label: "Presente Perfecto" },
  { value: "present perfect continuous", label: "Presente Perfecto Continuo" },
  { value: "past simple", label: "Pasado Simple" },
  { value: "past continuous", label: "Pasado Continuo" },
  { value: "past perfect", label: "Pasado Perfecto" },
  { value: "future simple", label: "Futuro Simple" },
  { value: "future perfect", label: "Futuro Perfecto" }
];

// ─── ESTADO DEL JUEGO ─────────────────────────────────────
let currentMode = "vocab"; // vocab, translate, tense, mix
let timeLimit = 20; // segundos, 0 = sin límite
let questionsPerSession = 20;
let questions = [];
let currentIndex = 0;
let currentQuestion = null;
let score = { correct: 0, errors: 0, streak: 0, maxStreak: 0 };
let missed = []; // items fallados { question, correctAnswer, userAnswer, mode }
let timerInterval = null;
let timeLeft = 0;
let waitingForFeedback = false;
let sessionModes = []; // para modo mix

// ─── DOM ELEMENTOS ───────────────────────────────────────
const screens = {
  home: document.getElementById('s-home'),
  game: document.getElementById('s-game'),
  feedback: document.getElementById('s-feedback'),
  summary: document.getElementById('s-summary')
};

// Home
const modeCards = document.querySelectorAll('.mode-card');
const timeButtons = document.querySelectorAll('#time-sel .tog');
const qtyButtons = document.querySelectorAll('#qty-sel .tog');

// Game topbar
const modeBadge = document.getElementById('mode-badge');
const progFill = document.getElementById('prog-fill');
const progTxt = document.getElementById('prog-txt');
const correctSpan = document.getElementById('g-correct');
const errorsSpan = document.getElementById('g-errors');
const streakSpan = document.getElementById('g-streak');

// Timer
const timerWrap = document.getElementById('timer-wrap');
const timerFill = document.getElementById('timer-fill');
const timerNum = document.getElementById('timer-num');

// Question containers
const qVocab = document.getElementById('q-vocab');
const qTranslate = document.getElementById('q-translate');
const qTense = document.getElementById('q-tense');

// Vocab elements
const vcType = document.getElementById('vc-type');
const vcWord = document.getElementById('vc-word');
const vcPron = document.getElementById('vc-pron');
const vocabHintBtn = document.getElementById('vocab-hint-btn');
const vocabHintTxt = document.getElementById('vocab-hint-txt');

// Translate elements
const trSentence = document.getElementById('tr-sentence');
const trContext = document.getElementById('tr-context');
const trHintBtn = document.getElementById('tr-hint-btn');
const trHintTxt = document.getElementById('tr-hint-txt');

// Tense elements
const teSentence = document.getElementById('te-sentence');
const teVerb = document.getElementById('te-verb');
const tenseGrid = document.getElementById('tense-grid');

// Answer area
const answerInput = document.getElementById('ans-input');
const btnSubmit = document.getElementById('btn-submit');
const btnSkip = document.getElementById('btn-skip');
const btnQuit = document.getElementById('btn-quit');

// Feedback
const fbIcon = document.getElementById('fb-icon');
const fbTitle = document.getElementById('fb-title');
const fbCorrect = document.getElementById('fb-correct');
const fbYours = document.getElementById('fb-yours');
const fbExtra = document.getElementById('fb-extra');
const fbExtraBlock = document.getElementById('fb-extra-block');
const fbYoursBlock = document.getElementById('fb-yours-block');
const btnContinue = document.getElementById('btn-continue');

// Summary
const sumGrade = document.getElementById('sum-grade');
const sumScore = document.getElementById('sum-score');
const ssCorrect = document.getElementById('ss-correct');
const ssErrors = document.getElementById('ss-errors');
const ssStreak = document.getElementById('ss-streak');
const ssPct = document.getElementById('ss-pct');
const sumBkGrid = document.getElementById('sum-bk-grid');
const sumMissedList = document.getElementById('sum-missed-list');
const btnAgain = document.getElementById('btn-again');
const btnHome = document.getElementById('btn-home');

// ─── HELPERS ─────────────────────────────────────────────
function showScreen(screenId) {
  Object.keys(screens).forEach(id => {
    screens[id].classList.remove('active');
  });
  screens[screenId].classList.add('active');
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  stopTimer();
  if (timeLimit <= 0) {
    timerWrap.classList.add('hidden');
    return;
  }
  timerWrap.classList.remove('hidden');
  timeLeft = timeLimit;
  timerNum.textContent = timeLeft;
  timerFill.style.transition = 'none';
  timerFill.style.width = '100%';
  
  // Forzar reflow
  void timerFill.offsetWidth;
  
  timerFill.style.transition = `width ${timeLimit}s linear`;
  timerFill.style.width = '0%';
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerNum.textContent = timeLeft;
    
    if (timeLeft <= 3) {
      timerFill.style.background = '#f56565';
    }
    
    if (timeLeft <= 0) {
      stopTimer();
      if (!waitingForFeedback) {
        handleTimeout();
      }
    }
  }, 1000);
}

function normalizeText(str) {
  if (!str) return '';
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .trim();
}

function checkVocabAnswer(userAnswer, question) {
  const normalizedUser = normalizeText(userAnswer);
  return question.meanings.some(m => normalizeText(m) === normalizedUser);
}

function checkTranslateAnswer(userAnswer, question) {
  const normalizedUser = normalizeText(userAnswer);
  const normalizedCorrect = normalizeText(question.meaning);
  return normalizedUser === normalizedCorrect;
}

function checkTenseAnswer(userAnswer, question) {
  return userAnswer === question.tense;
}

// ─── GENERAR PREGUNTAS ───────────────────────────────────
function generateQuestions() {
  const questionsList = [];
  
  if (currentMode === 'vocab') {
    const shuffled = [...VOCAB_SET].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(questionsPerSession, shuffled.length); i++) {
      questionsList.push({ ...shuffled[i], mode: 'vocab' });
    }
  } 
  else if (currentMode === 'translate') {
    const shuffled = [...TRANSLATE_SET].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(questionsPerSession, shuffled.length); i++) {
      questionsList.push({ ...shuffled[i], mode: 'translate' });
    }
  }
  else if (currentMode === 'tense') {
    const shuffled = [...TENSE_SET].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(questionsPerSession, shuffled.length); i++) {
      questionsList.push({ ...shuffled[i], mode: 'tense' });
    }
  }
  else if (currentMode === 'mix') {
    const allItems = [
      ...VOCAB_SET.map(v => ({ ...v, mode: 'vocab' })),
      ...TRANSLATE_SET.map(t => ({ ...t, mode: 'translate' })),
      ...TENSE_SET.map(te => ({ ...te, mode: 'tense' }))
    ];
    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(questionsPerSession, shuffled.length); i++) {
      questionsList.push(shuffled[i]);
    }
  }
  
  return questionsList;
}

function showQuestion() {
  waitingForFeedback = false;
  currentQuestion = questions[currentIndex];
  
  // Actualizar progreso
  const progress = ((currentIndex) / questions.length) * 100;
  progFill.style.width = `${progress}%`;
  progTxt.textContent = `${currentIndex + 1}/${questions.length}`;
  
  // Actualizar estadísticas
  correctSpan.textContent = score.correct;
  errorsSpan.textContent = score.errors;
  streakSpan.textContent = score.streak;
  
  // Ocultar todos los tipos de pregunta
  qVocab.classList.add('hidden');
  qTranslate.classList.add('hidden');
  qTense.classList.add('hidden');
  
  // Ocultar área de respuesta y limpiar
  answerInput.value = '';
  answerInput.disabled = false;
  btnSubmit.disabled = false;
  
  // Mostrar según modo de la pregunta
  const mode = currentQuestion.mode;
  
  if (mode === 'vocab') {
    modeBadge.textContent = 'VOCABULARIO';
    qVocab.classList.remove('hidden');
    vcType.textContent = currentQuestion.type;
    vcWord.textContent = currentQuestion.word;
    vcPron.textContent = currentQuestion.pron || `/ˈwɜːd/`;
    vocabHintTxt.classList.add('hidden');
    vocabHintTxt.textContent = currentQuestion.hint;
    answerInput.placeholder = "Escribe el significado en español...";
  }
  else if (mode === 'translate') {
    modeBadge.textContent = 'TRADUCCIÓN';
    qTranslate.classList.remove('hidden');
    trSentence.textContent = currentQuestion.sentence;
    trContext.textContent = currentQuestion.context || '';
    trHintTxt.classList.add('hidden');
    trHintTxt.textContent = currentQuestion.hint;
    answerInput.placeholder = "Escribe la traducción al español...";
  }
  else if (mode === 'tense') {
    modeBadge.textContent = 'TIEMPOS VERBALES';
    qTense.classList.remove('hidden');
    teSentence.textContent = currentQuestion.sentence;
    teVerb.textContent = currentQuestion.verb;
    
    // Generar botones de opciones
    tenseGrid.innerHTML = '';
    const shuffledOptions = [...TENSE_OPTIONS].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'tense-option';
      btn.textContent = opt.label;
      btn.dataset.value = opt.value;
      btn.addEventListener('click', () => {
        if (!waitingForFeedback) {
          answerInput.value = opt.value;
          submitAnswer();
        }
      });
      tenseGrid.appendChild(btn);
    });
    answerInput.placeholder = "O selecciona una opción arriba...";
  }
  
  // Iniciar timer
  startTimer();
  
  // Enfocar input
  setTimeout(() => answerInput.focus(), 100);
}

function submitAnswer() {
  if (waitingForFeedback) return;
  
  let userAnswer = answerInput.value.trim();
  let isCorrect = false;
  
  const mode = currentQuestion.mode;
  
  if (mode === 'vocab') {
    isCorrect = checkVocabAnswer(userAnswer, currentQuestion);
  }
  else if (mode === 'translate') {
    isCorrect = checkTranslateAnswer(userAnswer, currentQuestion);
  }
  else if (mode === 'tense') {
    isCorrect = checkTenseAnswer(userAnswer, currentQuestion);
  }
  
  stopTimer();
  waitingForFeedback = true;
  
  if (isCorrect) {
    score.correct++;
    score.streak++;
    if (score.streak > score.maxStreak) score.maxStreak = score.streak;
  } else {
    score.errors++;
    score.streak = 0;
    missed.push({
      question: getQuestionText(),
      correctAnswer: getCorrectAnswer(),
      userAnswer: userAnswer || "(sin respuesta)",
      mode: mode
    });
  }
  
  // Mostrar feedback
  showFeedback(isCorrect, userAnswer);
}

function handleTimeout() {
  if (waitingForFeedback) return;
  waitingForFeedback = true;
  
  score.errors++;
  score.streak = 0;
  
  missed.push({
    question: getQuestionText(),
    correctAnswer: getCorrectAnswer(),
    userAnswer: "(tiempo agotado)",
    mode: currentQuestion.mode
  });
  
  showFeedback(false, "");
}

function getQuestionText() {
  const mode = currentQuestion.mode;
  if (mode === 'vocab') return currentQuestion.word;
  if (mode === 'translate') return currentQuestion.sentence;
  if (mode === 'tense') return `${currentQuestion.sentence} (verbo: ${currentQuestion.verb})`;
  return "";
}

function getCorrectAnswer() {
  const mode = currentQuestion.mode;
  if (mode === 'vocab') return currentQuestion.meanings.join(" · ");
  if (mode === 'translate') return currentQuestion.meaning;
  if (mode === 'tense') return currentQuestion.tenseEs;
  return "";
}

function showFeedback(isCorrect, userAnswer) {
  fbIcon.textContent = isCorrect ? '✓' : '✗';
  fbIcon.className = `fb-icon ${isCorrect ? 'correct' : 'wrong'}`;
  fbTitle.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
  fbTitle.className = `fb-title ${isCorrect ? 'correct' : 'wrong'}`;
  
  fbCorrect.textContent = getCorrectAnswer();
  
  if (userAnswer && userAnswer !== "(tiempo agotado)") {
    fbYours.textContent = userAnswer;
    fbYoursBlock.style.display = 'block';
  } else if (userAnswer === "(tiempo agotado)") {
    fbYours.textContent = '⏱ Se acabó el tiempo';
    fbYoursBlock.style.display = 'block';
  } else {
    fbYoursBlock.style.display = 'none';
  }
  
  if (currentQuestion.mode === 'vocab' && currentQuestion.example) {
    fbExtra.textContent = `Ejemplo: "${currentQuestion.example}"`;
    fbExtraBlock.style.display = 'block';
  } else if (currentQuestion.mode === 'tense') {
    fbExtra.textContent = `Forma verbal: "${currentQuestion.verb}"`;
    fbExtraBlock.style.display = 'block';
  } else {
    fbExtraBlock.style.display = 'none';
  }
  
  showScreen('feedback');
}

function nextQuestion() {
  currentIndex++;
  
  if (currentIndex >= questions.length) {
    showSummary();
  } else {
    showScreen('game');
    showQuestion();
  }
}

function showSummary() {
  stopTimer();
  
  const total = score.correct + score.errors;
  const percentage = total > 0 ? Math.round((score.correct / total) * 100) : 0;
  
  let gradeText = "";
  if (percentage >= 90) gradeText = "¡Excelente!";
  else if (percentage >= 75) gradeText = "Muy bien";
  else if (percentage >= 60) gradeText = "Bien";
  else if (percentage >= 40) gradeText = "Regular";
  else gradeText = "Seguir practicando";
  
  sumGrade.textContent = gradeText;
  sumScore.textContent = `${score.correct} de ${total} correctas`;
  ssCorrect.textContent = score.correct;
  ssErrors.textContent = score.errors;
  ssStreak.textContent = score.maxStreak;
  ssPct.textContent = `${percentage}%`;
  
  // Desglose por modo
  sumBkGrid.innerHTML = '';
  const modesCount = { vocab: 0, translate: 0, tense: 0 };
  questions.forEach(q => {
    modesCount[q.mode]++;
  });
  const modeNames = { vocab: 'Vocabulario', translate: 'Traducción', tense: 'Tiempos Verbales' };
  Object.keys(modesCount).forEach(mode => {
    if (modesCount[mode] > 0) {
      const div = document.createElement('div');
      div.className = 'sum-bk-item';
      div.innerHTML = `<span class="sum-bk-name">${modeNames[mode]}</span><span class="sum-bk-count">${modesCount[mode]} preg.</span>`;
      sumBkGrid.appendChild(div);
    }
  });
  
  // Lista de repaso
  sumMissedList.innerHTML = '';
  if (missed.length === 0) {
    sumMissedList.innerHTML = '<p class="missed-empty">✨ ¡Ningún error! Sigue así ✨</p>';
  } else {
    missed.forEach(m => {
      const div = document.createElement('div');
      div.className = 'missed-item';
      div.innerHTML = `
        <p class="missed-question"><strong>${m.question}</strong> <span class="missed-mode">[${modeNames[m.mode]}]</span></p>
        <p class="missed-correct">✓ ${m.correctAnswer}</p>
        <p class="missed-user">✗ Tu respuesta: ${m.userAnswer}</p>
      `;
      sumMissedList.appendChild(div);
    });
  }
  
  showScreen('summary');
}

function startGame(mode) {
  currentMode = mode;
  
  // Leer configuraciones del menú
  const activeTime = document.querySelector('#time-sel .tog.active');
  timeLimit = parseInt(activeTime?.dataset.val || '20');
  
  const activeQty = document.querySelector('#qty-sel .tog.active');
  questionsPerSession = parseInt(activeQty?.dataset.val || '20');
  
  // Resetear estado
  currentIndex = 0;
  score = { correct: 0, errors: 0, streak: 0, maxStreak: 0 };
  missed = [];
  
  // Generar preguntas
  questions = generateQuestions();
  
  if (questions.length === 0) {
    console.error("No hay preguntas generadas");
    return;
  }
  
  showScreen('game');
  showQuestion();
}

function resetToMenu() {
  stopTimer();
  waitingForFeedback = false;
  showScreen('home');
}

// ─── EVENTOS ─────────────────────────────────────────────
modeCards.forEach(card => {
  card.addEventListener('click', () => {
    const mode = card.dataset.mode;
    if (mode) startGame(mode);
  });
});

btnSubmit.addEventListener('click', submitAnswer);
btnSkip.addEventListener('click', () => {
  if (!waitingForFeedback && currentQuestion) {
    stopTimer();
    waitingForFeedback = true;
    score.errors++;
    score.streak = 0;
    missed.push({
      question: getQuestionText(),
      correctAnswer: getCorrectAnswer(),
      userAnswer: "(saltada)",
      mode: currentQuestion.mode
    });
    showFeedback(false, "");
  }
});

btnQuit.addEventListener('click', resetToMenu);
btnContinue.addEventListener('click', nextQuestion);
btnAgain.addEventListener('click', () => startGame(currentMode));
btnHome.addEventListener('click', resetToMenu);

// Pistas
vocabHintBtn?.addEventListener('click', () => {
  vocabHintTxt.classList.toggle('hidden');
});
trHintBtn?.addEventListener('click', () => {
  trHintTxt.classList.toggle('hidden');
});

// Enter para enviar respuesta
answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !waitingForFeedback && currentQuestion) {
    e.preventDefault();
    submitAnswer();
  }
});

// Escape para salir
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    resetToMenu();
  }
});

// Inicializar
showScreen('home');