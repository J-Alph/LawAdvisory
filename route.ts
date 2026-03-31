@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --pelican: #002147;
  --pelican-mid: #0a3560;
  --gold: #C8961E;
  --gold-light: #F7EDD0;
  --cream: #FDFAF4;
  --ink: #1C1C1E;
  --muted: #6B6560;
  --border: #E2DDD6;
  --success: #1A5C38;
  --success-bg: #D6EDDF;
  --danger: #8B1A1A;
  --danger-bg: #F9E0E0;
  --warning: #7A4B00;
  --warning-bg: #FEF3DA;
}

* { box-sizing: border-box; }

body {
  font-family: 'Source Serif 4', Georgia, serif;
  background: var(--cream);
  color: var(--ink);
}

.font-display { font-family: 'Playfair Display', serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

/* Verdict badges */
.verdict-taxable {
  background: var(--danger-bg);
  color: var(--danger);
  border: 1px solid #e8b4b4;
}
.verdict-exempt {
  background: var(--success-bg);
  color: var(--success);
  border: 1px solid #9dd4b4;
}
.verdict-conditional {
  background: var(--warning-bg);
  color: var(--warning);
  border: 1px solid #f0d080;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

/* Animate in */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeUp { animation: fadeUp 0.4s ease both; }

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.animate-pulse-dot { animation: pulse-dot 1.8s ease-in-out infinite; }

/* Prose in analysis */
.analysis-body p { margin-bottom: 0.85rem; line-height: 1.75; }
.analysis-body ul { list-style: disc; padding-left: 1.4rem; margin-bottom: 0.85rem; }
.analysis-body li { margin-bottom: 0.3rem; line-height: 1.65; }
.analysis-body strong { font-weight: 600; color: var(--ink); }
