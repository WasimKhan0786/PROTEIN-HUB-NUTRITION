import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero({ handleNavClick, openNewsletterModal }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.6 })
        .from('.hero-headline', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-cta-group > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, '-=0.3')
        .from('.metric-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-bg-overlay"></div>
      <div className="hero-bg-image" style={{ backgroundImage: `url('/assets/hero_physique.png')` }}></div>
      <div className="hero-gold-glow"></div>

      <div className="container hero-content">
        <div className="hero-badge">
          <ShieldCheck size={14} className="gold-icon" />
          <span>PROTEIN HUB NUTRITION</span>
        </div>

        <h1 className="hero-headline">
          PROTEIN HUB NUTRITION <br />
          <span className="gold-gradient-text">WE DEAL IN 100% AUTHENTIC PRODUCT</span>
        </h1>

        <p className="hero-subtitle">
          Your premier trusted store for 100% genuine sports supplements, proteins & nutrition. <br />
          <strong>Address:</strong> R-280/4, Street 7, Near Qadri Masjid, Jogabai Ext., Zakir Nagar, Okhla, New Delhi-25.
        </p>

        <div className="hero-cta-group">
          <a href="tel:+919958417463" className="btn-primary">
            <Phone size={18} /> CALL NOW: +91 9958417463
          </a>
          
          <a href="mailto:proteinhubnutrition@gmail.com" className="btn-outline">
            <Mail size={18} /> EMAIL US
          </a>
          
          <button onClick={() => handleNavClick('steroids')} className="hero-tertiary-btn">
            EXPLORE PRODUCTS <ArrowRight size={16} />
          </button>
        </div>

        {/* Hero Quick Metrics */}
        <div className="hero-metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-box">
              <CheckCircle2 size={22} className="gold-icon" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">100%</span>
              <span className="metric-label">Authentic Product Guarantee</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box">
              <Phone size={22} className="gold-icon" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">+91 9958417463</span>
              <span className="metric-label">Phone & WhatsApp Support</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-box">
              <MapPin size={22} className="gold-icon" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">OKHLA, DELHI</span>
              <span className="metric-label">Near Qadri Masjid, Zakir Nagar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
