// === DISC Personality Quiz - Application Logic ===

// --- Quiz Data: 28 questions ---
// Each trait has: text, mostDim (dimension when selected as MOST), leastDim (dimension when selected as LEAST)
// Dimensions: D, i, S, C, N (N = neutral/not scored in Graph III)
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
// Each function takes a raw score and returns a segment number 1-7.

const SEGMENT_TABLES = {
  graphI: {  // MOST tallies
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
  graphII: {  // LEAST tallies (NOTE: higher raw = lower segment)
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
  graphIII: {  // Difference (MOST - LEAST), can be negative
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
// answers[i] = { most: traitIndex, least: traitIndex } or null
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
const progressLabel = document.getElementById('progressLabel');
const progressPct = document.getElementById('progressPct');
const progressFill = document.getElementById('progressFill');
const questionNumber = document.getElementById('questionNumber');
const traitRows = document.getElementById('traitRows');
const validationMsg = document.getElementById('validationMsg');
const resultsContent = document.getElementById('resultsContent');
const toast = document.getElementById('toast');

// --- Screen Navigation ---
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
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

  progressLabel.textContent = `Question ${currentQuestion + 1} of ${total}`;
  progressPct.textContent = `${pct}%`;
  progressFill.style.width = `${pct}%`;
  questionNumber.textContent = `Box ${currentQuestion + 1}`;

  // Build trait rows
  let html = '';
  q.traits.forEach((trait, idx) => {
    const mostChecked = answer && answer.most === idx ? 'checked' : '';
    const leastChecked = answer && answer.least === idx ? 'checked' : '';

    // Determine dimming: if another trait is selected as MOST, dim this trait's MOST radio (and vice versa)
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

  // Event listeners for radio buttons
  traitRows.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', handleSelection);
  });

  // Navigation button states
  backBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  nextBtn.textContent = currentQuestion === total - 1 ? 'See Results' : 'Next';
}

function handleSelection() {
  const mostRadio = traitRows.querySelector('input[name="most"]:checked');
  const leastRadio = traitRows.querySelector('input[name="least"]:checked');

  const most = mostRadio ? parseInt(mostRadio.value) : null;
  const least = leastRadio ? parseInt(leastRadio.value) : null;

  // Check for same trait selected as both
  if (most !== null && least !== null && most === least) {
    validationMsg.textContent = 'You cannot select the same trait for both MOST and LEAST.';
    // Undo the last change
    this.checked = false;
    // Re-render to fix state
    renderQuestion();
    return;
  }

  // Save answer
  if (most !== null || least !== null) {
    answers[currentQuestion] = { most, least };
  }
  validationMsg.textContent = '';

  // Update row dimming
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
    // Scroll to top of quiz
    quizScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Calculate and show results
    calculateAndShowResults();
  }
});

// --- Scoring Engine ---
function calculateAndShowResults() {
  const dims = ['D', 'i', 'S', 'C', 'N'];
  const discDims = ['D', 'i', 'S', 'C'];

  // Tally Graph I (MOST) and Graph II (LEAST)
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

  // Graph III = Graph I - Graph II (D, i, S, C only)
  const graphIII = {};
  discDims.forEach(d => { graphIII[d] = graphI[d] - graphII[d]; });

  // Segment numbers
  const segI = {};
  const segII = {};
  const segIII = {};
  discDims.forEach(d => {
    segI[d] = SEGMENT_TABLES.graphI[d](graphI[d]);
    segII[d] = SEGMENT_TABLES.graphII[d](graphII[d]);
    segIII[d] = SEGMENT_TABLES.graphIII[d](graphIII[d]);
  });

  // Render results
  renderResults({ graphI, graphII, graphIII, segI, segII, segIII });

  showScreen(resultsScreen);

}

// --- Graph Display Data ---
// Raw score ranges for each segment (7 at top, 1 at bottom) per dimension
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
  const dimLabels = { D: 'Dominance', i: 'Influence', S: 'Steadiness', C: 'Conscientiousness' };
  const dimColors = { D: 'dim-D', i: 'dim-i', S: 'dim-S', C: 'dim-C' };

  // Validate totals
  const g1Total = graphI.D + graphI.i + graphI.S + graphI.C + graphI.N;
  const g2Total = graphII.D + graphII.i + graphII.S + graphII.C + graphII.N;

  let html = `
    <div class="results__name">${escapeHtml(candidateName)}</div>
    <div class="results__subtitle">DISC Personality Profile Results</div>`;

  // Validation warning if totals don't add up
  if (g1Total !== 28 || g2Total !== 28) {
    html += `<div style="background:#fff3cd;border:1px solid #ffc107;padding:0.75rem;border-radius:var(--radius);margin-bottom:1rem;font-size:0.85rem;">
      Warning: Graph I total = ${g1Total}, Graph II total = ${g2Total} (expected 28 each)</div>`;
  }

  // Tally Box (matches paper scoring sheet)
  const symbols = { D: 'Z', i: '■', S: '▲', C: '★', N: 'N' };
  const tallyDims = ['D', 'i', 'S', 'C', 'N'];
  html += `
    <div class="tally-section">
      <div class="tally-section__title">Tally Box</div>
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

  // Profile Graphs (matching paper scoring sheet)
  html += `
    <div class="tally-section">
      <div class="tally-section__title">Profile Graphs</div>
      <div class="pp-graphs-row">
        ${renderGraph('Graph I', 'graphI', graphI, segI)}
        ${renderGraph('Graph II', 'graphII', graphII, segII)}
        ${renderGraph('Graph III', 'graphIII', graphIII, segIII)}
      </div>
    </div>`;

  // Tally Table
  html += `
    <div class="tally-section">
      <div class="tally-section__title">Raw Score Tallies</div>
      <table class="tally-table">
        <thead>
          <tr>
            <th></th>
            ${discDims.map(d => `<th class="${dimColors[d]}">${d}</th>`).join('')}
            <th>N</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Graph I (Most)</td>
            ${discDims.map(d => `<td class="${dimColors[d]}">${graphI[d]}</td>`).join('')}
            <td>${graphI.N}</td>
            <td><strong>${g1Total}</strong></td>
          </tr>
          <tr>
            <td>Graph II (Least)</td>
            ${discDims.map(d => `<td class="${dimColors[d]}">${graphII[d]}</td>`).join('')}
            <td>${graphII.N}</td>
            <td><strong>${g2Total}</strong></td>
          </tr>
          <tr>
            <td>Graph III (Diff)</td>
            ${discDims.map(d => `<td class="${dimColors[d]}">${graphIII[d] > 0 ? '+' : ''}${graphIII[d]}</td>`).join('')}
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>`;

  // Segment Number Cards
  html += `
    <div class="tally-section">
      <div class="tally-section__title">Segment Numbers</div>
      <div class="segment-grid">
        <div class="segment-card">
          <div class="segment-card__title">Graph I — Most</div>
          ${discDims.map(d => `
            <div class="segment-card__row">
              <span class="segment-card__label ${dimColors[d]}">${d}</span>
              <span class="segment-card__value">${segI[d]}</span>
            </div>`).join('')}
        </div>
        <div class="segment-card">
          <div class="segment-card__title">Graph II — Least</div>
          ${discDims.map(d => `
            <div class="segment-card__row">
              <span class="segment-card__label ${dimColors[d]}">${d}</span>
              <span class="segment-card__value">${segII[d]}</span>
            </div>`).join('')}
        </div>
        <div class="segment-card">
          <div class="segment-card__title">Graph III — Diff</div>
          ${discDims.map(d => `
            <div class="segment-card__row">
              <span class="segment-card__label ${dimColors[d]}">${d}</span>
              <span class="segment-card__value">${segIII[d]}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;

  // Bar Charts for Graph III
  const maxAbs = Math.max(
    ...discDims.map(d => Math.abs(graphIII[d])),
    1
  );

  html += `
    <div class="chart-section">
      <div class="chart-section__title">Graph III — Difference Profile</div>
      ${discDims.map(d => {
        const val = graphIII[d];
        const pctAbs = (Math.abs(val) / 28) * 100;
        const isPositive = val >= 0;
        return `
          <div class="chart-bar">
            <div class="chart-bar__label ${dimColors[d]}">${d}</div>
            <div class="chart-bar__track chart-bar__track--bipolar">
              <div class="chart-bar__fill chart-bar__fill--${d} chart-bar__fill--${isPositive ? 'positive' : 'negative'}"
                   style="width: ${pctAbs / 2}%"></div>
            </div>
            <div class="chart-bar__value">${val > 0 ? '+' : ''}${val}</div>
          </div>`;
      }).join('')}
    </div>`;

  // Actions
  html += `
    <div class="results__actions">
      <button class="btn btn--primary" id="downloadPdfBtn">Download PDF</button>
      <button class="btn btn--secondary" id="copyResultsBtn">Copy to Clipboard</button>
      <button class="btn btn--ghost" onclick="startOver()">Start Over</button>
    </div>`;

  resultsContent.innerHTML = html;

  // Download PDF handler
  document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    downloadResultsPdf();
  });

  // Copy to clipboard handler
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
  const el = resultsContent;
  const actions = el.querySelector('.results__actions');
  if (actions) actions.style.display = 'none';

  const opt = {
    margin:      [10, 10, 10, 10],
    filename:    `DISC_Results_${candidateName.replace(/\s+/g, '_')}.pdf`,
    image:       { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(el).save().then(() => {
    if (actions) actions.style.display = '';
    showToast('PDF downloaded');
  }).catch(() => {
    if (actions) actions.style.display = '';
    showToast('PDF download failed — try Print instead');
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// --- Console test function ---
function runScoringTest() {
  // Set all MOST = first trait (index 0), all LEAST = second trait (index 1)
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
