import { useEffect, useState, type ReactNode } from 'react';
import { Sun, Moon, Terminal } from 'lucide-react';

type View = 'me' | 'work' | 'experience' | 'achievements';
type Mode = 'dark' | 'light';

const themes = {
  dark: {
    bg: '#1a1b26', panel: '#20212e', border: '#313244', text: '#cdd6f4',
    muted: '#b4b9c8', blue: '#89b4fa', green: '#a6e3a1', yellow: '#f9e2af',
    lavender: '#b4befe', titlebar: '#16161e', dotClose: '#f7768e', dotMin: '#e0af68', dotMax: '#9ece6a',
  },
  light: {
    bg: '#F8F0E8', panel: '#FDF2F6', border: '#171717', text: '#141414',
    muted: '#9390A8', blue: '#141414', green: '#D06A8E', yellow: '#141414',
    lavender: '#D06A8E', titlebar: '#F0E7DE', dotClose: '#E0556A', dotMin: '#E0A632', dotMax: '#5BB36E',
  },
};

const profile = {
  name: 'Aditi',
  domain: 'aditityagi.dev',
  role: 'Graduate Engineer Trainee at HCLTech',
  phone: '+91 9289488964',
  email: 'tyagi.aditi03@gmail.com',
  socials: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    leetcode: 'LeetCode',
  },
};

const navItems: { id: View; label: string; shortcut: string }[] = [
  { id: 'me', label: '/me', shortcut: 'm' },
  { id: 'work', label: '/projects', shortcut: 'p' },
  { id: 'experience', label: '/experience', shortcut: 'e' },
  { id: 'achievements', label: '/achievements', shortcut: 'a' },
];

function CommandBlock({ command, children }: { command: string; children: ReactNode }) {
  return (
    <section className="command-block">
      <h2><span className="prompt">$</span> {command}</h2>
      <div className="command-content">{children}</div>
    </section>
  );
}

const statusRows = [
  { label: 'Location', value: 'New Delhi, India' },
  { label: 'Into', value: 'Backend · AI · Systems' },
  { label: 'Exploring', value: 'LLMs · AI Agents · System Design' },
  { label: 'Building', value: 'Things that seemed simple at first' },
];

function StatusLive() {
  return (
    <div className="status-live" aria-label="Live status">
      <div className="status-title"><span className="prompt">$</span> status --live</div>
      {statusRows.map((row) => (
        <div className="status-row" key={row.label}>
  <span className="status-sym">&gt;</span>
  <span className="status-label">{row.label}</span>
  <strong>{row.value}</strong>
</div>
      ))}
    </div>
  );
}

function MeView() {
  return (
    <div className="me-layout">
      <div className="me-primary">
      <CommandBlock command="whoami">
        <p>Backend-leaning developer, currently deep in Python, APIs, and production systems. I like building things I don't fully know how to build yet-so interesting problems tend to take me further than planned - and usually teach me something unexpected along the way.
          <br />
<br />
  Open to roles in software engineering, backend development, and AI.</p>
      </CommandBlock>
      </div>
      <div className="me-secondary">
      <StatusLive />
      </div>
      <div className="me-stack">
      <CommandBlock command="stack">
        <dl className="stack-list">
          <div><dt>languages</dt><dd>Python · C++ · JavaScript </dd></div>
          <div><dt>frameworks</dt><dd>React.js · Next.js · FastAPI · REST APIs</dd></div>
          <div><dt>cloud/tools</dt><dd>Azure · AWS · Firebase ·  Linux · Docker · Git · GitHub</dd></div>
          <div><dt>databases</dt><dd>PostgreSQL · MySQL · MongoDB · Redis </dd></div>
          <div><dt>core</dt><dd>OOP · DSA · DBMS · OS · System Design</dd></div>
        </dl>
        <p className="success-line">→ comfortable crossing the stack when the problem demands it.</p>
      </CommandBlock>
      </div>
    </div>
  );
}

const projects = [
  {
    name: 'Linksy',
    tech: 'FastAPI · SQLAlchemy · React.js ',
    link: 'https://github.com/aditi-tyagi02/Linksy',
    points: ['Shortens long URLs with custom, memorable aliases and live availability checks', 'Generates a downloadable QR code and tracks click count for every link', 'Full-stack build with client/server validation and a real-SaaS-style dark UI'],
  },
  {
    name: 'MoodMate',
    tech: ' TypeScript  · Firebase · LLM API',
    link: '#',
    points: ['Detects user mood and suggests personalized activities', 'Includes mood tracking and guided mindfulness exercises', 'Delivers real-time wellbeing recommendations'],
  },
  {
    name: 'AI Text Summarizer',
    tech: 'Python · FastAPI · React.js · LLM API',
    link: '#',
    points: ['Summarizes long-form text into concise, context-aware summaries using an LLM', 'RESTful FastAPI backend handling text processing, model requests, and validation', 'Interactive React interface for submitting content and visualizing results'],
  },
];

function WorkView() {
  return (
    <CommandBlock command="projects">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <div className="project-readme"># cat README.md</div>
            <h3>{project.name}</h3>
            <div className="tech">{project.tech}</div>
            <ul className="project-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">view →</a>
          </article>
        ))}
      </div>
    </CommandBlock>
  );
}

function ExperienceView() {
  return (
    <>
      <CommandBlock command="tail -f experience.log">
        <div className="experience-log">
          <article className="experience-entry">
            <div className="experience-period">[Aug 2025-present]</div>
            <h3>Graduate Engineer Trainee</h3>
            <div className="experience-company">HCLTech, Noida</div>
            <ul>
              <li>Automated provisioning of Azure and AWS compute, networking, and storage resources using scripting, reducing manual setup time by 30% across 10+ enterprise environments</li>
              <li>Engineered reusable remediation scripts and automated monitoring checks, eliminating 8+ hours per week of manual operational work</li>
              <li>Collaborated with cross-functional engineering teams to resolve recurring infrastructure issues, reducing repeat incident volume by 20% over 3 months</li>
            </ul>
          </article>
          <article className="experience-entry">
            <div className="experience-period">[Oct 2024-Dec 2024]</div>
            <h3>Front-End Developer Intern</h3>
            <div className="experience-company">Agniverse, Delhi</div>
            <ul>
              <li>Built and shipped full-stack web features end-to-end, developing responsive interfaces with React.js and JavaScript and integrating Firebase for authentication, data persistence, and real-time functionality</li>
              <li>Designed and developed reusable, component-based UI architecture using React.js, HTML, and CSS, integrating application state with Firebase for dynamic, real-time user experiences</li>
              <li>Implemented authentication and data-management workflows, structuring application data and access flows to support secure, scalable functionality</li>
            </ul>
          </article>
        </div>
      </CommandBlock>
      <CommandBlock command="cat education.log">
        <div className="education-list"><p><strong>Bachelor of Technology, Computer Science and Engineering (AIML)</strong><br /><span>ABES Engineering College, Ghaziabad · 2021 - 2025</span></p><p><strong>High School Diploma</strong><br /><span>Delhi Public School Ghaziabad · 2018 - 2021</span></p></div>
      </CommandBlock>
    </>
  );
}

function AchievementsView() {
  const achievements = {
    certifications: [
      ['AWS Certified AI Practitioner (AIF-C01)', 'AI/ML & generative AI foundations'],
      ['Microsoft Certified: Azure Administrator Associate (AZ-104)', 'compute, networking, storage, identity'],
    ],
    competitions: [
      ['Smart India Hackathon — Top 3, Internal Round', 'out of 1,000+ teams'],
      ['450+ LeetCode · 650+ GeeksforGeeks problems solved', ''],
      ['HackerRank: 5★ Python & C++, 4★ Problem Solving', ''],
    ],
  };

  return (
    <CommandBlock command="cat achievements.json">
      <pre className="achievement-json" aria-label="Achievements in JSON format">
        <span className="json-punctuation">{'{\n'}</span>
        <span className="json-key">{'  "certifications"'}</span><span className="json-punctuation">{': [\n'}</span>
        {achievements.certifications.map(([achievement, note]) => <span className="json-entry" key={achievement}>{'    '}<span className="json-string">{`"${achievement}"`}</span><span className="json-punctuation">{','}</span>{'  '}<span className="json-note">{`// ${note}`}</span>{'\n'}</span>)}
        <span className="json-punctuation">{'  ],\n'}</span>
        <span className="json-key">{'  "competitions"'}</span><span className="json-punctuation">{': [\n'}</span>
        {achievements.competitions.map(([achievement, note], index) => <span className="json-entry" key={achievement}>{'    '}<span className="json-string">{`"${achievement}"`}</span>{index < achievements.competitions.length - 1 && <span className="json-punctuation">{','}</span>}{note && <>{'  '}<span className="json-note">{`// ${note}`}</span></>}{'\n'}</span>)}
        <span className="json-punctuation">{'  ]\n}'}</span>
      </pre>
    </CommandBlock>
  );
}

function App() {
  const [view, setView] = useState<View>('me');
  const [mode, setMode] = useState<Mode>('dark');
  const theme = themes[mode];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      const item = navItems.find((navItem) => navItem.shortcut === event.key.toLowerCase());
      if (item) setView(item.id);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cssVars = {
    '--bg': theme.bg, '--panel': theme.panel, '--border': theme.border,
    '--text': theme.text, '--muted': theme.muted, '--blue': theme.blue,
    '--green': theme.green, '--yellow': theme.yellow, '--lavender': theme.lavender,
    '--titlebar': theme.titlebar, '--dot-close': theme.dotClose,
    '--dot-min': theme.dotMin, '--dot-max': theme.dotMax,
  } as React.CSSProperties;

  return (
    <div className="site-shell" data-mode={mode} style={cssVars}>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="traffic-dots">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-max" />
          </div>
          <span className="titlebar-label">aditi@dev: ~/portfolio</span>
          <button className="theme-toggle" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {mode === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
        <div className="terminal-body">
          <div className="ssh-line">
            <span className="prompt-user">aditi@dev</span><span className="prompt-sep">:</span><span className="prompt-path">~/portfolio</span><span className="prompt-suffix">$</span><span className="cursor" aria-hidden="true">|</span>
          </div>
          <nav className="main-nav" aria-label="Portfolio sections">
            <span className="nav-prefix"><span className="prompt">$</span> cd /</span>
            <div className="nav-routes">{navItems.map((item) => <button className={`nav-item ${view === item.id ? 'active' : ''}`} key={item.id} onClick={() => setView(item.id)} aria-current={view === item.id ? 'page' : undefined}><span>{item.label}</span><small>[{item.shortcut}]</small></button>)}</div>
            <span className="shortcut-hint"><Terminal size={13} /> press <span>[m]</span> <span>[p]</span> <span>[e]</span> <span>[a]</span> to navigate</span>
          </nav>
          <main className="content-area" aria-live="polite" key={view}>
            {view === 'me' && <MeView />}
            {view === 'work' && <WorkView />}
            {view === 'experience' && <ExperienceView />}
            {view === 'achievements' && <AchievementsView />}
          </main>
          <footer className="site-footer">
            <span className="footer-command"><span className="prompt">$</span> find me</span>
            <span className="footer-links"><a href="https://github.com/aditi-tyagi02">[ github ]</a><a href="https://in.linkedin.com/in/aditi-tyagi02">[ linkedin ]</a><a href="https://leetcode.com/Bytebarde55/">[ leetcode ]</a><a href={`mailto:${profile.email}`}>[ email ]</a><a href="#resume">[ resume ]</a></span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
