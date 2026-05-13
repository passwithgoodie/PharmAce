// PharmAce — Quiz Engine

const QUESTIONS = [
  {
    topic: 'Cardiology', difficulty: 'Intermediate',
    stem: 'A 68-year-old man with heart failure (EF 32%) and CKD (eGFR 28 mL/min) is being started on an ACE inhibitor. Which parameter is most important to monitor in the first week?',
    options: ['Serum potassium and creatinine', 'Fasting blood glucose', 'Liver enzymes (AST/ALT)', 'Complete blood count (CBC)'],
    correct: 0,
    explanation: 'ACE inhibitors reduce aldosterone, causing potassium retention (hyperkalemia risk) and can cause a transient creatinine rise — especially concerning with eGFR of 28. A creatinine rise >30% or K+ >5.5 mmol/L warrants withholding the drug.',
    ref: 'Canadian Cardiovascular Society Heart Failure Guidelines, 2021'
  },
  {
    topic: 'Infectious disease', difficulty: 'Intermediate',
    stem: 'A 45-year-old female prescribed clarithromycin for CAP is also taking warfarin for atrial fibrillation. What is the most likely effect of this combination?',
    options: ['Decreased anticoagulation effect', 'Increased INR due to CYP3A4/CYP2C9 inhibition', 'No clinically significant interaction', 'Increased clarithromycin toxicity'],
    correct: 1,
    explanation: 'Clarithromycin inhibits CYP3A4 and CYP2C9, the enzyme responsible for S-warfarin metabolism. This raises warfarin levels and INR significantly, increasing bleeding risk. Monitor INR within 3–5 days of starting clarithromycin.',
    ref: "Stockley's Drug Interactions; Health Canada"
  },
  {
    topic: 'Endocrinology', difficulty: 'Intermediate',
    stem: 'A type 2 diabetic patient started on an SGLT-2 inhibitor. Which adverse effect is most unique to this drug class compared to other oral antidiabetics?',
    options: ['Hypoglycemia as monotherapy', 'Genital mycotic infections', 'Weight gain', 'QT prolongation'],
    correct: 1,
    explanation: 'SGLT-2 inhibitors promote glucosuria, creating a glucose-rich urogenital environment that significantly increases risk of genital mycotic infections (e.g., candidal vulvovaginitis). Hypoglycemia risk as monotherapy is low, and weight loss (not gain) is characteristic of this class.',
    ref: 'Diabetes Canada Clinical Practice Guidelines, 2023'
  },
  {
    topic: 'Psychiatry', difficulty: 'Intermediate',
    stem: 'A 32-year-old stable on lithium 900 mg/day presents with 3-day fever, vomiting, and diarrhea. Lithium level is 1.8 mmol/L (therapeutic: 0.6–1.2). What is the most appropriate next step?',
    options: ['Continue current dose, repeat level in 1 week', 'Reduce dose by 50%, recheck in 3 days', 'Hold lithium and initiate IV fluids; monitor closely', 'Switch to valproate immediately'],
    correct: 2,
    explanation: 'This is lithium toxicity from volume depletion due to GI losses. Lithium is renally cleared — dehydration dramatically reduces clearance. Hold lithium immediately and give IV normal saline to restore renal perfusion and enhance lithium excretion.',
    ref: 'CAMH Lithium Toxicity Protocol; UpToDate'
  },
  {
    topic: 'Cardiology', difficulty: 'Advanced',
    stem: 'A post-STEMI patient on dual antiplatelet therapy (aspirin + ticagrelor) is also on rifampin for latent TB. What is the most significant concern?',
    options: ['Increased ticagrelor toxicity', 'Reduced ticagrelor efficacy due to CYP3A4 induction', 'Elevated aspirin levels', 'No significant interaction — safe to co-prescribe'],
    correct: 1,
    explanation: 'Ticagrelor is a CYP3A4 substrate. Rifampin is a potent CYP3A4 inducer that reduces ticagrelor plasma concentrations by up to 86%, potentially rendering it ineffective. Strong CYP3A4 inducers are contraindicated with ticagrelor per Health Canada.',
    ref: 'Brilinta Product Monograph; Canadian Pharmacists Association'
  },
  {
    topic: 'Nephrology', difficulty: 'Intermediate',
    stem: 'A 55-year-old with eGFR of 18 mL/min is prescribed metformin for newly diagnosed type 2 diabetes. What is the most appropriate action?',
    options: ['Start metformin at full dose — no adjustment needed', 'Start at half dose with monthly renal monitoring', 'Metformin is contraindicated — choose an alternative', 'Start metformin only if eGFR improves above 30'],
    correct: 2,
    explanation: 'Metformin is contraindicated when eGFR falls below 30 mL/min due to risk of lactic acidosis from drug accumulation. With an eGFR of 18, an alternative agent (e.g., a DPP-4 inhibitor with renal dose adjustment) should be selected.',
    ref: 'Diabetes Canada Guidelines 2023; Health Canada Metformin Monograph'
  },
  {
    topic: 'Respirology', difficulty: 'Intermediate',
    stem: 'A COPD patient on tiotropium is prescribed a new medication that causes urinary retention as a side effect. Which drug class is most likely responsible for worsening this effect?',
    options: ['Selective beta-1 blocker', 'Another anticholinergic agent', 'Inhaled corticosteroid', 'Long-acting beta-2 agonist'],
    correct: 1,
    explanation: 'Tiotropium is a long-acting anticholinergic (muscarinic antagonist). Adding another anticholinergic agent produces additive effects, worsening urinary retention, dry mouth, constipation, and confusion — particularly in older adults.',
    ref: 'GOLD COPD Guidelines 2023; Beers Criteria'
  },
  {
    topic: 'Pharmacokinetics', difficulty: 'Advanced',
    stem: 'A patient with severe hepatic impairment (Child-Pugh C) is prescribed a drug that undergoes 95% first-pass metabolism. Compared to a healthy individual, what change is most expected?',
    options: ['Decreased bioavailability due to reduced absorption', 'Increased bioavailability and elevated plasma levels', 'No change — renal clearance compensates', 'Faster elimination due to enzyme upregulation'],
    correct: 1,
    explanation: 'First-pass metabolism occurs in the liver. In severe hepatic impairment, this metabolism is significantly reduced, meaning more drug reaches systemic circulation (increased bioavailability). This can lead to supratherapeutic levels and toxicity — dose reduction is typically required.',
    ref: 'Katzung Basic & Clinical Pharmacology; Health Canada Drug Labelling Guidelines'
  }
];

const TOPICS = ['All topics', 'Cardiology', 'Endocrinology', 'Infectious disease', 'Psychiatry', 'Nephrology', 'Respirology', 'Pharmacokinetics'];

let currentMode = 'practice';
let quizQuestions = [];
let currentQ = 0;
let correct = 0;
let wrong = 0;
let flaggedCount = 0;
let answered = false;
let isFlagged = false;
let timerInterval = null;
let timeLeft = 0;

// Build topic chips on home screen
function initTopics() {
  const scroll = document.getElementById('topics-scroll');
  if (!scroll) return;
  TOPICS.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (t === 'All topics' ? ' active' : '');
    chip.textContent = t;
    chip.onclick = () => {
      document.querySelectorAll('.topics-scroll .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    };
    scroll.appendChild(chip);
  });
}

// Build dashboard topic rows
function initDashboard() {
  const rows = document.getElementById('topic-rows');
  if (!rows) return;
  const topicData = [
    { name: 'Cardiology', pct: 82, color: 'var(--green)' },
    { name: 'Endocrinology', pct: 64, color: 'var(--gold)' },
    { name: 'Infectious disease', pct: 48, color: 'var(--red)' },
    { name: 'Psychiatry', pct: 71, color: 'var(--gold)' },
    { name: 'Nephrology', pct: 55, color: 'var(--gold)' },
    { name: 'Respirology', pct: 38, color: 'var(--red)' },
    { name: 'Pharmacokinetics', pct: 90, color: 'var(--green)' },
  ];
  rows.innerHTML = topicData.map(t => `
    <div class="topic-row">
      <span class="topic-name">${t.name}</span>
      <div class="topic-bar-wrap"><div class="topic-bar-fill" style="width:${t.pct}%;background:${t.color};"></div></div>
      <span class="topic-pct" style="color:${t.color};">${t.pct}%</span>
    </div>`).join('');
}

function startQuiz(mode) {
  currentMode = mode;
  currentQ = 0; correct = 0; wrong = 0; flaggedCount = 0;
  answered = false; isFlagged = false;

  // Filter questions by mode
  if (mode === 'weak') {
    quizQuestions = QUESTIONS.filter(q => ['Infectious disease','Respirology'].includes(q.topic));
  } else {
    quizQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 8);
  }

  showScreen('screen-quiz');
  setNav('nav-quiz');

  if (mode === 'mock') {
    timeLeft = quizQuestions.length * 90; // 90s per question
    startTimer();
  } else {
    document.getElementById('timer').textContent = '';
    if (timerInterval) clearInterval(timerInterval);
  }

  loadQuestion();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) { clearInterval(timerInterval); showResults(); }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timer');
  if (!el) return;
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  el.textContent = `${m}:${s.toString().padStart(2,'0')}`;
  el.className = 'timer' + (timeLeft < 60 ? ' warn' : '');
}

function loadQuestion() {
  if (currentQ >= quizQuestions.length) { showResults(); return; }
  answered = false; isFlagged = false;

  const q = quizQuestions[currentQ];
  document.getElementById('q-stem').textContent = q.stem;
  document.getElementById('q-topic').textContent = q.topic;
  document.getElementById('q-diff').textContent = q.difficulty;
  document.getElementById('q-counter').textContent = `${currentQ + 1} / ${quizQuestions.length}`;
  document.getElementById('qprogress').style.width = `${(currentQ / quizQuestions.length) * 100}%`;

  const opts = document.getElementById('options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const el = document.createElement('div');
    el.className = 'opt';
    el.innerHTML = `<div class="opt-letter">${'ABCD'[i]}</div><div class="opt-text">${opt}</div>`;
    el.onclick = () => selectOpt(i, el);
    opts.appendChild(el);
  });

  document.getElementById('explanation-box').classList.remove('visible');
  document.getElementById('next-btn').disabled = true;
  document.getElementById('flag-btn').className = 'flag-btn';
  document.getElementById('flag-btn').textContent = '🚩 Flag';
}

function selectOpt(idx, el) {
  if (answered) return;
  answered = true;
  const q = quizQuestions[currentQ];
  document.querySelectorAll('.opt').forEach(o => o.classList.add('disabled'));

  if (idx === q.correct) {
    el.classList.add('correct'); correct++;
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('.opt')[q.correct].classList.add('correct');
    wrong++;
  }

  // Show explanation in practice mode
  if (currentMode !== 'mock') {
    document.getElementById('exp-text').textContent = q.explanation;
    document.getElementById('exp-ref').textContent = '📖 ' + q.ref;
    document.getElementById('explanation-box').classList.add('visible');
  }

  document.getElementById('next-btn').disabled = false;
}

function nextQ() {
  currentQ++;
  loadQuestion();
}

function toggleFlag() {
  isFlagged = !isFlagged;
  if (isFlagged) flaggedCount++;
  const btn = document.getElementById('flag-btn');
  btn.textContent = isFlagged ? '🚩 Flagged' : '🚩 Flag';
  btn.className = 'flag-btn' + (isFlagged ? ' flagged' : '');
}

function confirmExit() {
  if (currentQ > 0 && confirm('Exit quiz? Your progress will be lost.')) {
    if (timerInterval) clearInterval(timerInterval);
    showScreen('screen-home'); setNav('nav-home');
  } else if (currentQ === 0) {
    showScreen('screen-home'); setNav('nav-home');
  }
}

function showResults() {
  if (timerInterval) clearInterval(timerInterval);
  const total = quizQuestions.length;
  const pct = Math.round((correct / total) * 100);

  showScreen('screen-result');

  // Animate the ring
  const ring = document.querySelector('.result-ring');
  if (ring) ring.style.background = `conic-gradient(var(--gold) ${pct * 3.6}deg, var(--bg3) ${pct * 3.6}deg)`;

  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('r-correct').textContent = correct;
  document.getElementById('r-wrong').textContent = wrong;
  document.getElementById('r-flagged').textContent = flaggedCount;

  let msg, sub;
  if (pct >= 80) { msg = 'Excellent work!'; sub = "You're well on track for the PEBC."; }
  else if (pct >= 65) { msg = 'Good effort.'; sub = 'Review the explanations and keep practising.'; }
  else { msg = 'Keep going.'; sub = 'Daily practice is the key. You can do this.'; }
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-sub').textContent = `${correct} of ${total} correct — ${sub}`;

  // Suggested next topics
  const sug = document.getElementById('suggestions');
  const weakTopics = [...new Set(quizQuestions.filter((q,i) => i >= correct).map(q => q.topic))].slice(0, 2);
  sug.innerHTML = weakTopics.map(t =>
    `<div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="startQuiz('practice')">
      <span style="font-size:1.25rem;">📖</span>
      <div><div style="font-size:13px;font-weight:500;color:var(--text);">${t}</div><div style="font-size:12px;color:var(--text3);">Practise this topic</div></div>
      <span style="margin-left:auto;color:var(--text3);">→</span>
    </div>`
  ).join('') || '<p style="font-size:13px;color:var(--text2);">Great job — no weak areas detected!</p>';
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  initTopics();
  initDashboard();
});
