import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ endValue, suffix = '', decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(easeProgress * endValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <span ref={counterRef} className="stat-value">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function ResearchSection({ handleNavClick }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats section header
      gsap.from('#iped-uk-stats .section-subtitle', {
        scrollTrigger: { trigger: '#iped-uk-stats', start: 'top 82%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('#iped-uk-stats .section-title', {
        scrollTrigger: { trigger: '#iped-uk-stats', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      // Stat boxes bounce in
      gsap.from('.stat-box', {
        scrollTrigger: { trigger: '.uk-stats-grid', start: 'top 85%', once: true },
        scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding research-section" id="research-section" ref={sectionRef}>
      <div className="container">
        <div className="research-block stats-block" id="iped-uk-stats">
          <div className="section-header">
            <span className="section-subtitle">EPIDEMIOLOGICAL DATA</span>
            <h2 className="section-title">IPED USE IN THE UNITED KINGDOM</h2>
            <p className="section-desc">
              Key empirical insights from national needle syringe programs (NSP), crime surveys, and ASUK annual epidemiological reporting.
            </p>
          </div>

          <div className="grid-4 uk-stats-grid">
            <div className="stat-box">
              <AnimatedCounter endValue={56} suffix="%" decimals={0} />
              <span className="stat-label">NSP Client Majority</span>
              <p className="stat-detail">IPED users now constitute over half of all service attendees at needle exchanges in England and Wales.</p>
            </div>

            <div className="stat-box">
              <AnimatedCounter endValue={4.2} suffix=" YRS" decimals={1} />
              <span className="stat-label">Average Use Duration</span>
              <p className="stat-detail">Mean continuous or cyclic administration period reported among regular UK strength athletes.</p>
            </div>

            <div className="stat-box">
              <AnimatedCounter endValue={78} suffix="%" decimals={0} />
              <span className="stat-label">Poly-Substance Use</span>
              <p className="stat-detail">Concomitant use of AAS alongside growth hormone, insulin, SARMs, or fat burners.</p>
            </div>

            <div className="stat-box">
              <AnimatedCounter endValue={31} suffix="%" decimals={0} />
              <span className="stat-label">SARM & Peptide Growth</span>
              <p className="stat-detail">Rapid growth in non-injectable selective androgen receptor modulator use among younger demographics (18-24).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
