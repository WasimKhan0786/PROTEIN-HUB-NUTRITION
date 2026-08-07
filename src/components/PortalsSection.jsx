import React, { useRef, useEffect } from 'react';
import { ShieldCheck, Activity, BookOpen, Globe, HeartPulse, Building2, Download, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortalsSection({ activePage, handleNavClick, openNewsletterModal }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section
      gsap.from('#about .section-subtitle', {
        scrollTrigger: { trigger: '#about', start: 'top 82%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('#about .section-title', {
        scrollTrigger: { trigger: '#about', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      gsap.from('#about .lead-paragraph', {
        scrollTrigger: { trigger: '#about', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.6, delay: 0.25, ease: 'power3.out'
      });
      gsap.from('.stat-item', {
        scrollTrigger: { trigger: '.about-stats-row', start: 'top 88%', once: true },
        y: 30, opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)'
      });
      gsap.from('.about-image-card', {
        scrollTrigger: { trigger: '.about-grid', start: 'top 82%', once: true },
        x: 60, opacity: 0, duration: 0.8, ease: 'power3.out'
      });

      // Academics & Practitioners
      gsap.from('#academics .section-title', {
        scrollTrigger: { trigger: '#academics', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
      });
      gsap.from('.portal-card', {
        scrollTrigger: { trigger: '.portals-grid', start: 'top 85%', once: true },
        y: 60, opacity: 0, duration: 0.75, stagger: 0.2, ease: 'power3.out'
      });

      // Resources
      gsap.from('#resources .section-title', {
        scrollTrigger: { trigger: '#resources', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
      });
      gsap.from('.res-card', {
        scrollTrigger: { trigger: '.resources-grid', start: 'top 85%', once: true },
        y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out'
      });

      // International partners
      gsap.from('#partners .section-title', {
        scrollTrigger: { trigger: '#partners', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
      });
      gsap.from('.partner-item-card', {
        scrollTrigger: { trigger: '.partner-cards-grid', start: 'top 85%', once: true },
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)'
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="portals-wrapper" ref={wrapperRef}>
      {/* ABOUT ASUK BLOCK */}
      <section className="section-padding about-block" id="about">
        <div className="container">
          <div className="grid-2 about-grid">
            <div>
              <span className="section-subtitle">UK RESEARCH & PRACTICE NETWORK</span>
              <h2 className="section-title text-left">ABOUT ANABOLIC STEROIDS UK (ASUK)</h2>
              <p className="lead-paragraph">
                Founded in 2017 by leading academics and healthcare practitioners, ASUK is an independent, non-profit academic network dedicated to the study of Image and Performance Enhancing Drugs (IPEDs).
              </p>
              <p className="body-paragraph">
                We believe that criminalization and stigmatization fail to reduce drug-related harm. Our objective is to generate rigorous scientific evidence, educate clinical staff, inform public policy, and empower users with objective health data.
              </p>

              <div className="about-stats-row">
                <div className="stat-item">
                  <span className="stat-num">9+</span>
                  <span className="stat-lbl">UK University Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">350+</span>
                  <span className="stat-lbl">Needle Exchanges Guided</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">12</span>
                  <span className="stat-lbl">International Coalitions</span>
                </div>
              </div>
            </div>

            <div className="about-image-card">
              <div className="asuk-card highlight-box">
                <ShieldCheck size={36} className="gold-icon" />
                <h3>OUR ETHICAL CODE</h3>
                <ul className="ethical-list">
                  <li><strong>Zero Stigma Policy:</strong> We treat non-medical IPED users as autonomous individuals deserving of non-judgmental healthcare.</li>
                  <li><strong>Conflict of Interest Independence:</strong> ASUK does not accept commercial funding from underground steroid manufacturers or unverified supplement brands.</li>
                  <li><strong>Collaborative Science:</strong> Open access to research methodologies and findings for international harm reduction networks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMICS & PRACTITIONERS SECTION */}
      <section className="section-padding bg-surface-dark" id="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">PORTALS & TOOLKITS</span>
            <h2 className="section-title">ACADEMICS & PRACTITIONERS RESOURCES</h2>
            <p className="section-desc">
              Tailored information portals for university researchers, NHS clinicians, endocrinologists, and NSP harm reduction workers.
            </p>
          </div>

          <div className="grid-2 portals-grid">
            {/* Academics Portal */}
            <div className="asuk-card portal-card" id="academics-card">
              <div className="portal-icon">
                <BookOpen size={32} className="gold-icon" />
              </div>
              <span className="badge-gold">ACADEMIC RESEARCHERS</span>
              <h3>ACADEMICS HUB & DATA REPOSITORY</h3>
              <p>
                Access raw anonymized UK survey datasets, ethically approved recruitment channels for your studies, peer-review collaboration opportunities, and grant co-application frameworks.
              </p>
              <ul className="portal-check-list">
                <li>Ethics clearance templates for IPED human subject studies</li>
                <li>ASUK Annual Grant & Student Dissertation Bursary</li>
                <li>UK National IPED Cohort Study Data Access</li>
              </ul>
              <button className="btn-primary mini-btn" onClick={() => handleNavClick('research', 'calls-for-participants')}>
                JOIN ACADEMIC NETWORK <ArrowRight size={14} />
              </button>
            </div>

            {/* Practitioners Portal */}
            <div className="asuk-card portal-card" id="practitioners-card">
              <div className="portal-icon">
                <Activity size={32} className="gold-icon" />
              </div>
              <span className="badge-gold">CLINICIANS & NSP WORKERS</span>
              <h3>PRACTITIONERS CLINICAL TOOLKIT</h3>
              <p>
                Evidence-based toolkits for primary care physicians, needle syringe programs, and substance misuse services. Includes blood test diagnostic thresholds, ASIH treatment guidelines, and injection site complication management.
              </p>
              <ul className="portal-check-list">
                <li>NHS Bloodwork Diagnostic Flowcharts (Lipids, Hormones, Liver)</li>
                <li>Safe Injection Equipment & Needle Exchange Guidelines</li>
                <li>Post-Cycle Therapy (PCT) & ASIH Clinical Protocols</li>
              </ul>
              <button className="btn-primary mini-btn" onClick={() => handleNavClick('resources')}>
                ACCESS CLINICAL TOOLKIT <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES & SERVICES SECTION */}
      <section className="section-padding" id="resources">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SERVICES & SUPPORT</span>
            <h2 className="section-title">RESOURCES & SERVICES</h2>
            <p className="section-desc">
              Download clinical harm reduction guides, access testing lab directories, or request ASUK expert consultation for your health service.
            </p>
          </div>

          <div className="grid-3 resources-grid" id="services">
            <div className="asuk-card res-card">
              <Download size={28} className="gold-icon" />
              <h4>BLOODWORK INTERPRETATION GUIDE</h4>
              <p>Comprehensive clinician guide for interpreting lipid panels, hematocrit, total/free testosterone, and liver enzymes in active AAS users.</p>
              <button className="btn-outline mini-btn" onClick={() => alert('Downloading Bloodwork Interpretation Guide PDF...')}>
                DOWNLOAD PDF (2.4MB)
              </button>
            </div>

            <div className="asuk-card res-card">
              <HeartPulse size={28} className="gold-icon" />
              <h4>INJECTION SAFETY & SITE CARE</h4>
              <p>Illustrated sterile technique manual detailing gluteal, ventrogluteal, and deltoid injection protocols to prevent abscess formation and nerve damage.</p>
              <button className="btn-outline mini-btn" onClick={() => alert('Downloading Injection Safety Guide PDF...')}>
                DOWNLOAD PDF (1.8MB)
              </button>
            </div>

            <div className="asuk-card res-card">
              <Building2 size={28} className="gold-icon" />
              <h4>ASUK CLINICAL CONSULTANCY</h4>
              <p>Needle exchange training, workplace IPED seminars, and public health policy consultation for NHS Trusts and Local Authorities.</p>
              <button className="btn-primary mini-btn" onClick={() => openNewsletterModal()}>
                REQUEST CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL PARTNERS SECTION */}
      <section className="section-padding bg-surface-dark" id="partners">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">GLOBAL COLLABORATION</span>
            <h2 className="section-title">INTERNATIONAL PARTNERS</h2>
            <p className="section-desc">
              ASUK works in close alignment with global harm reduction bodies, European research collectives, and international academic institutions.
            </p>
          </div>

          <div className="grid-4 partner-cards-grid">
            <div className="partner-item-card">
              <Globe className="gold-icon" size={24} />
              <h4>EUROPEAN MONITORING CENTRE FOR DRUGS (EMCDDA)</h4>
              <p>Lisbon, Portugal</p>
            </div>

            <div className="partner-item-card">
              <Globe className="gold-icon" size={24} />
              <h4>HUMAN ENHANCEMENT DRUGS NETWORK (HEDN)</h4>
              <p>International Research Collective</p>
            </div>

            <div className="partner-item-card">
              <Globe className="gold-icon" size={24} />
              <h4>STEROID RESEARCH GROUP AUSTRALIA</h4>
              <p>University of Sydney, Australia</p>
            </div>

            <div className="partner-item-card">
              <Globe className="gold-icon" size={24} />
              <h4>DANISH ANTI-DOPING & IPED RESEARCH HUB</h4>
              <p>Copenhagen, Denmark</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
