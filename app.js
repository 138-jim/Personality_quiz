// === DISC Personality Quiz - Application Logic ===

// --- Quiz Data: 28 questions ---
const QUESTIONS = [
  { // Box 1
    traits: [
      { text: 'Enthusiastic', mostDim: 'i', leastDim: 'i' },
      { text: 'Daring',       mostDim: 'D', leastDim: 'D' },
      { text: 'Diplomatic',   mostDim: 'C', leastDim: 'C' },
      { text: 'Satisfied',    mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 2
    traits: [
      { text: 'Cautious',     mostDim: 'C', leastDim: 'C' },
      { text: 'Determined',   mostDim: 'D', leastDim: 'D' },
      { text: 'Convincing',   mostDim: 'i', leastDim: 'i' },
      { text: 'Good-natured', mostDim: 'N', leastDim: 'N' },
    ]
  },
  { // Box 3
    traits: [
      { text: 'Friendly',     mostDim: 'N', leastDim: 'N' },
      { text: 'Accurate',     mostDim: 'C', leastDim: 'C' },
      { text: 'Outspoken',    mostDim: 'D', leastDim: 'D' },
      { text: 'Calm',         mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 4
    traits: [
      { text: 'Talkative',    mostDim: 'i', leastDim: 'i' },
      { text: 'Controlled',   mostDim: 'C', leastDim: 'C' },
      { text: 'Conventional', mostDim: 'S', leastDim: 'S' },
      { text: 'Decisive',     mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 5
    traits: [
      { text: 'Adventurous',  mostDim: 'D', leastDim: 'D' },
      { text: 'Insightful',   mostDim: 'C', leastDim: 'C' },
      { text: 'Outgoing',     mostDim: 'i', leastDim: 'i' },
      { text: 'Moderate',     mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 6
    traits: [
      { text: 'Gentle',       mostDim: 'S', leastDim: 'S' },
      { text: 'Persuasive',   mostDim: 'i', leastDim: 'i' },
      { text: 'Humble',       mostDim: 'N', leastDim: 'N' },
      { text: 'Original',     mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 7
    traits: [
      { text: 'Expressive',     mostDim: 'i', leastDim: 'i' },
      { text: 'Conscientious',  mostDim: 'C', leastDim: 'C' },
      { text: 'Dominant',       mostDim: 'D', leastDim: 'D' },
      { text: 'Responsive',     mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 8
    traits: [
      { text: 'Poised',       mostDim: 'i', leastDim: 'i' },
      { text: 'Observant',    mostDim: 'C', leastDim: 'C' },
      { text: 'Modest',       mostDim: 'S', leastDim: 'S' },
      { text: 'Impatient',    mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 9
    traits: [
      { text: 'Tactful',      mostDim: 'C', leastDim: 'C' },
      { text: 'Agreeable',    mostDim: 'S', leastDim: 'S' },
      { text: 'Magnetic',     mostDim: 'i', leastDim: 'i' },
      { text: 'Insistent',    mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 10
    traits: [
      { text: 'Brave',        mostDim: 'D', leastDim: 'D' },
      { text: 'Inspiring',    mostDim: 'i', leastDim: 'i' },
      { text: 'Submissive',   mostDim: 'S', leastDim: 'S' },
      { text: 'Timid',        mostDim: 'N', leastDim: 'N' },
    ]
  },
  { // Box 11
    traits: [
      { text: 'Reserved',     mostDim: 'C', leastDim: 'C' },
      { text: 'Obliging',     mostDim: 'S', leastDim: 'S' },
      { text: 'Strong-willed', mostDim: 'D', leastDim: 'D' },
      { text: 'Cheerful',     mostDim: 'i', leastDim: 'i' },
    ]
  },
  { // Box 12
    traits: [
      { text: 'Stimulating',  mostDim: 'i', leastDim: 'i' },
      { text: 'Kind',         mostDim: 'S', leastDim: 'S' },
      { text: 'Perceptive',   mostDim: 'C', leastDim: 'C' },
      { text: 'Independent',  mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 13
    traits: [
      { text: 'Competitive',  mostDim: 'D', leastDim: 'D' },
      { text: 'Considerate',  mostDim: 'S', leastDim: 'S' },
      { text: 'Joyful',       mostDim: 'i', leastDim: 'i' },
      { text: 'Private',      mostDim: 'C', leastDim: 'C' },
    ]
  },
  { // Box 14
    traits: [
      { text: 'Fussy',        mostDim: 'C', leastDim: 'C' },
      { text: 'Obedient',     mostDim: 'S', leastDim: 'S' },
      { text: 'Firm',         mostDim: 'D', leastDim: 'D' },
      { text: 'Playful',      mostDim: 'i', leastDim: 'i' },
    ]
  },
  { // Box 15
    traits: [
      { text: 'Attractive',     mostDim: 'i', leastDim: 'i' },
      { text: 'Introspective',  mostDim: 'C', leastDim: 'C' },
      { text: 'Stubborn',       mostDim: 'D', leastDim: 'D' },
      { text: 'Predictable',    mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 16
    traits: [
      { text: 'Logical',      mostDim: 'C', leastDim: 'C' },
      { text: 'Bold',         mostDim: 'D', leastDim: 'D' },
      { text: 'Loyal',        mostDim: 'S', leastDim: 'S' },
      { text: 'Charming',     mostDim: 'i', leastDim: 'i' },
    ]
  },
  { // Box 17
    traits: [
      { text: 'Sociable',     mostDim: 'i', leastDim: 'i' },
      { text: 'Patient',      mostDim: 'S', leastDim: 'S' },
      { text: 'Self-reliant', mostDim: 'D', leastDim: 'D' },
      { text: 'Soft-spoken',  mostDim: 'C', leastDim: 'C' },
    ]
  },
  { // Box 18
    traits: [
      { text: 'Willing',      mostDim: 'S', leastDim: 'S' },
      { text: 'Eager',        mostDim: 'D', leastDim: 'D' },
      { text: 'Thorough',     mostDim: 'C', leastDim: 'C' },
      { text: 'High-spirited', mostDim: 'i', leastDim: 'i' },
    ]
  },
  { // Box 19
    traits: [
      { text: 'Aggressive',   mostDim: 'D', leastDim: 'D' },
      { text: 'Extroverted',  mostDim: 'i', leastDim: 'i' },
      { text: 'Amiable',      mostDim: 'S', leastDim: 'S' },
      { text: 'Fearful',      mostDim: 'N', leastDim: 'N' },
    ]
  },
  { // Box 20
    traits: [
      { text: 'Confident',    mostDim: 'i', leastDim: 'i' },
      { text: 'Sympathetic',  mostDim: 'S', leastDim: 'S' },
      { text: 'Impartial',    mostDim: 'N', leastDim: 'N' },
      { text: 'Assertive',    mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 21
    traits: [
      { text: 'Well-disciplined', mostDim: 'C', leastDim: 'C' },
      { text: 'Generous',     mostDim: 'S', leastDim: 'S' },
      { text: 'Animated',     mostDim: 'i', leastDim: 'i' },
      { text: 'Persistent',   mostDim: 'D', leastDim: 'D' },
    ]
  },
  { // Box 22
    traits: [
      { text: 'Impulsive',    mostDim: 'i', leastDim: 'i' },
      { text: 'Introverted',  mostDim: 'N', leastDim: 'N' },
      { text: 'Forceful',     mostDim: 'D', leastDim: 'D' },
      { text: 'Easygoing',    mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 23
    traits: [
      { text: 'Good mixer',   mostDim: 'i', leastDim: 'i' },
      { text: 'Refined',      mostDim: 'C', leastDim: 'C' },
      { text: 'Vigorous',     mostDim: 'D', leastDim: 'D' },
      { text: 'Lenient',      mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 24
    traits: [
      { text: 'Captivating',  mostDim: 'i', leastDim: 'i' },
      { text: 'Contented',    mostDim: 'S', leastDim: 'S' },
      { text: 'Demanding',    mostDim: 'D', leastDim: 'D' },
      { text: 'Compliant',    mostDim: 'C', leastDim: 'C' },
    ]
  },
  { // Box 25
    traits: [
      { text: 'Argumentative', mostDim: 'D', leastDim: 'D' },
      { text: 'Systematic',   mostDim: 'C', leastDim: 'C' },
      { text: 'Cooperative',  mostDim: 'S', leastDim: 'S' },
      { text: 'Light-hearted', mostDim: 'i', leastDim: 'i' },
    ]
  },
  { // Box 26
    traits: [
      { text: 'Jovial',         mostDim: 'i', leastDim: 'i' },
      { text: 'Precise',        mostDim: 'C', leastDim: 'C' },
      { text: 'Direct',         mostDim: 'D', leastDim: 'D' },
      { text: 'Even-tempered',  mostDim: 'S', leastDim: 'S' },
    ]
  },
  { // Box 27
    traits: [
      { text: 'Restless',     mostDim: 'D', leastDim: 'D' },
      { text: 'Neighborly',   mostDim: 'S', leastDim: 'S' },
      { text: 'Appealing',    mostDim: 'i', leastDim: 'i' },
      { text: 'Careful',      mostDim: 'C', leastDim: 'C' },
    ]
  },
  { // Box 28
    traits: [
      { text: 'Respectful',   mostDim: 'C', leastDim: 'C' },
      { text: 'Pioneering',   mostDim: 'D', leastDim: 'D' },
      { text: 'Optimistic',   mostDim: 'i', leastDim: 'i' },
      { text: 'Helpful',      mostDim: 'S', leastDim: 'S' },
    ]
  },
];

// --- Segment Lookup Tables ---
const SEGMENT_TABLES = {
  graphI: {
    D: score => {
      if (score <= 0) return 1;
      if (score <= 2) return 2;
      if (score <= 3) return 3;
      if (score <= 5) return 4;
      if (score <= 7) return 5;
      if (score <= 10) return 6;
      return 7;
    },
    i: score => {
      if (score <= 0) return 1;
      if (score <= 1) return 2;
      if (score <= 3) return 3;
      if (score <= 5) return 4;
      if (score <= 7) return 5;
      if (score <= 11) return 6;
      return 7;
    },
    S: score => {
      if (score <= 0) return 1;
      if (score <= 2) return 2;
      if (score <= 4) return 3;
      if (score <= 6) return 4;
      if (score <= 8) return 5;
      if (score <= 10) return 6;
      return 7;
    },
    C: score => {
      if (score <= 0) return 1;
      if (score <= 2) return 2;
      if (score <= 3) return 3;
      if (score <= 5) return 4;
      if (score <= 7) return 5;
      if (score <= 11) return 6;
      return 7;
    },
  },
  graphII: {
    D: score => {
      if (score <= 2) return 7;
      if (score <= 4) return 6;
      if (score <= 5) return 5;
      if (score <= 7) return 4;
      if (score <= 8) return 3;
      if (score <= 9) return 2;
      return 1;
    },
    i: score => {
      if (score <= 0) return 7;
      if (score <= 1) return 6;
      if (score <= 3) return 5;
      if (score <= 4) return 4;
      if (score <= 6) return 3;
      if (score <= 8) return 2;
      return 1;
    },
    S: score => {
      if (score <= 0) return 7;
      if (score <= 2) return 6;
      if (score <= 3) return 5;
      if (score <= 4) return 4;
      if (score <= 6) return 3;
      if (score <= 9) return 2;
      return 1;
    },
    C: score => {
      if (score <= 1) return 7;
      if (score <= 2) return 6;
      if (score <= 3) return 5;
      if (score <= 5) return 4;
      if (score <= 7) return 3;
      if (score <= 11) return 2;
      return 1;
    },
  },
  graphIII: {
    D: score => {
      if (score >= 5) return 7;
      if (score >= 1) return 6;
      if (score >= -1) return 5;
      if (score >= -4) return 4;
      if (score >= -7) return 3;
      if (score >= -10) return 3;
      if (score >= -14) return 2;
      return 1;
    },
    i: score => {
      if (score >= 8) return 7;
      if (score >= 5) return 6;
      if (score >= 3) return 5;
      if (score >= 1) return 4;
      if (score >= -1) return 3;
      if (score >= -4) return 2;
      return 1;
    },
    S: score => {
      if (score >= 12) return 7;
      if (score >= 8) return 6;
      if (score >= 6) return 5;
      if (score >= 3) return 4;
      if (score >= 0) return 3;
      if (score >= -2) return 2;
      return 1;
    },
    C: score => {
      if (score >= 5) return 7;
      if (score >= 4) return 6;
      if (score >= 0) return 5;
      if (score >= -2) return 4;
      if (score >= -6) return 3;
      if (score >= -9) return 2;
      return 1;
    },
  },
};

// --- App State ---
let currentQuestion = 0;
let candidateName = '';
const answers = new Array(QUESTIONS.length).fill(null);

// --- DOM References ---
const welcomeScreen = document.getElementById('welcome');
const quizScreen = document.getElementById('quiz');
const resultsScreen = document.getElementById('results');
const candidateInput = document.getElementById('candidateName');
const nameError = document.getElementById('nameError');
const beginBtn = document.getElementById('beginBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const progressCurrent = document.getElementById('progressCurrent');
const progressTotal = document.getElementById('progressTotal');
const progressPct = document.getElementById('progressPct');
const progressFill = document.getElementById('progressFill');
const questionNumber = document.getElementById('questionNumber');
const traitRows = document.getElementById('traitRows');
const validationMsg = document.getElementById('validationMsg');
const resultsContent = document.getElementById('resultsContent');
const resultsName = document.getElementById('resultsName');
const toast = document.getElementById('toast');

// --- Screen Navigation ---
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Welcome ---
beginBtn.addEventListener('click', () => {
  const name = candidateInput.value.trim();
  if (!name) {
    nameError.textContent = 'Please enter your name to continue.';
    candidateInput.focus();
    return;
  }
  nameError.textContent = '';
  candidateName = name;
  currentQuestion = 0;
  showScreen(quizScreen);
  renderQuestion();
});

candidateInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') beginBtn.click();
});

// --- Quiz Rendering ---
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const answer = answers[currentQuestion];
  const total = QUESTIONS.length;
  const pct = Math.round((currentQuestion / total) * 100);

  progressCurrent.textContent = currentQuestion + 1;
  progressTotal.textContent = total;
  progressPct.textContent = `${pct}%`;
  progressFill.style.width = `${pct}%`;
  questionNumber.textContent = `Box ${currentQuestion + 1}`;

  let html = '';
  q.traits.forEach((trait, idx) => {
    const mostChecked = answer && answer.most === idx ? 'checked' : '';
    const leastChecked = answer && answer.least === idx ? 'checked' : '';

    let rowClasses = 'trait-row';
    if (answer) {
      if (answer.least === idx) rowClasses += ' dimmed-most';
      if (answer.most === idx) rowClasses += ' dimmed-least';
    }

    html += `
      <div class="${rowClasses}" data-idx="${idx}">
        <div class="trait-row__label">${trait.text}</div>
        <div class="trait-row__radio trait-row__radio--most">
          <input type="radio" name="most" value="${idx}" ${mostChecked}>
        </div>
        <div class="trait-row__radio trait-row__radio--least">
          <input type="radio" name="least" value="${idx}" ${leastChecked}>
        </div>
      </div>`;
  });
  traitRows.innerHTML = html;
  validationMsg.textContent = '';

  traitRows.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', handleSelection);
  });

  backBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  nextBtn.innerHTML = currentQuestion === total - 1 
    ? `See Results <svg class="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
    : `Next <svg class="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
}

function handleSelection() {
  const mostRadio = traitRows.querySelector('input[name="most"]:checked');
  const leastRadio = traitRows.querySelector('input[name="least"]:checked');

  const most = mostRadio ? parseInt(mostRadio.value) : null;
  const least = leastRadio ? parseInt(leastRadio.value) : null;

  if (most !== null && least !== null && most === least) {
    validationMsg.textContent = 'You cannot select the same trait for both MOST and LEAST.';
    this.checked = false;
    renderQuestion();
    return;
  }

  if (most !== null || least !== null) {
    answers[currentQuestion] = { most, least };
  }
  validationMsg.textContent = '';

  updateDimming(most, least);
}

function updateDimming(most, least) {
  traitRows.querySelectorAll('.trait-row').forEach(row => {
    const idx = parseInt(row.dataset.idx);
    row.classList.remove('dimmed-most', 'dimmed-least');
    if (least === idx) row.classList.add('dimmed-most');
    if (most === idx) row.classList.add('dimmed-least');
  });
}

// --- Navigation ---
backBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  const answer = answers[currentQuestion];

  if (!answer || answer.most === null || answer.least === null) {
    validationMsg.textContent = 'Please select both a MOST and a LEAST trait.';
    return;
  }

  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    calculateAndShowResults();
  }
});

// --- Scoring Engine ---
function calculateAndShowResults() {
  const dims = ['D', 'i', 'S', 'C', 'N'];
  const discDims = ['D', 'i', 'S', 'C'];

  const graphI = { D: 0, i: 0, S: 0, C: 0, N: 0 };
  const graphII = { D: 0, i: 0, S: 0, C: 0, N: 0 };

  for (let q = 0; q < QUESTIONS.length; q++) {
    const answer = answers[q];
    const traits = QUESTIONS[q].traits;

    if (answer && answer.most !== null) {
      const dim = traits[answer.most].mostDim;
      graphI[dim]++;
    }
    if (answer && answer.least !== null) {
      const dim = traits[answer.least].leastDim;
      graphII[dim]++;
    }
  }

  const graphIII = {};
  discDims.forEach(d => { graphIII[d] = graphI[d] - graphII[d]; });

  const segI = {};
  const segII = {};
  const segIII = {};
  discDims.forEach(d => {
    segI[d] = SEGMENT_TABLES.graphI[d](graphI[d]);
    segII[d] = SEGMENT_TABLES.graphII[d](graphII[d]);
    segIII[d] = SEGMENT_TABLES.graphIII[d](graphIII[d]);
  });

  const patternName = getClassicalPattern(segIII);
  const pattern = CLASSICAL_PATTERNS[patternName] || null;

  renderResults({ graphI, graphII, graphIII, segI, segII, segIII, patternName, pattern });
  showScreen(resultsScreen);
}

// --- Graph Display Data ---
const GRAPH_RANGES = {
  graphI: {
    D: [{seg:7,label:'11+'},{seg:6,label:'8–10'},{seg:5,label:'6–7'},{seg:4,label:'4–5'},{seg:3,label:'3'},{seg:2,label:'1–2'},{seg:1,label:'0'}],
    i: [{seg:7,label:'12+'},{seg:6,label:'8–11'},{seg:5,label:'6–7'},{seg:4,label:'4–5'},{seg:3,label:'2–3'},{seg:2,label:'1'},{seg:1,label:'0'}],
    S: [{seg:7,label:'11+'},{seg:6,label:'9–10'},{seg:5,label:'7–8'},{seg:4,label:'5–6'},{seg:3,label:'3–4'},{seg:2,label:'1–2'},{seg:1,label:'0'}],
    C: [{seg:7,label:'12+'},{seg:6,label:'8–11'},{seg:5,label:'6–7'},{seg:4,label:'4–5'},{seg:3,label:'3'},{seg:2,label:'1–2'},{seg:1,label:'0'}],
  },
  graphII: {
    D: [{seg:7,label:'0–2'},{seg:6,label:'3–4'},{seg:5,label:'5'},{seg:4,label:'6–7'},{seg:3,label:'8'},{seg:2,label:'9'},{seg:1,label:'10+'}],
    i: [{seg:7,label:'0'},{seg:6,label:'1'},{seg:5,label:'2–3'},{seg:4,label:'4'},{seg:3,label:'5–6'},{seg:2,label:'7–8'},{seg:1,label:'9+'}],
    S: [{seg:7,label:'0'},{seg:6,label:'1–2'},{seg:5,label:'3'},{seg:4,label:'4'},{seg:3,label:'5–6'},{seg:2,label:'7–9'},{seg:1,label:'10+'}],
    C: [{seg:7,label:'0–1'},{seg:6,label:'2'},{seg:5,label:'3'},{seg:4,label:'4–5'},{seg:3,label:'6–7'},{seg:2,label:'8–11'},{seg:1,label:'12+'}],
  },
  graphIII: {
    D: [{seg:7,label:'+5 / +28'},{seg:6,label:'+1 / +4'},{seg:5,label:'−1 / 0'},{seg:4,label:'−4 / −2'},{seg:3,label:'−10 / −5'},{seg:2,label:'−14 / −11'},{seg:1,label:'≤ −15'}],
    i: [{seg:7,label:'+8 / +28'},{seg:6,label:'+5 / +7'},{seg:5,label:'+3 / +4'},{seg:4,label:'+1 / +2'},{seg:3,label:'−1 / 0'},{seg:2,label:'−4 / −2'},{seg:1,label:'≤ −5'}],
    S: [{seg:7,label:'+12 / +26'},{seg:6,label:'+8 / +11'},{seg:5,label:'+6 / +7'},{seg:4,label:'+3 / +5'},{seg:3,label:'0 / +2'},{seg:2,label:'−2 / −1'},{seg:1,label:'≤ −3'}],
    C: [{seg:7,label:'+5 / +24'},{seg:6,label:'+4'},{seg:5,label:'0 / +3'},{seg:4,label:'−2 / −1'},{seg:3,label:'−6 / −3'},{seg:2,label:'−9 / −7'},{seg:1,label:'≤ −10'}],
  },
};

// --- Classical Profile Patterns ---
const CLASSICAL_PATTERNS = {
  'Achiever': {
    blurb: 'The motivation of Achievers is largely internal and flows from deeply felt personal goals. Their commitment to their own goals precludes an automatic acceptance of the group\'s goals. Achievers need to see how they can blend their personal goals with the organisation\'s goals. By retaining control over the direction of their lives, Achievers develop a strong sense of accountability.\n\nAchievers demonstrate a keen interest in their work and an intense, continual pursuit of accomplishment. They have a high opinion of their work and expect others to rely on themselves for results. Instead, they take on the work themselves to ensure that things are done to their satisfaction. An Achiever should communicate more with others to expand their thinking beyond either "I have to do it myself" or "I want all the credit." They may need assistance to find new approaches for achieving their desired results. Achievers function at peak efficiency and they expect recognition equal to their contribution.',
    emotions: 'Industrious and diligent; displays frustration',
    goal: 'Personal accomplishments, sometimes at the expense of the group\'s goal',
    judgesBy: 'Ability to achieve concrete results',
    influencesBy: 'Accountability for own work',
    valueToOrg: 'Sets and completes key result areas for self',
    overuses: 'Reliance on self; absorption in the task',
    underPressure: 'Becomes frustrated and impatient; becomes more of a "do-er" and less of a "delegator"',
    fears: 'Others with competing or inferior work standards affecting results',
    increaseEffectiveness: 'Reduction of "either-or" thinking; clarity of task priority; consideration of optional approaches; willingness to compromise short-term for long-range benefits',
  },
  'Agent': {
    blurb: 'Agents are attentive to both the human relations and task aspects of their work situation. Empathetic and supportive, they are good listeners and known for their willing ear. Agents make people feel wanted and needed. Because Agents respond to others\' needs, people do not feel rejected by Agents. Agents offer friendship and are willing to perform services for others.\n\nAgents have excellent potential for effectively organising and completing tasks. They naturally promote harmony and teamwork and are particularly good at doing for others what they find difficult to do for themselves. Agents fear conflict and dissension. Their supportive approach may enable others to tolerate a situation, rather than encouraging them to engage in active problem-solving. Although they are concerned with fitting into the group, Agents have a fair degree of independence.',
    emotions: 'Accepts affection; rejects aggression',
    goal: 'Group acceptance',
    judgesBy: 'Commitment to tolerate and include everyone',
    influencesBy: 'Empathy; friendship',
    valueToOrg: 'Supports, harmonizes, empathizes; focuses on service',
    overuses: 'Kindness',
    underPressure: 'Becomes persuasive, using information or key friendships if necessary',
    fears: 'Dissension; conflict',
    increaseEffectiveness: 'Strength in realization of who they are and what they can do; firmness and self-assertion; ability to say "no" when appropriate',
  },
  'Appraiser': {
    blurb: 'Appraisers make creative ideas serve practical purposes. They use direct methods to accomplish results. Appraisers are competitive, but other people tend to view them in a positive light rather than as aggressive because Appraisers are considerate of others. Instead of giving orders or commands, Appraisers involve people in the task through persuasion. They elicit the cooperation of those around them by explaining the rationale of the proposed activities.\n\nAppraisers help others visualise the steps that are necessary to accomplish results. They usually start from a detailed plan of action that they have developed to ensure an orderly progression toward results. Appraisers tend to become impatient when their standards are not maintained or when extensive follow-through is required. They are good critical thinkers and are verbal in their criticisms. Appraisers have better control of the situation if they relax and pace themselves.',
    emotions: 'Is driven to look good',
    goal: '"Victory" with flair',
    judgesBy: 'Ability to initiate activities',
    influencesBy: 'Competitive recognition',
    valueToOrg: 'Accomplishes goals with the team',
    overuses: 'Authority; ingenuity',
    underPressure: 'Becomes restless, critical, impatient',
    fears: '"Loss" or "failure"; others\' disapproval',
    increaseEffectiveness: 'Individual follow-through; empathy when showing disapproval; steadier pace',
  },
  'Counselor': {
    blurb: 'Counselors are particularly effective at solving people problems. They impress others with their warmth, empathy, and understanding. Their optimism makes it easy to look for the good in others. Counselors prefer to deal with others by building long-lasting relationships. As a good listener with a willing ear for problems, a Counselor often suggests gently and refrains from imposing his or her ideas on others.\n\nCounselors tend to be overly tolerant and patient with non-producers. Under pressure, they may have difficulty confronting performance problems. Counselors may be indirect when issuing orders, making demands, or disciplining others. Counselors often take criticism as a personal affront, but they respond well to attention and compliments for completed assignments. When in a position of responsibility, Counselors tend to be attentive to the quality of working conditions and provide adequate recognition for members of their group.',
    emotions: 'Being approachable; showing affection and understanding',
    goal: 'Friendship; happiness',
    judgesBy: 'Positive acceptance of others; ability to look for the good in people',
    influencesBy: 'Personal relationships; open door policy',
    valueToOrg: 'Remaining stable and predictable; developing a wide range of friendships; listening to others\' feelings',
    overuses: 'Indirect approach; tolerance',
    underPressure: 'Becomes overly flexible and intimate; is too trusting without differentiating among people',
    fears: 'Pressuring people; being accused of causing harm',
    increaseEffectiveness: 'Attention to realistic deadlines; initiative to complete the task',
  },
  'Creative': {
    blurb: 'Persons with a Creative Pattern display opposite forces in their behaviour. Their desire for tangible results is counterbalanced by an equally strong drive for perfection, and their aggressiveness is tempered by sensitivity. Although they think about and weigh possible pros and cons, they are restrained by the wish to explore all possible solutions before making a decision.\n\nCreative persons exhibit foresight when focusing on projects, and they bring about change. Since individuals with a Creative Pattern desire freedom to explore and have the authority to examine and retest findings, they may make daily decisions quickly but may be extremely cautious when making major decisions. In their drive for results and perfection, Creative persons may not be concerned about social poise. As a result, they may be cool, aloof, or blunt.',
    emotions: 'Accepts aggression; restrains expression',
    goal: 'Dominance; unique accomplishments',
    judgesBy: 'Personal standards; progressive ideas for accomplishing tasks',
    influencesBy: 'Ability to pace development of systems and innovative approaches',
    valueToOrg: 'Initiates or designs changes',
    overuses: 'Bluntness; critical or condescending attitude',
    underPressure: 'Becomes bored with routine work; sulks when restrained; acts independently',
    fears: 'Lack of influence; failure to achieve their standards',
    increaseEffectiveness: 'Warmth; tactful communication; effective team cooperation; recognition of existing sanctions',
  },
  'Developer': {
    blurb: 'Developers tend to be strong-willed individuals, continually seeking new horizons. As self-reliant, independent thinkers, they prefer to find their own solutions. Relatively free of the constraining influence of the group, Developers pursue a course beyond what others may consider. They can create innovative solutions.\n\nWhile they most often use direct, forceful behaviour, Developers can also shrewdly manipulate people and situations. When required to participate with others in situations that limit their individualism, Developers are apt to become belligerent. They are persistent when pursuing the results they desire and will do whatever is necessary to overcome obstacles to success. Developers are most interested in achieving their own goals. Opportunities for advancement and challenge are important to them. By focusing on results, they may lack empathy or seem uncaring by dismissing others\' concerns.',
    emotions: 'Is concerned with meeting personal needs',
    goal: 'New opportunities',
    judgesBy: 'Ability to meet the Developer\'s standards',
    influencesBy: 'Pursuit of solutions for problems; projection of personal sense of power',
    valueToOrg: 'Avoids "passing the buck"; seeks new or innovative problem-solving methods',
    overuses: 'Control over people and situations to accomplish own results',
    underPressure: 'Works alone to complete tasks; is belligerent if individualism is threatened or challenging opportunities disappear',
    fears: 'Boredom; loss of control',
    increaseEffectiveness: 'Patience, empathy; participation and collaboration with others; follow-through and attention to quality control',
  },
  'Inspirational': {
    blurb: 'Persons with the Inspirational Pattern consciously attempt to modify the thoughts and actions of others. They want to control their environment. They are astute at identifying and manipulating an individual\'s existing motives in order to direct that individual\'s behaviour toward a predetermined end.\n\nInspirational persons are clear about the results they want, but they do not always immediately verbalise them. They introduce the results they want only after they have primed the other person, offering friendship to those who desire acceptance, authority to those who seek power, and security to those who want a predictable environment. Inspirational persons can be charming in their interactions. They generally use their well-developed social skills to persuade others whenever possible, achieving goals through cooperation and persuasion.',
    emotions: 'Accepts aggression; downplays need for affection',
    goal: 'Control of their environment or audience',
    judgesBy: 'Projection of personal strength, character, and social power',
    influencesBy: 'Charm, direction, intimidation; use of rewards',
    valueToOrg: 'Acts as a "people mover"; initiates, demands, compliments, disciplines',
    overuses: 'Attitude that "the ends justify the means"',
    underPressure: 'Becomes manipulative, quarrelsome, or belligerent',
    fears: 'Weak behavior; loss of social status',
    increaseEffectiveness: 'Genuine sensitivity; willingness to help others succeed in their own personal development',
  },
  'Investigator': {
    blurb: 'Objective and analytical, Investigators are dispassionate "anchors of reality." Demanding independence, they combine tenacity and driving force, pushing forward an independent path toward a fixed goal. Investigators are successful at many things, not because of versatility, but due to their single-minded determination to follow through.\n\nInvestigators do well with challenging technical assignments in which they can use valid data to interpret the information and draw conclusions. They respond to logic rather than emotions. Investigators are not especially interested in pleasing people, and they prefer to work alone. They can be perceived as cold, blunt, and tactless. To increase their effectiveness in personal interactions, Investigators need to develop a greater understanding of other people, especially others\' emotions.',
    emotions: 'Is dispassionate; demonstrates self-discipline',
    goal: 'Power through formal roles and positions of authority',
    judgesBy: 'Use of factual information',
    influencesBy: 'Determination, tenacity',
    valueToOrg: 'Offers comprehensive follow-through; works determinedly on tasks individually or in a small group',
    overuses: 'Bluntness; suspicion of others',
    underPressure: 'Tends to internalize conflict; holds on to grudges',
    fears: 'Involvement with the masses; responsibility to sell abstract ideas',
    increaseEffectiveness: 'Flexibility; acceptance of others; personal involvement with others',
  },
  'Objective Thinker': {
    blurb: 'Objective Thinkers tend to have highly developed critical thinking abilities. They emphasise the importance of facts when drawing conclusions and planning actions, and they seek correctness and accuracy in everything they do. When they are in doubt about a course of action, they avoid public failure by preparing meticulously.\n\nObjective Thinkers prefer to work with people who, like themselves, are interested in maintaining a peaceful work environment. Considered shy by some, they may be reticent in expressing their feelings. They are particularly uncomfortable with aggressive people. Despite being mild-mannered, Objective Thinkers have a strong need to control their environment. They tend to exert this control indirectly by requiring others to adhere to rules and standards. With their tendency to worry, they may get bogged down in "analysis paralysis."',
    emotions: 'Rejects interpersonal aggression',
    goal: 'Correctness',
    judgesBy: 'Ability to think logically',
    influencesBy: 'Use of facts, data, and logical arguments',
    valueToOrg: 'Defines and clarifies; obtains, evaluates, and tests information',
    overuses: 'Analysis',
    underPressure: 'Becomes worrisome',
    fears: 'Irrational acts; ridicule',
    increaseEffectiveness: 'Self-disclosure; public discussion of their insights and opinions',
  },
  'Overshift': {
    blurb: 'Before you proceed, review your profile graph scores for the possibility of errors made in computing your responses or plotting your scores. An Overshift Pattern occurs when all four plotting points are positioned in the upper portion of the graph. This indicates that the person considers all four behavioural styles to be of equally high importance. As a result, the shape of the profile does not match any of the commonly occurring Classical Profile Patterns.\n\nClassical Profile Patterns represent combinations of high and low plotting points and the Overshift Pattern has only high plotting points. When an Overshift occurs in Graph III, it is recommended that one of the other two graphs be used for interpretation, but remember that Graph I or Graph II represents only half of the responses. It may be helpful to retake the profile with a clearer focus.',
    emotions: 'Considers all four behavioral styles to be of high importance',
    goal: 'Varies by situation',
    judgesBy: 'Varies by situation',
    influencesBy: 'Varies by situation',
    valueToOrg: 'Versatility; adaptability',
    overuses: 'May lack consistent focus',
    underPressure: 'May appear inconsistent',
    fears: 'Varies by situation',
    increaseEffectiveness: 'Review scores for possible errors; if valid, focus on the shape of the profile across all three graphs for interpretation',
    isSpecial: true,
  },
  'Perfectionist': {
    blurb: 'Perfectionists are systematic, precise thinkers and workers who follow procedure in both their personal and work lives. Extremely conscientious, they are diligent in work that requires attention to detail and accuracy. Because they desire stable conditions and predictable activities, Perfectionists are most comfortable in a clearly defined work environment. They want specifics on work expectations, time requirements, and evaluation procedures.\n\nPerfectionists may bog down in the details of the decision-making process. They can make major decisions but may be criticised for the amount of time they take to gather and analyse information. Although they like to hear the opinions of their managers, Perfectionists take risks when they have facts that they can interpret and use to draw conclusions. Perfectionists evaluate themselves and others by precise standards for achieving concrete results while adhering to standard operating procedures. By accepting sincere compliments, Perfectionists can increase their self-confidence.',
    emotions: 'Displays competence; is restrained and cautious',
    goal: 'Stability; predictable accomplishments',
    judgesBy: 'Precise standards',
    influencesBy: 'Attention to detail; accuracy',
    valueToOrg: 'Is conscientious; maintains standards; controls quality',
    overuses: 'Procedures and "fail-safe" controls; overdependence on people, products, and processes that have worked in past',
    underPressure: 'Becomes tactful and diplomatic',
    fears: 'Antagonism',
    increaseEffectiveness: 'Role flexibility; independence and interdependence; belief in self-worth',
  },
  'Persuader': {
    blurb: 'Persuaders work with people, striving to be friendly while pushing forward their own objectives. Outgoing and interested in people, Persuaders have the ability to gain the respect and confidence of various types of people. Persuaders can impress their thoughts on others, drawing people to them and retaining them as clients or friends.\n\nThe most favourable environment for Persuaders includes working with people, receiving challenging assignments, and experiencing a variety of work activities that require mobility. They seek work assignments that will give them the opportunity to look good. As a result of their natural positive outlook, Persuaders may be too optimistic about a project\'s results and others\' potential. Persuaders also tend to overestimate their ability to change the behaviour of others. Once alerted to the importance of the "little things," Persuaders can use the information to balance their enthusiasm with a realistic assessment of the situation.',
    emotions: 'Trusts others; is enthusiastic',
    goal: 'Authority and prestige; status symbols',
    judgesBy: 'Ability to verbalize; flexibility',
    influencesBy: 'Friendly, open manner; verbal adeptness',
    valueToOrg: 'Sells and closes; delegates responsibility; is poised and confident',
    overuses: 'Enthusiasm; selling ability; optimism',
    underPressure: 'Becomes indecisive and is easily persuaded; becomes organized to look good',
    fears: 'Fixed environment; complex relationships',
    increaseEffectiveness: 'Challenging assignments; attention to task-directed service and key details; objective data analysis',
  },
  'Practitioner': {
    blurb: 'Practitioners value proficiency in specialised areas. Spurred by a desire to be "good at something," they carefully monitor their own work performance. Although their aim is to be "the best" in one area, Practitioners frequently give the impression that they know something about everything.\n\nAs Practitioners interact with others, their general attitude is relaxed, diplomatic, and easygoing. This congenial attitude may change quickly in their own work area when they become intensely focused in order to meet high standards for performance. Because they value self-discipline, Practitioners evaluate others on the basis of their ability to focus on daily performance. Although they naturally concentrate on developing an organised approach to work and keeping their own skills sharp, Practitioners also need to help others build skills and increase their appreciation of those who contribute to the work effort.',
    emotions: 'Wants to keep up with others in effort and technical performance',
    goal: 'Personal growth',
    judgesBy: 'Self-discipline; position and promotions',
    influencesBy: 'Confidence in their ability to master new skills; development of "proper" procedures and actions',
    valueToOrg: 'Is skilled in technical and people problem-solving; displays proficiency and specialization',
    overuses: 'Overattention to personal objectives; unrealistic expectations of others',
    underPressure: 'Becomes restrained; is sensitive to criticism',
    fears: 'Predictability; no recognition as an "expert"',
    increaseEffectiveness: 'Genuine collaboration for common benefit; delegation of key tasks to appropriate individuals',
  },
  'Promoter': {
    blurb: 'Promoters have an extensive network of contacts. They are usually gregarious and socially adept, and they develop friendships easily. They rarely antagonise others intentionally. Promoters seek favourable social environments where they can develop and maintain their contacts. Verbally skilled, they promote their own ideas and create enthusiasm for others\' projects.\n\nSince Promoters prefer to participate and interact with others in activities, they may be less interested in task accomplishment. They may continue to seek out any situation that involves meeting people and socialising, even though their job requires attention to more solitary activities. Usually optimistic, Promoters tend to overestimate the ability of others. They often leap to favourable conclusions without considering all the facts. Time management may present challenges for Promoters.',
    emotions: 'Is willing to accept others',
    goal: 'Approval, popularity',
    judgesBy: 'Verbal skills',
    influencesBy: 'Praise, opportunities, favors',
    valueToOrg: 'Relieves tension; promotes projects and people, including self',
    overuses: 'Praise, optimism',
    underPressure: 'Becomes careless and sentimental; is disorganized',
    fears: 'Loss of social acceptance and self-worth',
    increaseEffectiveness: 'Control of time; objectivity; sense of urgency; emotional control; follow-through on promises, tasks',
  },
  'Result-Oriented': {
    blurb: 'Result-Oriented people display self-confidence, which some may interpret as arrogance. They actively seek opportunities that test and develop their abilities to accomplish results. Result-Oriented persons thrive on difficult, competitive situations, unique assignments, and "important" positions. They undertake responsibilities with an air of self-importance and display self-satisfaction once they have finished.\n\nResult-Oriented people tend to avoid constraining factors, such as direct controls, time-consuming details, and routine work. Because they are forceful and direct, they may have difficulties with others. Result-Oriented people prize their independence and may become restless when involved with group activities or committee work. They are quick thinkers, and they are impatient and fault-finding with those who are not. In their uncompromising drive for results, they may appear blunt and uncaring.',
    emotions: 'Verbalizes ego strength; displays rugged individualism',
    goal: 'Dominance and independence',
    judgesBy: 'Ability to accomplish the task quickly',
    influencesBy: 'Force of character; diligence',
    valueToOrg: 'Persistence; doggedness',
    overuses: 'Impatience; "win-lose" competition',
    underPressure: 'Becomes critical and fault-finding; resists participating with a team; may overstep boundaries',
    fears: 'Others will take advantage of them; slowness, especially in task activities; being a pushover',
    increaseEffectiveness: 'Verbalization of their reasoning; consideration of other views and ideas about goals and problem solutions; genuine concern for others; patience and humility',
  },
  'Specialist': {
    blurb: 'Specialists "wear well" with others. With their moderate, controlled stance and modest demeanour, they are able to work well with a number of different styles. Specialists are considerate, patient, and always willing to help those they consider friends. They build close relationships with a relatively small group of associates in their work environment.\n\nTheir efforts are directed toward retaining familiar and predictable patterns. Most effective in specialised areas, Specialists plan their work along directed channels and achieve a remarkably consistent level of performance. Specialists are slow to adapt to change. Prior conditioning gives them time to change their procedures while maintaining a consistent level of performance. Specialists may also require help when starting new projects or developing shortcut methods to meet deadlines.',
    emotions: 'Is calculatingly moderate; accommodates others',
    goal: 'Maintenance of the status quo; controlled environment',
    judgesBy: 'Friendship standards; competence',
    influencesBy: 'Consistent performance; accommodation of others',
    valueToOrg: 'Plans short term; is predictable, consistent; maintains steady pace',
    overuses: 'Modesty; low risk-taking; passive resistance to innovation',
    underPressure: 'Becomes adaptable to those in authority and thinks with the group',
    fears: 'Change; disorganization',
    increaseEffectiveness: 'Public discussion of their ideas; self-confidence based on feedback; shortcut methods',
  },
  'Tight': {
    blurb: 'Before you proceed, review your profile graph scores for the possibility of errors made in computing your responses or plotting your scores. A Tight Pattern occurs when all four plotting points are positioned in the midline of the graph with only one segment difference between the four points. This indicates that the person considers all four behavioural styles to be of equal importance. As a result, the shape of the profile does not match any of the commonly occurring patterns.\n\nClassical Profile Patterns represent the combination of high and low plotting points and the Tight Pattern has plotting points only in the midline. When a Tight Pattern occurs in Graph III, it is recommended that one of the other two graphs be used for interpretation, but remember that Graph I or Graph II represents only half of the responses. It may be helpful to retake the profile with a clearer focus.',
    emotions: 'Considers all four behavioral styles to be of equal importance',
    goal: 'Varies by situation',
    judgesBy: 'Varies by situation',
    influencesBy: 'Varies by situation',
    valueToOrg: 'Balance across all behavioral styles',
    overuses: 'May lack distinctive approach',
    underPressure: 'May appear indecisive',
    fears: 'Varies by situation',
    increaseEffectiveness: 'Review scores for possible errors; if valid, use one of the other two graphs for interpretation as Graph III represents only the difference between the two halves of responses',
    isSpecial: true,
  },
  'Undershift': {
    blurb: 'Before you proceed, review your profile graph scores for the possibility of errors made in computing your responses or plotting your scores. An Undershift Pattern occurs when all four plotting points are positioned in the lower portion of the graph. This indicates that the person considers all four behavioural styles to be of equally low importance. As a result, the shape of the profile does not match any of the commonly occurring Classical Profile Patterns.\n\nClassical Profile Patterns represent the combination of high and low plotting points and the Undershift Pattern has only low plotting points. When an Undershift Pattern occurs in Graph III, it is recommended that one of the other two graphs be used for interpretation, but remember that Graph I or Graph II represents only half of the responses. It may be helpful to retake the profile with a clearer focus.',
    emotions: 'Considers all four behavioral styles to be of equally low importance',
    goal: 'Varies by situation',
    judgesBy: 'Varies by situation',
    influencesBy: 'Varies by situation',
    valueToOrg: 'May be highly adaptable',
    overuses: 'May lack consistent focus',
    underPressure: 'May appear disengaged',
    fears: 'Varies by situation',
    increaseEffectiveness: 'Review scores for possible errors; if valid, use one of the other two graphs for interpretation as Graph III represents only the difference between the two halves of responses',
    isSpecial: true,
  },
};

// --- Classical Profile Pattern Lookup (2401 entries from reference PDF) ---
const PATTERN_ABBREVS = {
  OV:'Overshift',UN:'Undershift',TI:'Tight',CR:'Creative',
  IN:'Inspirational',AP:'Appraiser',AC:'Achiever',RO:'Result-Oriented',
  IV:'Investigator',DV:'Developer',PM:'Promoter',SP:'Specialist',
  OT:'Objective Thinker',PF:'Perfectionist',PR:'Practitioner',
  CO:'Counselor',AG:'Agent',PE:'Persuader'
};

const PATTERN_DATA = "OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,AC,AC,AC,AC,RO,RO,RO,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,IN,IN,IN,IN,OV,OV,OV,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,CR,CR,CR,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,AC,AC,AC,AC,OV,OV,OV,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,CR,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,IV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,OV,OV,OV,CO,CO,CO,CO,OV,OV,OV,CO,CO,CO,OV,OV,OV,OV,PE,PE,PE,PE,AP,AP,AP,AP,PE,PE,PE,AP,AP,AP,PE,PE,PE,PE,AP,AP,AP,AP,PE,PE,PE,AP,AP,AP,PE,PE,PE,PE,OV,OV,OV,AG,AG,AG,AG,OV,OV,OV,AG,AG,AG,AG,OV,OV,OV,AG,CO,CO,CO,AP,AP,AP,TI,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,PE,PE,PE,PE,OV,OV,OV,AG,AG,AG,AG,OV,OV,OV,AG,AG,AG,AG,OV,OV,OV,CO,CO,CO,CO,AP,AP,AP,TI,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,AP,AP,AP,IN,IN,IN,IN,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,TI,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,CR,CR,CR,RO,RO,RO,RO,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,IV,IV,IV,AC,AC,AC,AC,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,CR,CR,CR,DV,DV,DV,DV,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,AG,AG,AG,AG,PR,PR,TI,CO,CO,CO,CO,PR,PR,PR,TI,CO,CO,CO,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,TI,TI,SP,SP,SP,OT,OT,TI,TI,TI,UN,UN,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,SP,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PM,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,TI,TI,UN,UN,OT,OT,OT,TI,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PR,PR,PR,AG,AG,AG,AG,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,CO,CO,CO,CO,PR,PR,PR,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,AP,AP,CO,CO,CO,CO,CO,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,AP,AP,AP,PM,PM,PM,PM,PF,PF,PF,SP,SP,SP,SP,PF,PF,SP,SP,SP,SP,SP,PF,PF,SP,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,PF,PF,PF,SP,SP,SP,SP,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN,OT,OT,OT,UN,UN,UN,UN";

const PATTERN_LOOKUP = {};
(function() {
  const codes = PATTERN_DATA.split(',');
  let idx = 0;
  for (let d = 7; d >= 1; d--)
    for (let i = 7; i >= 1; i--)
      for (let s = 7; s >= 1; s--)
        for (let c = 7; c >= 1; c--)
          PATTERN_LOOKUP[`${d}${i}${s}${c}`] = PATTERN_ABBREVS[codes[idx++]];
})();

function getClassicalPattern(segIII) {
  const key = `${segIII.D}${segIII.i}${segIII.S}${segIII.C}`;
  return PATTERN_LOOKUP[key] || 'Tight';
}

function renderGraph(title, graphKey, rawScores, segments) {
  const dims = ['D', 'i', 'S', 'C'];
  const ranges = GRAPH_RANGES[graphKey];

  let rows = '';
  for (let seg = 7; seg >= 1; seg--) {
    rows += `<tr>`;
    dims.forEach(d => {
      const range = ranges[d].find(r => r.seg === seg);
      const isActive = segments[d] === seg;
      const cellClass = isActive ? 'graph-cell graph-cell--active graph-cell--' + d : 'graph-cell';
      rows += `<td class="${cellClass}">
        <span class="graph-cell__range">${range ? range.label : ''}</span>
        ${isActive ? '<span class="graph-cell__score">' + (rawScores[d] > 0 && graphKey === 'graphIII' ? '+' : '') + rawScores[d] + '</span>' : ''}
      </td>`;
    });
    rows += `<td class="graph-seg">${seg}</td></tr>`;
  }

  return `
    <div class="pp-graph">
      <div class="pp-graph__header">${title}</div>
      <table class="pp-graph__table">
        <thead>
          <tr>
            <th class="pp-graph__th pp-graph__th--D">D</th>
            <th class="pp-graph__th pp-graph__th--i">i</th>
            <th class="pp-graph__th pp-graph__th--S">S</th>
            <th class="pp-graph__th pp-graph__th--C">C</th>
            <th class="pp-graph__th pp-graph__th--seg"><small>SEG</small></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="pp-graph__footer">
        <div class="pp-graph__seg-row">
          ${dims.map(d => `<span class="pp-graph__seg-num pp-graph__seg-num--${d}">${segments[d]}</span>`).join('')}
          <span class="pp-graph__seg-label">Segment Numbers</span>
        </div>
      </div>
    </div>`;
}

// --- Results Rendering ---
function renderResults({ graphI, graphII, graphIII, segI, segII, segIII, patternName, pattern }) {
  const discDims = ['D', 'i', 'S', 'C'];
  const dimColors = { D: 'dim-D', i: 'dim-i', S: 'dim-S', C: 'dim-C' };

  const g1Total = graphI.D + graphI.i + graphI.S + graphI.C + graphI.N;
  const g2Total = graphII.D + graphII.i + graphII.S + graphII.C + graphII.N;

  resultsName.textContent = escapeHtml(candidateName);

  let html = '';

  // Validation warning
  if (g1Total !== 28 || g2Total !== 28) {
    html += `<div style="background:#fef3c7;border:1px solid #f59e0b;padding:1rem;border-radius:10px;margin-bottom:2rem;font-size:0.875rem;">
      <strong>Warning:</strong> Graph I total = ${g1Total}, Graph II total = ${g2Total} (expected 28 each)
    </div>`;
  }

  // Profile Graphs (page 1 in PDF)
  html += `
    <div class="results-section">
      <div class="results-section__title">Personal Profile System Graphs</div>
      <div class="pp-graphs-row">
        ${renderGraph('Graph I', 'graphI', graphI, segI)}
        ${renderGraph('Graph II', 'graphII', graphII, segII)}
        ${renderGraph('Graph III', 'graphIII', graphIII, segIII)}
      </div>
    </div>`;

  // Classical Profile Pattern (page 2 in PDF)
  if (patternName && pattern) {
    const isSpecial = pattern.isSpecial;
    html += `
    <div class="pdf-page-break"></div>
    <div class="results-section">
      <div class="results-section__title">Classical Profile Pattern</div>
      <div class="pattern-card ${isSpecial ? 'pattern-card--special' : ''}">
        <div class="pattern-card__header">
          <div class="pattern-card__name">${patternName} Pattern</div>
          <div class="pattern-card__code">Graph III Segments: D=${segIII.D} i=${segIII.i} S=${segIII.S} C=${segIII.C}</div>
        </div>
        ${pattern.blurb ? `<div class="pattern-card__blurb">${pattern.blurb.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>` : ''}
        <div class="pattern-card__body">
          <div class="pattern-card__grid">
            <div class="pattern-card__item">
              <div class="pattern-card__label">Emotions</div>
              <div class="pattern-card__value">${pattern.emotions}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Goal</div>
              <div class="pattern-card__value">${pattern.goal}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Judges Others By</div>
              <div class="pattern-card__value">${pattern.judgesBy}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Influences Others By</div>
              <div class="pattern-card__value">${pattern.influencesBy}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Value to Organisation</div>
              <div class="pattern-card__value">${pattern.valueToOrg}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Overuses</div>
              <div class="pattern-card__value">${pattern.overuses}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Under Pressure</div>
              <div class="pattern-card__value">${pattern.underPressure}</div>
            </div>
            <div class="pattern-card__item">
              <div class="pattern-card__label">Fears</div>
              <div class="pattern-card__value">${pattern.fears}</div>
            </div>
            <div class="pattern-card__item pattern-card__item--full">
              <div class="pattern-card__label">Would Increase Effectiveness With</div>
              <div class="pattern-card__value">${pattern.increaseEffectiveness}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  // Tally Box
  const symbols = { D: 'Z', i: '■', S: '▲', C: '★', N: 'N' };
  const tallyDims = ['D', 'i', 'S', 'C', 'N'];
  html += `
    <div class="results-section">
      <div class="results-section__title">Tally Box</div>
      <div class="tally-box">
        <div class="tally-box__header">
          <div class="tally-box__col-head">Graph I<br><small>MOST</small></div>
          <div class="tally-box__op"></div>
          <div class="tally-box__col-head">Graph II<br><small>LEAST</small></div>
          <div class="tally-box__op"></div>
          <div class="tally-box__col-head">Graph III<br><small>DIFFERENCE</small></div>
        </div>
        ${tallyDims.map(d => {
          const isN = d === 'N';
          const colorClass = isN ? '' : dimColors[d];
          return `
          <div class="tally-box__row">
            <div class="tally-box__dim ${colorClass}">${d}</div>
            <div class="tally-box__cell">
              <span class="tally-box__symbol">${symbols[d]}</span>
              <span class="tally-box__value">${graphI[d]}</span>
            </div>
            <div class="tally-box__op">−</div>
            <div class="tally-box__dim ${colorClass}">${d}</div>
            <div class="tally-box__cell">
              <span class="tally-box__symbol">${symbols[d]}</span>
              <span class="tally-box__value">${graphII[d]}</span>
            </div>
            <div class="tally-box__op">=</div>
            ${isN
              ? '<div class="tally-box__cell tally-box__cell--no-compute" style="grid-column:span 2"><small>DO NOT<br>COMPUTE</small></div>'
              : `<div class="tally-box__dim ${colorClass}">${d}</div><div class="tally-box__cell"><span class="tally-box__value">${graphIII[d] > 0 ? '+' : ''}${graphIII[d]}</span></div>`
            }
          </div>`;
        }).join('')}
        <div class="tally-box__footer">
          <div>Column total: <strong>${g1Total}</strong></div>
          <div></div>
          <div>Column total: <strong>${g2Total}</strong></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>`;

  // Actions
  html += `
    <div class="results__actions">
      <button class="btn btn--primary" id="downloadPdfBtn">
        <svg class="btn__icon btn__icon--left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        Download PDF
      </button>
      <button class="btn btn--secondary" id="copyResultsBtn">
        <svg class="btn__icon btn__icon--left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Copy to Clipboard
      </button>
      <button class="btn btn--ghost" onclick="startOver()">
        <svg class="btn__icon btn__icon--left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/>
          <path d="M3 3v9h9"/>
        </svg>
        Start Over
      </button>
    </div>`;

  resultsContent.innerHTML = html;

  document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    downloadResultsPdf();
  });

  document.getElementById('copyResultsBtn').addEventListener('click', () => {
    copyResultsToClipboard({ graphI, graphII, graphIII, segI, segII, segIII });
  });
}

// --- Utility Functions ---
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function startOver() {
  currentQuestion = 0;
  candidateName = '';
  candidateInput.value = '';
  answers.fill(null);
  showScreen(welcomeScreen);
}

function copyResultsToClipboard({ graphI, graphII, graphIII, segI, segII, segIII }) {
  const discDims = ['D', 'i', 'S', 'C'];
  let text = `DISC Profile Results — ${candidateName}\n`;
  text += `${'='.repeat(40)}\n\n`;
  text += `Graph I (Most):   D=${graphI.D}  i=${graphI.i}  S=${graphI.S}  C=${graphI.C}  N=${graphI.N}\n`;
  text += `Graph II (Least):  D=${graphII.D}  i=${graphII.i}  S=${graphII.S}  C=${graphII.C}  N=${graphII.N}\n`;
  text += `Graph III (Diff):  D=${graphIII.D > 0 ? '+' : ''}${graphIII.D}  i=${graphIII.i > 0 ? '+' : ''}${graphIII.i}  S=${graphIII.S > 0 ? '+' : ''}${graphIII.S}  C=${graphIII.C > 0 ? '+' : ''}${graphIII.C}\n\n`;
  text += `Segments (I):  D=${segI.D}  i=${segI.i}  S=${segI.S}  C=${segI.C}\n`;
  text += `Segments (II): D=${segII.D}  i=${segII.i}  S=${segII.S}  C=${segII.C}\n`;
  text += `Segments (III):D=${segIII.D}  i=${segIII.i}  S=${segIII.S}  C=${segIII.C}\n`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Results copied to clipboard');
  }).catch(() => {
    showToast('Failed to copy — try selecting text manually');
  });
}

function downloadResultsPdf() {
  if (typeof html2pdf === 'undefined') {
    showToast('PDF library not loaded — try refreshing');
    return;
  }

  // Temporarily add name header, hide tally box and action buttons for PDF capture
  const nameHeader = document.createElement('div');
  nameHeader.id = 'pdfNameHeader';
  nameHeader.style.cssText = 'text-align:center;margin-bottom:16px;padding:14px;background:#008746;border-radius:10px;';
  nameHeader.innerHTML = `
    <div style="color:#FAFFC8;font-size:20px;font-weight:300;">${escapeHtml(candidateName)}</div>
    <div style="color:rgba(250,255,200,0.8);font-size:13px;margin-top:4px;">DISC Personality Profile.</div>`;
  resultsContent.insertBefore(nameHeader, resultsContent.firstChild);

  const actionsEl = resultsContent.querySelector('.results__actions');
  if (actionsEl) actionsEl.style.display = 'none';

  // Hide tally box section for PDF
  const tallySection = Array.from(resultsContent.querySelectorAll('.results-section'))
    .find(s => s.querySelector('.tally-box'));
  if (tallySection) tallySection.style.display = 'none';

  // Add compact class to shrink pattern card for PDF page 2
  resultsContent.classList.add('pdf-render');

  // Scroll to top, wait for fonts + scroll to settle, then capture
  window.scrollTo(0, 0);

  document.fonts.ready.then(() => {
    // Wait 300ms for scroll to fully repaint before html2canvas clones the document
    return new Promise(resolve => setTimeout(resolve, 300));
  }).then(() => {
    const opt = {
      margin: [8, 8, 8, 8],
      filename: `DISC_Results_${candidateName.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        scrollY: 0,
        scrollX: 0,
        windowHeight: resultsContent.scrollHeight + 200,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { before: '.pdf-page-break' },
    };

    html2pdf().set(opt).from(resultsContent).save().then(() => {
      nameHeader.remove();
      if (actionsEl) actionsEl.style.display = '';
      if (tallySection) tallySection.style.display = '';
      resultsContent.classList.remove('pdf-render');
      showToast('PDF downloaded');
    }).catch(err => {
      console.error('PDF generation error:', err);
      nameHeader.remove();
      if (actionsEl) actionsEl.style.display = '';
      if (tallySection) tallySection.style.display = '';
      resultsContent.classList.remove('pdf-render');
      showToast('PDF download failed — try Print (Ctrl+P)');
    });
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// --- Console test function ---
function runScoringTest() {
  const testAnswers = QUESTIONS.map(() => ({ most: 0, least: 1 }));

  const graphI = { D: 0, i: 0, S: 0, C: 0, N: 0 };
  const graphII = { D: 0, i: 0, S: 0, C: 0, N: 0 };

  for (let q = 0; q < QUESTIONS.length; q++) {
    const traits = QUESTIONS[q].traits;
    graphI[traits[testAnswers[q].most].mostDim]++;
    graphII[traits[testAnswers[q].least].leastDim]++;
  }

  const g1Total = Object.values(graphI).reduce((a, b) => a + b, 0);
  const g2Total = Object.values(graphII).reduce((a, b) => a + b, 0);

  console.log('Graph I:', graphI, 'Total:', g1Total);
  console.log('Graph II:', graphII, 'Total:', g2Total);
  console.log('Totals valid:', g1Total === 28 && g2Total === 28);

  const discDims = ['D', 'i', 'S', 'C'];
  const graphIII = {};
  discDims.forEach(d => { graphIII[d] = graphI[d] - graphII[d]; });
  console.log('Graph III:', graphIII);

  const segI = {}, segII = {}, segIII = {};
  discDims.forEach(d => {
    segI[d] = SEGMENT_TABLES.graphI[d](graphI[d]);
    segII[d] = SEGMENT_TABLES.graphII[d](graphII[d]);
    segIII[d] = SEGMENT_TABLES.graphIII[d](graphIII[d]);
  });
  console.log('Segments I:', segI);
  console.log('Segments II:', segII);
  console.log('Segments III:', segIII);

  const allValid = discDims.every(d =>
    segI[d] >= 1 && segI[d] <= 7 &&
    segII[d] >= 1 && segII[d] <= 7 &&
    segIII[d] >= 1 && segIII[d] <= 7
  );
  console.log('All segments 1-7:', allValid);

  return { graphI, graphII, graphIII, segI, segII, segIII, valid: g1Total === 28 && g2Total === 28 && allValid };
}
