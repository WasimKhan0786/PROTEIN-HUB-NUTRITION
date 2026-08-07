import React, { useRef, useEffect } from 'react';
import { ShieldCheck, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ handleNavClick, openNewsletterModal }) {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        scrollTrigger: { trigger: '.footer-section', start: 'top 90%', once: true },
        y: 40, opacity: 0, duration: 0.65, stagger: 0.15, ease: 'power3.out'
      });
      gsap.from('.footer-bottom', {
        scrollTrigger: { trigger: '.footer-section', start: 'top 85%', once: true },
        y: 20, opacity: 0, duration: 0.5, delay: 0.6, ease: 'power2.out'
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);
  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="container">
        <div className="grid-4 footer-grid">
          {/* Col 1: Protein Hub Brand */}
          <div className="footer-col">
            <div className="logo-brand" onClick={() => handleNavClick('home')}>
              <div className="logo-icon-box">
                <span className="logo-symbol">PH</span>
              </div>
              <div className="logo-text-box">
                <span className="logo-title">PROTEIN HUB</span>
                <span className="logo-subtitle">NUTRITION</span>
              </div>
            </div>
            <p className="footer-about-text">
              We Deal in 100% Authentic Product. Premium sports nutrition, whey protein, mass gainers, pre-workouts, and essential health supplements.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4>QUICK NAVIGATION</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('steroids')}>Supplements & Products</button></li>
              <li><button onClick={() => handleNavClick('research', 'calls-for-participants')}>Research & Quality</button></li>
              <li><button onClick={() => handleNavClick('about')}>About Store</button></li>
              <li><button onClick={() => handleNavClick('sponsors')}>Official Importers & Partners</button></li>
            </ul>
          </div>

          {/* Col 3: Product Portals */}
          <div className="footer-col">
            <h4>CATEGORIES & SERVICES</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('academics')}>Whey Proteins & Isolate</button></li>
              <li><button onClick={() => handleNavClick('practitioners')}>Mass & Weight Gainers</button></li>
              <li><button onClick={() => handleNavClick('resources')}>Pre-Workouts & Creatine</button></li>
              <li><button onClick={() => handleNavClick('services')}>Consultation Services</button></li>
              <li><button onClick={() => openNewsletterModal()}>Offers & Updates</button></li>
            </ul>
          </div>

          {/* Col 4: Store Contact & Location */}
          <div className="footer-col">
            <h4>STORE CONTACT DETAILS</h4>
            <div className="footer-contact-info">
              <p><MapPin size={16} className="gold-icon" /> R-280/4, Street 7, Near Qadri Masjid, Jogabai Ext., Zakir Nagar, Okhla, New Delhi-25</p>
              <p><Phone size={16} className="gold-icon" /> <a href="tel:+919958417463">+91 9958417463</a></p>
              <p><Mail size={16} className="gold-icon" /> <a href="mailto:proteinhubnutrition@gmail.com">proteinhubnutrition@gmail.com</a></p>
            </div>
            <button className="btn-primary mini-btn full-w" onClick={openNewsletterModal}>
              CONTACT STORE
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PROTEIN HUB NUTRITION. All Rights Reserved.</p>
          <p className="footer-credit">We Deal in 100% Authentic Product</p>
        </div>
      </div>
    </footer>
  );
}
