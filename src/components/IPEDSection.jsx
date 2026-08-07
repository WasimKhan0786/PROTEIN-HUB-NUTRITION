import React, { useState, useRef, useEffect } from 'react';
import { Pill, ShieldAlert, HeartPulse, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IPEDSection({ handleNavClick }) {
  const [selectedCategory, setSelectedCategory] = useState('aas');
  const sectionRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.iped-section .section-subtitle', {
        scrollTrigger: { trigger: '.iped-section', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('.iped-section .section-title', {
        scrollTrigger: { trigger: '.iped-section', start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      gsap.from('.iped-section .section-desc', {
        scrollTrigger: { trigger: '.iped-section', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.6, delay: 0.28, ease: 'power3.out'
      });
      gsap.from('.iped-banner-img-col', {
        scrollTrigger: { trigger: '.iped-banner-card', start: 'top 85%', once: true },
        x: -70, opacity: 0, duration: 0.9, ease: 'power3.out'
      });
      gsap.from('.iped-banner-info-col', {
        scrollTrigger: { trigger: '.iped-banner-card', start: 'top 85%', once: true },
        x: 70, opacity: 0, duration: 0.9, ease: 'power3.out'
      });
      gsap.from('.iped-select-btn', {
        scrollTrigger: { trigger: '.iped-selector-btns', start: 'top 92%', once: true },
        y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.4)'
      });
      gsap.from('.iped-detail-card', {
        scrollTrigger: { trigger: '.iped-detail-card', start: 'top 88%', once: true },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCategoryChange = (cat) => {
    if (detailRef.current) {
      gsap.fromTo(detailRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out' }
      );
    }
    setSelectedCategory(cat);
  };

  const ipedCategories = {
    aas: {
      title: 'ANABOLIC ANDROGENIC STEROIDS (AAS)',
      badge: 'CLASS C / HUMAN THERAPEUTIC & PERFORMANCE',
      description: 'Synthetic derivatives of testosterone designed to maximize anabolic (muscle building) and minimize androgenic (masculinizing) effects.',
      compounds: ['Testosterone (Enanthate/Cypionate/Propionate)', 'Nandrolone (Deca-Durabolin)', 'Trenbolone (Acetate/Enanthate)', 'Oxandrolone (Anavar)', 'Methandrostenolone (Dianabol)', 'Drostanolone (Masteron)'],
      keyRisks: 'Endogenous testosterone suppression, lipid profile deterioration (HDL reduction), left ventricular hypertrophy, elevated hematocrit/RBC.',
      harmReduction: 'Regular full-panel bloodwork (lipids, CBC, liver/kidney markers), cardiovascular screenings, post-cycle recovery protocols, aseptic administration practice.'
    },
    hgh: {
      title: 'GROWTH HORMONE & SECRETAGOGUES',
      badge: 'PEPTIDE HORMONES & RECOMBINANT HGH',
      description: 'Somatropin (rhGH) and peptide secretagogues (CJC-1295, Ipamorelin, MK-677) utilized for tissue repair, lipolysis, and muscle cell hyperplasia.',
      compounds: ['Recombinant Human Growth Hormone (rhGH)', 'IGF-1 LR3 & DES', 'CJC-1295 DAC', 'Ipamorelin', 'MK-677 (Ibutamoren)'],
      keyRisks: 'Insulin resistance & hyperglycemia, organomegaly, carpal tunnel syndrome, fluid retention, potential stimulation of pre-existing neoplasia.',
      harmReduction: 'Fasting glucose and HbA1c monitoring, IGF-1 serum testing, conservative dosing schedules, cycle duration limits.'
    },
    fatburners: {
      title: 'METABOLIC & FAT LOSS AGENTS',
      badge: 'THERMOGENICS & BETA-2 AGONISTS',
      description: 'Compounds that elevate basal metabolic rate (BMR), uncouple oxidative phosphorylation, or stimulate adrenergic pathways for rapid fat oxidation.',
      compounds: ['Clenbuterol Hydrochloride', 'Liothyronine Sodium (Cytomel T3)', 'Dinitrophenol (2,4-DNP)', 'Ephedrine & Caffeine Stack'],
      keyRisks: 'Severe tachycardia, cardiac arrhythmias, hyperthermia (fatal risk with DNP), electrolyte depletion, thyroid axis suppression.',
      harmReduction: 'Continuous heart rate monitoring, electrolyte supplementation (taurine, potassium), complete avoidance of cellular thermogenics like DNP.'
    },
    pct: {
      title: 'POST-CYCLE THERAPY (PCT) & ANCILLARIES',
      badge: 'HORMONE RECOVERY & HEALTH PROTECTION',
      description: 'Pharmacological interventions aimed at restoring HPTA (Hypothalamic-Pituitary-Testicular Axis) function post-suppression and mitigating side effects.',
      compounds: ['Tamoxifen Citrate (Nolvadex)', 'Clomiphene Citrate (Clomid)', 'Human Chorionic Gonadotropin (hCG)', 'Anastrozole & Letrozole (Aromatas inhibitors)'],
      keyRisks: 'Excessive estrogen rebound or suppression (joint pain, depression), ocular disturbance from Clomid, mood instability.',
      harmReduction: 'Base PCT on baseline blood panel values, avoid over-suppressing estrogen, timing administration according to steroid ester half-lives.'
    }
  };

  const current = ipedCategories[selectedCategory];

  return (
    <section className="section-padding iped-section" id="iped-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">IMAGE & PERFORMANCE ENHANCING DRUGS</span>
          <h2 className="section-title">IPEDS SPECTRUM & HARM REDUCTION GUIDANCE</h2>
          <p className="section-desc">
            Explore detailed scientific profiles, pharmacological classifications, health risk vectors, and evidence-based harm reduction protocols.
          </p>
        </div>

        {/* IPED Interactive Graphic Showcase Banner */}
        <div className="iped-banner-card">
          <div className="iped-banner-img-col">
            <img src="/assets/Image-and-Performance-Enhancing-Drugs-free-webinar.webp" alt="Image and Performance Enhancing Drugs Free Webinar" className="iped-banner-img" />
            <div className="iped-banner-tag">ASUK RESEARCH WEBINAR</div>
          </div>

          <div className="iped-banner-info-col">
            <div className="badge-gold">100% AUTHENTIC SUPPLEMENTS</div>
            <h3>AUTHENTIC SPORTS NUTRITION & PROTEINS</h3>
            <p>
              Explore our 100% genuine range of imported whey protein isolates, mass gainers, pre-workouts, and essential health supplements. Verified importer seals on every product.
            </p>

            <div className="iped-selector-btns">
              <button
                className={`iped-select-btn ${selectedCategory === 'aas' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('aas')}
              >
                ANABOLIC STEROIDS (AAS)
              </button>
              <button
                className={`iped-select-btn ${selectedCategory === 'hgh' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('hgh')}
              >
                GROWTH HORMONE &amp; PEPTIDES
              </button>
              <button
                className={`iped-select-btn ${selectedCategory === 'fatburners' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('fatburners')}
              >
                METABOLIC &amp; FAT LOSS
              </button>
              <button
                className={`iped-select-btn ${selectedCategory === 'pct' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('pct')}
              >
                PCT &amp; ANCILLARIES
              </button>
            </div>
          </div>
        </div>

        {/* Selected Compound Category Detail Display */}
        <div className="iped-detail-card" ref={detailRef}>
          <div className="iped-detail-header">
            <div>
              <span className="badge-gold">{current.badge}</span>
              <h3 className="iped-detail-title">{current.title}</h3>
            </div>
            <button onClick={() => handleNavClick('steroids')} className="btn-outline">
              VIEW FULL DRUG DATABASE <ChevronRight size={16} />
            </button>
          </div>

          <p className="iped-detail-desc">{current.description}</p>

          <div className="grid-3 iped-detail-grid">
            <div className="iped-info-box">
              <h4 className="iped-box-heading">
                <Pill className="gold-icon" size={18} /> COMMON COMPOUNDS
              </h4>
              <ul className="iped-list">
                {current.compounds.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="iped-info-box warning-box">
              <h4 className="iped-box-heading warning-title">
                <ShieldAlert className="red-icon" size={18} /> KEY HEALTH RISKS
              </h4>
              <p className="iped-box-text">{current.keyRisks}</p>
            </div>

            <div className="iped-info-box health-box">
              <h4 className="iped-box-heading health-title">
                <HeartPulse className="gold-icon" size={18} /> HARM REDUCTION PROTOCOL
              </h4>
              <p className="iped-box-text">{current.harmReduction}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
