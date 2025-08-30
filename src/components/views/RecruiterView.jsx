import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import Badge from '../common/Badge';
import Education from './shared/Education';
import Awards from './shared/Awards';
import { EDUCATION, AWARDS_AND_CERTIFICATIONS } from '../../data/resumeData';
import ContactActions from './shared/ContactActions';

gsap.registerPlugin(ScrollTrigger);
try { if (SplitText) gsap.registerPlugin(SplitText); } catch {}

const RecruiterView = ({ profile, experience }) => {
  const mainRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set('.section-animate, .experience-card', { autoAlpha: 0, y: 50 });
      gsap.set(headerRef.current, { autoAlpha: 0 });
      gsap.set('.download-cta', { autoAlpha: 0, y: 10, scale: 0.98 });
      gsap.set('.download-cta-fab', { autoAlpha: 0, y: 20 });

      // Header animation
      const h1 = headerRef.current?.querySelector('h1');
      const tagline = headerRef.current?.querySelector('.tagline');
      const summary = headerRef.current?.querySelector('.summary-text');
      const contacts = headerRef.current?.querySelectorAll('.contact-actions-div .contact-card');

      const hasSplit = typeof SplitText === 'function';
      let headerChars = h1;
      let tagWords = tagline;

      if (hasSplit && h1 && tagline) {
        const headerSplit = new SplitText(h1, { type: 'chars' });
        const tagSplit = new SplitText(tagline, { type: 'words' });
        headerChars = headerSplit.chars;
        tagWords = tagSplit.words;
      }

      const tl = gsap.timeline({ delay: 0.25 });
      tl.to(headerRef.current, { autoAlpha: 1, duration: 0.01 })
        .from(headerChars, {
          autoAlpha: 0, y: 20, duration: 0.8, ease: 'power3.out',
          stagger: hasSplit ? 0.03 : 0,
        })
        .from(tagWords, {
          autoAlpha: 0, x: -10, duration: 0.5, ease: 'power2.out',
          stagger: hasSplit ? 0.08 : 0,
        }, '-=0.5')
        .from(summary, { autoAlpha: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(contacts, {
          autoAlpha: 0, y: 10, scale: 0.95, duration: 0.45, stagger: 0.08, ease: 'back.out(1.7)',
        }, '-=0.3')
        // Animate the main hero CTA right after contacts
        .to('.download-cta', {
          autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.6)',
        }, '-=0.2');

      // Sections fade-in
      gsap.utils.toArray('.section-animate').forEach((section) => {
        gsap.fromTo(section,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // Experience cards
      gsap.utils.toArray('.experience-card').forEach((card) => {
        gsap.fromTo(card,
          { autoAlpha: 0, y: 30, scale: 0.96 },
          {
            autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });

      // Show the floating FAB when header scrolls out
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'bottom top+=64',
        onEnter: () => gsap.to('.download-cta-fab', { autoAlpha: 1, y: 0, duration: 0.25 }),
        onLeaveBack: () => gsap.to('.download-cta-fab', { autoAlpha: 0, y: 10, duration: 0.2 }),
      });

      // Gentle idle "breathing" on the hero CTA (reduced-motion friendly)
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to('.download-cta', { y: 2, repeat: -1, yoyo: true, duration: 1.6, ease: 'sine.inOut' });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, mainRef);

    return () => ctx.revert();
  }, [profile, experience]);

  return (
    <div ref={mainRef} className="mx-auto max-w-5xl py-12 px-4 space-y-20">
      {/* Header */}
      <header ref={headerRef} className="header-section text-center py-16 md:py-24">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {profile.name}
        </h1>
        <p className="tagline mt-4 text-xl font-medium text-rose-600 dark:text-rose-400">
          {profile.tag}
        </p>
        <p className="summary-text mt-6 max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400">
          {profile.summary}
        </p>

        <div className="contact-actions-div mt-8">
          <ContactActions actions={profile.links.actions} />
        </div>

        {/* ★ Primary Hero CTA (moved here) */}
        <div className="mt-6 flex justify-center">
          <a
            href="/AI_Divyesh_Vishwakarma_Post_NeuralIT.pdf"
            download="Divyesh_Vishwakarma_Resume.pdf"
            className="download-cta group inline-flex items-center gap-3 rounded-full px-6 py-3
                       text-base font-semibold text-white shadow-lg shadow-rose-600/30
                       bg-gradient-to-r from-rose-600 to-fuchsia-600
                       hover:from-rose-500 hover:to-fuchsia-500
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
                       dark:focus:ring-offset-zinc-900 transition-transform"
            aria-label="Download CV (PDF)"
          >
            {/* Inline download icon */}
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v10m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download CV</span>
            <span className="text-xs opacity-90 font-normal tracking-wide">PDF</span>
          </a>
        </div>
      </header>

      {/* Sticky FAB (shows after hero scrolls away) */}
      <a
        href="/AI_Divyesh_Vishwakarma_Post_NeuralIT.pdf"
        download="Divyesh_Vishwakarma_Resume.pdf"
        className="download-cta-fab fixed z-50 right-4 bottom-4 sm:right-8 sm:bottom-8
                   inline-flex items-center gap-2 rounded-full px-4 py-3
                   bg-zinc-900/90 dark:bg-zinc-800/90 backdrop-blur
                   text-white ring-1 ring-white/10 shadow-2xl
                   hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
        aria-label="Download CV (PDF)"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v10m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">Download CV</span>
      </a>

      {/* Experience */}
      <section className="section-animate">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Professional Journey</h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="experience-card p-6 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/50
                         border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm
                         shadow-lg shadow-zinc-200/20 dark:shadow-black/20"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{exp.role} @ {exp.company}</h3>
                <p className="font-mono text-xs text-zinc-500 mt-1 sm:mt-0">{exp.period}</p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{exp.location}</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300 pl-2">
                {exp.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map(t => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <div className="section-animate">
        <Awards items={AWARDS_AND_CERTIFICATIONS} />
      </div>

      {/* Education */}
      <div className="section-animate">
        <Education items={EDUCATION} />
      </div>
    </div>
  );
};

export default RecruiterView;
