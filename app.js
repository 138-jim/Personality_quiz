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

  renderResults({ graphI, graphII, graphIII, segI, segII, segIII });
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
function renderResults({ graphI, graphII, graphIII, segI, segII, segIII }) {
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

  // Profile Graphs
  html += `
    <div class="results-section">
      <div class="results-section__title">Personal Profile System Graphs</div>
      <div class="pp-graphs-row">
        ${renderGraph('Graph I', 'graphI', graphI, segI)}
        ${renderGraph('Graph II', 'graphII', graphII, segII)}
        ${renderGraph('Graph III', 'graphIII', graphIII, segIII)}
      </div>
    </div>`;

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

  // Build a self-contained container with white background for clean PDF
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:fixed;left:-9999px;top:0;width:900px;background:#fff;padding:24px;font-family:Reddit Sans,sans-serif;color:#212121;';

  // Name header
  wrapper.innerHTML = `
    <div style="text-align:center;margin-bottom:16px;padding:14px;background:#008746;border-radius:10px;">
      <div style="color:#fff;font-size:20px;font-weight:800;">${escapeHtml(candidateName)}</div>
      <div style="color:rgba(255,255,255,0.8);font-size:13px;margin-top:4px;">DISC Personality Profile</div>
    </div>`;

  // Clone results without action buttons
  const clone = resultsContent.cloneNode(true);
  const actions = clone.querySelector('.results__actions');
  if (actions) actions.remove();
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  const opt = {
    margin: [8, 8, 8, 8],
    filename: `DISC_Results_${candidateName.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(wrapper).save().then(() => {
    document.body.removeChild(wrapper);
    showToast('PDF downloaded');
  }).catch(err => {
    console.error('PDF generation error:', err);
    if (wrapper.parentNode) document.body.removeChild(wrapper);
    showToast('PDF download failed — try Print (Ctrl+P)');
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
