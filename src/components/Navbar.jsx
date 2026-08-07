import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, Mail, Phone, MapPin, ShieldAlert, BookOpen, ExternalLink, Calendar } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openNewsletterModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, sectionId = null) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header-wrapper">
      {/* Main Navigation Header */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Protein Hub Nutrition Logo */}
          <div className="logo-brand" onClick={() => handleNavClick('home')}>
            <div className="logo-icon-box">
              <span className="logo-symbol">PH</span>
            </div>
            <div className="logo-text-box">
              <span className="logo-title">PROTEIN HUB</span>
              <span className="logo-subtitle">NUTRITION</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li className={activePage === 'home' ? 'active' : ''}>
              <button onClick={() => handleNavClick('home')}>HOME</button>
            </li>

            <li className={activePage === 'steroids' ? 'active' : ''}>
              <button onClick={() => handleNavClick('steroids')}>ANABOLIC STEROIDS & ASSOCIATED DRUGS</button>
            </li>

            {/* Research Dropdown */}
            <li 
              className={`has-dropdown ${activePage === 'research' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('research')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => handleNavClick('research')}>
                RESEARCH <ChevronDown size={14} className="chevron" />
              </button>
              {activeDropdown === 'research' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleNavClick('research', 'calls-for-participants')}>
                    CALLS FOR PARTICIPANTS
                  </button>
                  <button onClick={() => handleNavClick('research', 'iped-uk-stats')}>
                    IPED USE IN THE UK
                  </button>
                </div>
              )}
            </li>

            {/* Events Dropdown */}
            <li 
              className={`has-dropdown ${activePage === 'events' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('events')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={() => handleNavClick('events')}>
                EVENTS <ChevronDown size={14} className="chevron" />
              </button>
              {activeDropdown === 'events' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleNavClick('events', 'forthcoming-events')}>
                    FORTHCOMING EVENTS
                  </button>
                  <button onClick={() => handleNavClick('events', 'conference2020')}>
                    CONFERENCE 2020
                  </button>
                </div>
              )}
            </li>

            <li className={activePage === 'about' ? 'active' : ''}>
              <button onClick={() => handleNavClick('about')}>ABOUT ASUK</button>
            </li>

            <li className={activePage === 'newsletter' ? 'active' : ''}>
              <button onClick={() => openNewsletterModal()}>NEWSLETTER</button>
            </li>

            <li className={activePage === 'sponsors' ? 'active' : ''}>
              <button onClick={() => handleNavClick('sponsors')}>SPONSORS AND SUPPORTERS</button>
            </li>

            <li className={activePage === 'partners' ? 'active' : ''}>
              <button onClick={() => handleNavClick('partners')}>INTERNATIONAL PARTNERS</button>
            </li>

            <li className={activePage === 'academics' ? 'active' : ''}>
              <button onClick={() => handleNavClick('academics')}>ACADEMICS</button>
            </li>

            <li className={activePage === 'practitioners' ? 'active' : ''}>
              <button onClick={() => handleNavClick('practitioners')}>PRACTITIONERS</button>
            </li>

            <li className={activePage === 'resources' ? 'active' : ''}>
              <button onClick={() => handleNavClick('resources')}>RESOURCES</button>
            </li>

            <li className={activePage === 'services' ? 'active' : ''}>
              <button onClick={() => handleNavClick('services')}>SERVICES</button>
            </li>

            <li className={activePage === 'papers' ? 'active' : ''}>
              <button onClick={() => handleNavClick('papers')} className="highlight-nav-item">
                ACADEMIC PAPERS & REPORTS
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              <div className="mobile-nav-list">
                <button onClick={() => handleNavClick('home')} className="mobile-nav-item">HOME</button>
                <button onClick={() => handleNavClick('steroids')} className="mobile-nav-item">ANABOLIC STEROIDS AND ASSOCIATED DRUGS</button>
                
                <div className="mobile-group">
                  <span className="mobile-group-title">RESEARCH</span>
                  <button onClick={() => handleNavClick('research', 'calls-for-participants')} className="mobile-subitem">CALLS FOR PARTICIPANTS</button>
                  <button onClick={() => handleNavClick('research', 'iped-uk-stats')} className="mobile-subitem">IPED USE IN THE UK</button>
                </div>

                <div className="mobile-group">
                  <span className="mobile-group-title">EVENTS</span>
                  <button onClick={() => handleNavClick('events', 'forthcoming-events')} className="mobile-subitem">FORTHCOMING EVENTS</button>
                  <button onClick={() => handleNavClick('events', 'conference2020')} className="mobile-subitem">CONFERENCE 2020</button>
                </div>

                <button onClick={() => handleNavClick('about')} className="mobile-nav-item">ABOUT ASUK</button>
                <button onClick={() => openNewsletterModal()} className="mobile-nav-item">NEWSLETTER</button>
                <button onClick={() => handleNavClick('sponsors')} className="mobile-nav-item">SPONSORS AND SUPPORTERS</button>
                <button onClick={() => handleNavClick('partners')} className="mobile-nav-item">INTERNATIONAL PARTNERS</button>
                <button onClick={() => handleNavClick('academics')} className="mobile-nav-item">ACADEMICS</button>
                <button onClick={() => handleNavClick('practitioners')} className="mobile-nav-item">PRACTITIONERS</button>
                <button onClick={() => handleNavClick('resources')} className="mobile-nav-item">RESOURCES</button>
                <button onClick={() => handleNavClick('services')} className="mobile-nav-item">SERVICES</button>
                <button onClick={() => handleNavClick('papers')} className="mobile-nav-item gold-text">ACADEMIC PAPERS & REPORTS</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
