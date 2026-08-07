import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import IPEDSection from './components/IPEDSection';
import ResearchSection from './components/ResearchSection';
import EventsSection from './components/EventsSection';
import PapersSection from './components/PapersSection';
import PortalsSection from './components/PortalsSection';
import SponsorsSection from './components/SponsorsSection';
import NewsletterModal from './components/NewsletterModal';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const openNewsletterModal = () => setIsNewsletterOpen(true);
  const closeNewsletterModal = () => setIsNewsletterOpen(false);

  // Scroll to top on page state change unless anchor target is specified
  const handleNavClick = (pageId, sectionId = null) => {
    setActivePage(pageId);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="asuk-app">
      {/* Global Header Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openNewsletterModal={openNewsletterModal} 
      />

      {/* Main Content Areas */}
      <main>
        {activePage === 'home' && (
          <>
            <Hero handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
            <WelcomeSection handleNavClick={handleNavClick} />
            <IPEDSection handleNavClick={handleNavClick} />
            <ResearchSection handleNavClick={handleNavClick} />
            <SponsorsSection openNewsletterModal={openNewsletterModal} />
            <PortalsSection activePage={activePage} handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
          </>
        )}

        {activePage === 'steroids' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">PHARMACOLOGY DATABASE</span>
                <h1>ANABOLIC STEROIDS AND ASSOCIATED DRUGS</h1>
                <p>Complete scientific reference guide on AAS, Growth Hormones, SARMs, and ancillaries.</p>
              </div>
            </div>
            <IPEDSection handleNavClick={handleNavClick} />
            <PapersSection />
          </div>
        )}

        {activePage === 'research' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">ACADEMIC RESEARCH & DATA</span>
                <h1>ASUK RESEARCH & UK EPIDEMIOLOGY</h1>
                <p>Calls for study participants and epidemiological statistics on UK drug use.</p>
              </div>
            </div>
            <ResearchSection handleNavClick={handleNavClick} />
          </div>
        )}

        {activePage === 'events' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">CONFERENCES & WEBINARS</span>
                <h1>EVENTS & CONFERENCE PRESENTATIONS</h1>
                <p>Watch recordings from Virtual Conference 2020 and register for forthcoming symposia.</p>
              </div>
            </div>
            <EventsSection />
          </div>
        )}

        {activePage === 'about' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">NETWORK MISSION</span>
                <h1>ABOUT ANABOLIC STEROIDS UK</h1>
                <p>Independent multi-disciplinary academic network for harm reduction science.</p>
              </div>
            </div>
            <WelcomeSection handleNavClick={handleNavClick} />
            <PortalsSection activePage={activePage} handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
          </div>
        )}

        {activePage === 'sponsors' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">INSTITUTIONAL SUPPORTERS</span>
                <h1>SPONSORS AND SUPPORTERS</h1>
                <p>UK universities, NHS trusts, and research foundations backing ASUK.</p>
              </div>
            </div>
            <SponsorsSection openNewsletterModal={openNewsletterModal} />
          </div>
        )}

        {activePage === 'partners' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">GLOBAL COLLABORATION</span>
                <h1>INTERNATIONAL PARTNERS</h1>
                <p>European and global research collectives in partnership with ASUK.</p>
              </div>
            </div>
            <PortalsSection activePage={activePage} handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
          </div>
        )}

        {(activePage === 'academics' || activePage === 'practitioners' || activePage === 'resources' || activePage === 'services') && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">CLINICAL & ACADEMIC PORTAL</span>
                <h1>{activePage.toUpperCase()} SERVICES & TOOLKITS</h1>
                <p>Dedicated resources for researchers, clinicians, and harm reduction workers.</p>
              </div>
            </div>
            <PortalsSection activePage={activePage} handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
          </div>
        )}

        {activePage === 'papers' && (
          <div className="subpage-wrapper">
            <div className="page-hero-banner">
              <div className="container">
                <span className="badge-gold">PEER-REVIEWED LIBRARY</span>
                <h1>ACADEMIC PAPERS & REPORTS</h1>
                <p>Searchable repository of peer-reviewed articles, guidelines, and policy briefs.</p>
              </div>
            </div>
            <PapersSection />
          </div>
        )}
      </main>

      {/* Global Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterOpen} onClose={closeNewsletterModal} />

      {/* Global Floating Chatbot Assistant */}
      <Chatbot />

      {/* Global Scroll To Top Floating Arrow */}
      <ScrollToTop />

      {/* Global Footer */}
      <Footer handleNavClick={handleNavClick} openNewsletterModal={openNewsletterModal} />
    </div>
  );
}
