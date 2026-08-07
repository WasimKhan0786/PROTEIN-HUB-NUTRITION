import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Activity, Award, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

export default function WelcomeSection({ handleNavClick }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.welcome-text-col > *', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });

      gsap.from('.welcome-card-box', {
        scale: 0.95,
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding welcome-section" id="welcome" ref={sectionRef}>
      <div className="container">
        <div className="grid-2 welcome-grid">
          {/* Welcome Text Content */}
          <div className="welcome-text-col">
            <span className="section-subtitle">WELCOME TO PROTEIN HUB NUTRITION</span>
            <h2 className="section-title text-left">WE DEAL IN 100% AUTHENTIC PRODUCT</h2>
            
            <p className="lead-paragraph">
              PROTEIN HUB NUTRITION is your premier destination for 100% original, verified sports nutrition, whey proteins, gainers, pre-workouts, and fitness supplements in New Delhi.
            </p>

            <p className="body-paragraph">
              Located at Zakir Nagar, Okhla, New Delhi-25, we bring you genuine imported products backed by official importer seals, batch verification, and non-compromised quality for bodybuilders, athletes, and fitness enthusiasts.
            </p>

            <div className="welcome-features-list">
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <strong>100% Authentic Guarantee:</strong> Every single product is sourced directly from authorized importers with authentic holographic seals.
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <strong>Store Location & Instant Contact:</strong> Visit us at R-280/4, Street 7, Near Qadri Masjid, Jogabai Ext., Zakir Nagar, Okhla, New Delhi-25 or call +91 9958417463.
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <div>
                  <strong>Expert Guidance & Competitive Pricing:</strong> Professional advice on selecting the right protein, gainer, or supplement for your fitness goals.
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Cards Visual Column */}
          <div className="welcome-cards-col">
            <div className="welcome-card-box highlight-box">
              <div className="card-badge">STORE GUARANTEE</div>
              <h3>100% GENUINE SUPPLEMENT STORE</h3>
              <p>
                Say no to counterfeit proteins and fake supplements. PROTEIN HUB NUTRITION guarantees 100% authentic products with verified importer tags, original batch numbers, and direct delivery.
              </p>
              <div className="card-footer-stats">
                <div>
                  <span className="stat-num">100%</span>
                  <span className="stat-lbl">Authentic Product</span>
                </div>
                <div>
                  <span className="stat-num">DELHI-25</span>
                  <span className="stat-lbl">Zakir Nagar Store</span>
                </div>
              </div>
            </div>

            <div className="grid-2 welcome-sub-cards">
              <div className="asuk-card mini-card" onClick={() => handleNavClick('steroids')}>
                <BookOpen className="gold-icon" size={28} />
                <h4>FOR ATHLETES & GYM GOERS</h4>
                <p>Top Whey Proteins, Gainers, Creatine & Pre-Workouts.</p>
              </div>

              <div className="asuk-card mini-card" onClick={() => handleNavClick('services')}>
                <Activity className="gold-icon" size={28} />
                <h4>STORE LOCATION</h4>
                <p>R-280/4, Street 7, Near Qadri Masjid, Okhla, New Delhi-25.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
