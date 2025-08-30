// ./shared/ContactActions.jsx
import React from 'react';
import { gsap } from 'gsap';

// Minimal inline icons (string-mapped via `icon`)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M4 8.5l7.2 4.5a1.6 1.6 0 0 0 1.6 0L20 8.5M5 6h14a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8A2 2 0 0 1 5 6Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M.5 23.5l1.7-6A10 10 0 1 1 6 21.8L.5 23.5zM12 3.7a8.3 8.3 0 0 0-7.2 12.5l.3.6-.9 3.2 3.3-.9.6.3A8.3 8.3 0 1 0 12 3.7zm4.8 10.2c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1c-.2.2-.6.7-.8.9s-.3.2-.6.1a6.9 6.9 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.2 0-.3 0-.5l-.6-1.4c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.4-.8.8-1 1.8-.3 3 .8 1.4 2.2 3 4.2 4.2 1.6.9 2.7 1.2 3.7 1 .6-.1 1.3-.6 1.5-1.2.2-.6.2-1.1.1-1.2z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path d="M5 3h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2h-.5C9.9 19.6 4.4 14.1 3 6.5V6a3 3 0 0 1 2-3Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Map string icon names from your data → inline components
const ICON_MAP = {
  MailIcon: <MailIcon />,
  WhatsappIcon: <WhatsappIcon />,
  PhoneIcon: <PhoneIcon />,
};

function detectType({ name = '', url = '', icon = '' }) {
  const s = `${name} ${url} ${icon}`.toLowerCase();
  if (s.includes('mailto:') || s.includes('mail')) return 'email';
  if (s.includes('wa.me') || s.includes('whats')) return 'whatsapp';
  if (s.includes('tel:') || s.includes('call') || s.includes('phone')) return 'phone';
  return 'link';
}

function decorate(action) {
  const type = detectType(action);
  const label = action.name;
  const href = action.url;
  const icon = ICON_MAP[action.icon] ?? <PhoneIcon />;
  const target = (type === 'whatsapp' || /^https?:\/\//.test(href)) ? '_blank' : undefined;
  const rel = target ? 'noopener' : undefined;
  const colorClasses =
    type === 'email' ? 'bg-sky-500/15 text-sky-600'
    : type === 'whatsapp' ? 'bg-emerald-500/15 text-emerald-600'
    : 'bg-amber-500/15 text-amber-600';

  // Hint line (nice touch in cards)
  let hint = '';
  if (type === 'email') hint = href.replace(/^mailto:/, '');
  else if (type === 'phone') hint = href.replace(/^tel:/, '');
  else if (type === 'whatsapp') hint = 'Fastest response';

  return { ...action, type, label, href, icon, target, rel, colorClasses, hint };
}

export default function ContactActions({ actions = [] }) {
  const items = actions.map(decorate);

  const ripple = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const span = document.createElement('span');
    span.className = 'absolute rounded-full pointer-events-none';
    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top = `${e.clientY - rect.top}px`;
    span.style.width = span.style.height = '6px';
    span.style.transform = 'translate(-50%, -50%)';
    span.style.background = 'rgba(255,255,255,.45)';
    card.appendChild(span);
    gsap.to(span, { width: 320, height: 320, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => span.remove() });
  };

  return (
    <>
      <style>{`
        .animate-border{background-size:200% 200%;animation:borderMove 4s linear infinite}
        @keyframes borderMove{0%{background-position:0% 50%}100%{background-position:100% 50%}}
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((x, i) => (
          <a
            key={i}
            href={x.href}
            target={x.target}
            rel={x.rel}
            onClick={ripple}
            className="contact-card group relative rounded-2xl p-[1px]
                       bg-[linear-gradient(110deg,rgba(244,63,94,.95),rgba(217,70,239,.95),rgba(99,102,241,.95),rgba(244,63,94,.95))]
                       animate-border transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none"
            aria-label={x.label}
          >
            <div className="relative h-full rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur
                            ring-1 ring-black/5 dark:ring-white/10 px-5 py-4 flex items-center gap-4 overflow-hidden">
              <div className={`shrink-0 h-12 w-12 rounded-xl grid place-items-center shadow ${x.colorClasses}`}>
                {x.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-zinc-900 dark:text-zinc-50">{x.label}</div>
                {x.hint ? (
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 truncate">{x.hint}</div>
                ) : null}
              </div>
              <svg className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Shine sweep */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-x-16 -top-10 h-12 rotate-12 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
