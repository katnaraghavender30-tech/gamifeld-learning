// Lightweight SPA router with hash routes
const view = document.getElementById('view');
const backBtn = document.getElementById('backBtn');

// Subjects per class as per your requirements
const CLASS_SUBJECTS = {
  6: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  7: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  8: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  9: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  10: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  11: ['Maths 1A', 'Maths 1B', 'Physics', 'Chemistry', 'English', 'Sanskrit'],
  12: ['Maths 2A', 'Maths 2B', 'Physics', 'Chemistry', 'English', 'Sanskrit']
};

const CLASS_CONTENT = {};
for (let cls = 6; cls <= 12; cls++) {
  const subjects = CLASS_SUBJECTS[cls];
  CLASS_CONTENT[cls] = subjects.map((subject) => ({
    subject,
    chapters: generateChapters(cls, subject)
  }));
}

function generateChapters(cls, subject) {
  // Chapters for 6–10
  const junior = {
    Maths: [
      'Numbers and Place Value',
      'Fractions and Decimals',
      'Geometry Basics'
    ],
    English: [
      'Grammar Basics',
      'Reading Comprehension',
      'Creative Writing'
    ],
    Science: [
      'Living and Non-Living',
      'Force and Energy',
      'Air, Water, Soil'
    ],
    Social: [
      'Our Community',
      'History Basics',
      'Geography of India'
    ],
    EVS: [
      'Environment Around Us',
      'Weather and Climate',
      'Natural Resources'
    ]
  };

  // Chapters for 11
  if (cls === 11) {
    switch (subject) {
      case 'Maths 1A':
        return ['Functions', 'Limits & Continuity', 'Derivatives'];
      case 'Maths 1B':
        return ['Probability', 'Vectors', 'Complex Numbers'];
      case 'Physics':
        return ['Mechanics', 'Waves & Oscillations', 'Optics'];
      case 'Chemistry':
        return ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry'];
      case 'English':
        return ['Prose', 'Poetry', 'Grammar'];
      case 'Sanskrit':
        return ['Shlokas', 'Stories', 'Grammar'];
    }
  }

  // Chapters for 12
  if (cls === 12) {
    switch (subject) {
      case 'Maths 2A':
        return ['Integration', 'Differential Equations', 'Applications of Derivatives'];
      case 'Maths 2B':
        return ['Probability Distributions', 'Linear Programming', 'Statistics'];
      case 'Physics':
        return ['Electrostatics', 'Magnetism', 'Modern Physics'];
      case 'Chemistry':
        return ['Solid State', 'Solutions', 'Polymers'];
      case 'English':
        return ['Prose', 'Poetry', 'Grammar'];
      case 'Sanskrit':
        return ['Shlokas', 'Stories', 'Grammar'];
    }
  }

  return junior[subject] || ['Coming Soon'];
}

// Router
const routes = {
  '#/home': renderHome,
  '#/class': renderClass,
  '#/chapters': renderChapters,
  '#/chapter': renderChapter,
  '#/game': renderGame,
  '#/rewards': renderRewards,
  '#/help': renderHelp
};

function navigate(hash) {
  location.hash = hash;
}

function parseHash() {
  const [path, query = ''] = location.hash.split('?');
  const params = new URLSearchParams(query);
  return { path, params };
}

function setBackVisibility() {
  const { path } = parseHash();
  backBtn.disabled = path === '#/home' || path === '';
}

backBtn.addEventListener('click', () => history.back());

// Bottom nav clicks
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.link));
});

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
  if (!location.hash) navigate('#/home');
  handleRoute();
});

function handleRoute() {
  const { path, params } = parseHash();
  const renderer = routes[path] || renderHome;
  renderer(params);
  setBackVisibility();
}

// Renderers
function renderHome() {
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="badge" aria-hidden="true">🎒 Welcome</div>
      <h2 class="hero-title">Learn with Fun</h2>
      <p class="hero-sub">Tap your class and start playing to learn!</p>
    </section>
    <section class="grid pop-in" aria-label="Choose your class">
      ${Array.from({ length: 7 }, (_, i) => i + 6).map(cls => `
        <button class="card" onclick="goClass(${cls})" aria-label="Class ${cls}">
          <span class="emoji">${classEmoji(cls)}</span>
          <span class="label">Class ${cls}</span>
        </button>
      `).join('')}
    </section>
  `;
}

function classEmoji(cls) {
  const emojis = ['🧮','📘','🔬','🌍','🌿','⚛️','🎓'];
  return emojis[(cls - 6) % emojis.length];
}

window.goClass = function goClass(cls) {
  navigate(`#/class?cls=${cls}`);
}

function renderClass(params) {
  const cls = Number(params.get('cls')) || 6;
  const subjects = CLASS_CONTENT[cls];
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">📖 Subjects</span>
      </div>
      <h3 class="section-title">Choose a subject</h3>
    </section>
    <section class="grid pop-in" aria-label="Choose subject">
      ${subjects.map(s => `
        <button class="card" onclick="goChapters(${cls}, '${s.subject}')" aria-label="${s.subject}">
          <span class="emoji">${subjectEmoji(s.subject)}</span>
          <span class="label">${s.subject}</span>
        </button>
      `).join('')}
    </section>
  `;
}

function subjectEmoji(subj) {
  switch (subj) {
    case 'Maths': case 'Maths 1A': case 'Maths 1B':
    case 'Maths 2A': case 'Maths 2B': return '🧮';
    case 'Science': return '🔬';
    case 'Physics': return '⚛️';
    case 'Chemistry': return '⚗️';
    case 'English': return '📘';
    case 'EVS': return '🌿';
    case 'Social': return '🌍';
    case 'Sanskrit': return '📜';
    default: return '📚';
  }
}

window.goChapters = function goChapters(cls, subject) {
  navigate(`#/chapters?cls=${cls}&subject=${encodeURIComponent(subject)}`);
}

function renderChapters(params) {
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const entry = CLASS_CONTENT[cls].find(s => s.subject === subject);
  const chapters = entry?.chapters || [];
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">${subjectEmoji(subject)} ${subject}</span>
      </div>
      <h3 class="section-title">Pick a chapter</h3>
    </section>
    <section class="grid pop-in" aria-label="Choose chapter">
      ${chapters.map((name, i) => `
        <button class="card" onclick="goChapter(${cls}, '${subject}', ${i+1})" aria-label="Chapter ${i+1}: ${name}">
          <span class="emoji">${['⭐','🌈','🚀'][i % 3]}</span>
          <span class="label">Chapter ${i+1}</span>
          <div class="muted">${name}</div>
        </button>
      `).join('')}
    </section>
  `;
}

window.goChapter = function goChapter(cls, subject, ch) {
  navigate(`#/chapter?cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

function renderChapter(params) {
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const ch = Number(params.get('ch')) || 1;
  const title = `Class ${cls} · ${subject} · Chapter ${ch}`;
  const tip = 'Play and learn. Tap the green button to try!';
  view.innerHTML = `
    <section class="game-area pop-in">
      <div class="badge">${subjectEmoji(subject)} ${title}</div>
      <div class="progress-wrap">
        <div class="progress-bar"><div id="progressFill" class="progress-fill" style="width: 0%"></div></div>
        <div class="stars" id="stars" aria-live="polite">☆☆☆</div>
      </div>
      <div class="game-card">
        <h3 style="margin:0 0 8px">Let's Learn</h3>
        <p class="muted">${tip}</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
          <button class="primary-btn" onclick="startExercise(${cls}, '${subject}', ${ch})">▶️ Try Exercise</button>
          <button class="primary-btn" onclick="startQuiz(${cls}, '${subject}', ${ch})">🎮 Start Quiz</button>
        </div>
        <div style="height:8px"></div>
        <div class="muted">Learn with pictures and small games.</div>
      </div>
    </section>
  `;
}

window.startExercise = function startExercise(cls, subject, ch) {
  navigate(`#/game?mode=exercise&cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

window.startQuiz = function startQuiz(cls, subject, ch) {
  navigate(`#/game?mode=quiz&cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

function renderGame(params) {
  const mode = params.get('mode') || 'exercise';
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const ch = Number(params.get('ch')) || 1;
  const header = mode === 'quiz' ? 'Quick Quiz' : 'Fun Exercise';

  view.innerHTML = `
    <section class="game-area pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">${subjectEmoji(subject)} ${subject}</span>
        <span class="chip">📖 Ch ${ch}</span>
      </div>
      <h3 class="section-title">${header}</h3>
      <div class="game-card" id="gameRoot"></div>
    </section>
  `;

  // Show a simple MCQ template to be replaced with real content later
  renderMCQTemplate('gameRoot', {
    question: mode === 'quiz' ? 'Which shape has 3 sides?' : '2 + 1 = ?',
    options: mode === 'quiz' ? ['Square', 'Triangle', 'Circle'] : ['1', '2', '3'],
    correctIndex: mode === 'quiz' ? 1 : 2
  });
}

function renderMCQTemplate(rootId, { question, options, correctIndex }) {
  const root = document.getElementById(rootId);
  root.innerHTML = `
    <div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="emoji" aria-hidden="true">❓</span>
        <div style="font-size:20px; font-weight:800;">${question}</div>
      </div>
      <div class="options">
        ${options.map((opt, i) => `
          <button class="option-btn" data-index="${i}">${opt}</button>
        `).join('')}
      </div>
      <div style="margin-top:10px; display:flex; align-items:center; gap:8px;">
        <div id="feedback" class="badge" aria-live="polite">Tap an answer</div>
        <button class="primary-btn" id="nextBtn" style="display:none">Next ▶️</button>
      </div>
    </div>
  `;

  const buttons = root.querySelectorAll('.option-btn');
  const feedback = root.querySelector('#feedback');
  const nextBtn = root.querySelector('#nextBtn');

  buttons.forEach(btn => btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.index);
    buttons.forEach(b => b.disabled = true);
    if (idx === correctIndex) {
      btn.classList.add('correct');
      feedback.textContent = 'Great! ⭐';
      playDing();
    } else {
      btn.classList.add('incorrect');
      feedback.textContent = 'Try again next time';
    }
    nextBtn.style.display = 'inline-flex';
    nextBtn.onclick = () => history.back();
  }));
}

function renderRewards() {
  view.innerHTML = `
    <section class="hero pop-in" style="text-align:center">
      <h3 class="section-title">Your Rewards</h3>
      <p class="muted">Play games to win stars and badges!</p>
      <div class="grid" aria-label="Badges">
        ${['⭐ Star Starter','🏅 Quick Thinker','🌟 Super Learner','🎯 Goal Getter','🧠 Brainy'].map(b => `
          <div class="card" role="img" aria-label="${b}">
            <span class="emoji">${b.split(' ')[0]}</span>
            <span class="label">${b.split(' ').slice(1).join(' ')}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderHelp() {
  view.innerHTML = `
    <section class="hero pop-in">
      <h3 class="section-title">Help</h3>
      <ul>
        <li>Tap big buttons to open.</li>
        <li>Use back arrow to go back.</li>
        <li>Finish games to earn stars.</li>
      </ul>
    </section>
  `;
}

// Simple sound feedback
let audioCtx;
function playDing() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'triangle';
    o.frequency.value = 880;
    g.gain.value = 0.001;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    const now = audioCtx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.00001, now + 0.25);
    o.stop(now + 0.26);
  } catch (e) { /* ignore */ }
}
