import React, { useRef, useEffect } from 'react';
import { Award, ShieldCheck, Landmark, HeartHandshake, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SponsorsSection({ openNewsletterModal }) {
  const sectionRef = useRef(null);

  const sponsors = [
    {
      name: 'Liverpool John Moores University (LJMU)',
      category: 'PRIMARY ACADEMIC HOST & RESEARCH TRUST',
      desc: 'Providing core research infrastructure, lab facilities, and ethical governance for ASUK national surveys.',
      icon: Landmark
    },
    {
      name: 'Public Health England / Office for Health Improvement & Disparities',
      category: 'PUBLIC HEALTH PARTNER',
      desc: 'Collaborating on national needle syringe program harm reduction data collection and clinical training modules.',
      icon: ShieldCheck
    },
    {
      name: 'Wellcome Trust (Special Project Grant)',
      category: 'RESEARCH FUNDING SPONSOR',
      desc: 'Grant funding support for qualitative research into female IPED users and non-prescribed growth hormone trends.',
      icon: Award
    },
    {
      name: 'Harm Reduction International (HRI)',
      category: 'GLOBAL SUPPORTER',
      desc: 'Promoting human rights and non-judgmental health interventions for image and performance enhancing drug users.',
      icon: HeartHandshake
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from('.sponsors-section .section-subtitle', {
        scrollTrigger: { trigger: '.sponsors-section', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('.sponsors-section .section-title', {
        scrollTrigger: { trigger: '.sponsors-section', start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      gsap.from('.sponsors-section .section-desc', {
        scrollTrigger: { trigger: '.sponsors-section', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.6, delay: 0.28, ease: 'power3.out'
      });

      // Sponsor cards stagger
      gsap.from('.sponsor-card', {
        scrollTrigger: { trigger: '.sponsors-grid', start: 'top 85%', once: true },
        y: 60, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out'
      });

      // CTA banner
      gsap.from('.sponsor-cta-banner', {
        scrollTrigger: { trigger: '.sponsor-cta-banner', start: 'top 88%', once: true },
        scale: 0.92, opacity: 0, duration: 0.8, ease: 'back.out(1.4)'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleContactClick = () => {
    if (openNewsletterModal) {
      openNewsletterModal();
    } else {
      window.location.href = 'mailto:proteinhubnutrition@gmail.com';
    }
  };

  return (
    <section className="section-padding sponsors-section" id="sponsors" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">INSTITUTIONAL BACKING</span>
          <h2 className="section-title">SPONSORS AND SUPPORTERS</h2>
          <p className="section-desc">
            ASUK is supported by leading UK universities, public health agencies, and international research trusts committed to independent harm reduction science.
          </p>
        </div>

        <div className="grid-2 sponsors-grid">
          {sponsors.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <div className="asuk-card sponsor-card" key={index}>
                <div className="sponsor-icon-wrapper">
                  <IconComponent size={32} className="gold-icon" />
                </div>
                <div className="sponsor-info">
                  <span className="badge-gold">{s.category}</span>
                  <h3 className="sponsor-name">{s.name}</h3>
                  <p className="sponsor-desc">{s.desc}</p>
                  <div className="sponsor-verified">
                    <CheckCircle2 size={14} className="gold-icon" /> Verified Institutional Partner
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sponsor-cta-banner">
          <h3>BECOME AN ASUK SPONSOR OR RESEARCH PARTNER</h3>
          <p>
            Universities, healthcare trusts, and ethical foundations interested in supporting independent IPED harm reduction science can contact our steering committee.
          </p>
          <button className="btn-primary" onClick={handleContactClick}>
            CONTACT STEERING COMMITTEE
          </button>
        </div>
      </div>
    </section>
  );
}

