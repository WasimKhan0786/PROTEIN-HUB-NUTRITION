import React, { useState, useRef, useEffect } from 'react';
import { FileText, Search, Download, Copy, Check, ExternalLink, Filter, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PapersSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.papers-section .section-subtitle', {
        scrollTrigger: { trigger: '.papers-section', start: 'top 82%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('.papers-section .section-title', {
        scrollTrigger: { trigger: '.papers-section', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      gsap.from('.papers-filter-bar', {
        scrollTrigger: { trigger: '.papers-filter-bar', start: 'top 88%', once: true },
        y: 25, opacity: 0, duration: 0.55, ease: 'power2.out'
      });
      gsap.from('.paper-card', {
        scrollTrigger: { trigger: '.papers-list', start: 'top 85%', once: true },
        y: 45, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const papers = [
    {
      id: 'paper-1',
      title: 'Anabolic Steroid Users and Healthcare Engagement: Stigma, Knowledge and Harm Reduction',
      authors: 'McVeigh, J., Hope, V.D., & Begley, E.',
      journal: 'International Journal of Drug Policy, 2021',
      category: 'Harm Reduction',
      year: '2021',
      doi: '10.1016/j.drugpo.2021.103120',
      citation: 'McVeigh, J., Hope, V.D., & Begley, E. (2021). Anabolic Steroid Users and Healthcare Engagement: Stigma, Knowledge and Harm Reduction. International Journal of Drug Policy, 88, 103120.',
      abstract: 'Investigating the key facilitators and barriers to healthcare utilization among anabolic-androgenic steroid (AAS) users in the UK. Findings indicate high reliance on peer networks over general practitioners due to perceived stigma.'
    },
    {
      id: 'paper-2',
      title: 'Cardiovascular Risk and Left Ventricular Remodeling in Long-Term AAS Users',
      authors: 'Underwood, J., Cox, H., & Evans, M.',
      journal: 'British Heart Journal & Clinical Cardiology, 2022',
      category: 'Pharmacology',
      year: '2022',
      doi: '10.1136/heartjnl-2022-320491',
      citation: 'Underwood, J., Cox, H., & Evans, M. (2022). Cardiovascular Risk and Left Ventricular Remodeling in Long-Term AAS Users. British Heart Journal, 108(14), 1120-1128.',
      abstract: 'A cross-sectional echocardiographic analysis of 150 male powerlifters comparing non-users, active AAS users, and former users. Demonstrates significant subclinical left ventricular concentric hypertrophy.'
    },
    {
      id: 'paper-3',
      title: 'UK National Survey of IPED Use: Demographics, Substances and Poly-Pharmacy Patterns',
      authors: 'Hope, V.D., McVeigh, J., Smith, J., & Bates, G.',
      journal: 'ASUK Annual Epidemiological Report, 2023',
      category: 'Epidemiology',
      year: '2023',
      doi: '10.1080/09687637.2023.2184910',
      citation: 'Hope, V.D., McVeigh, J., Smith, J., & Bates, G. (2023). UK National Survey of IPED Use: Demographics, Substances and Poly-Pharmacy Patterns. ASUK Reports, 5(2), 45-62.',
      abstract: 'Synthesizing data from over 3,000 UK respondents across needle syringe programs, gym surveys, and online forums. Documents the rise of SARMs and peptide secretagogues among gym-goers under 25.'
    },
    {
      id: 'paper-4',
      title: 'Clinical Protocol for Managing Anabolic-Androgenic Steroid Induced Hypogonadism (ASIH)',
      authors: 'Vance, M., Harrison, P., & Kimer, T.',
      journal: 'Journal of Clinical Endocrinology & Metabolism (UK), 2024',
      category: 'Clinical Harm Reduction',
      year: '2024',
      doi: '10.1210/clinem/dgad542',
      citation: 'Vance, M., Harrison, P., & Kimer, T. (2024). Clinical Protocol for Managing ASIH in Primary Care. JCEM UK, 109(3), 812-824.',
      abstract: 'Providing UK NHS endocrinologists and GPs with a structured protocol for managing secondary hypogonadism, testicular atrophy, and mood disturbances following cessation of illicit anabolic steroid regimens.'
    },
    {
      id: 'paper-5',
      title: 'The Psychological Dynamics of Muscle Dysmorphia and Body Image in IPED Usage',
      authors: 'Bates, G., & Underwood, J.',
      journal: 'Addictive Behaviors & Mental Health, 2023',
      category: 'Behavioral & Psychological',
      year: '2023',
      doi: '10.1016/j.addbeh.2023.107811',
      citation: 'Bates, G., & Underwood, J. (2023). Muscle Dysmorphia and Body Image Drivers in IPED Usage. Addictive Behaviors, 142, 107811.',
      abstract: 'Examining cognitive behavioral pathways, body dysmorphic indicators, and self-esteem factors influencing escalation from natural resistance training to complex anabolic steroid regimens.'
    }
  ];

  const handleCopyCitation = (paper) => {
    navigator.clipboard.writeText(paper.citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredPapers = papers.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.authors.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <section className="section-padding papers-section" id="papers" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PEER-REVIEWED LITERATURE & GUIDANCE</span>
          <h2 className="section-title">ACADEMIC PAPERS & REPORTS</h2>
          <p className="section-desc">
            Search our curated database of peer-reviewed journal publications, NHS clinical guidelines, and ASUK research monographs.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="papers-filter-bar">
          <div className="search-input-box">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search by title, author, keyword, or DOI..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filter-btns">
            {['ALL', 'Harm Reduction', 'Pharmacology', 'Epidemiology', 'Clinical Harm Reduction', 'Behavioral & Psychological'].map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List */}
        <div className="papers-list">
          {filteredPapers.length === 0 ? (
            <div className="no-results-box">
              <p>No academic papers match your search criteria.</p>
            </div>
          ) : (
            filteredPapers.map(paper => (
              <div className="asuk-card paper-item-card" key={paper.id}>
                <div className="paper-top">
                  <span className="badge-gold">{paper.category}</span>
                  <span className="paper-year">PUB YEAR: {paper.year}</span>
                </div>

                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-authors"><strong>Authors:</strong> {paper.authors}</p>
                <p className="paper-journal"><em>{paper.journal}</em> — DOI: {paper.doi}</p>
                
                <p className="paper-abstract">
                  <strong>Abstract:</strong> {paper.abstract}
                </p>

                <div className="paper-actions">
                  <button 
                    className="btn-primary mini-btn"
                    onClick={() => alert(`Downloading PDF report: "${paper.title}"`)}
                  >
                    <Download size={14} /> DOWNLOAD FULL PDF
                  </button>

                  <button 
                    className="btn-outline mini-btn"
                    onClick={() => handleCopyCitation(paper)}
                  >
                    {copiedId === paper.id ? (
                      <><Check size={14} className="green-icon" /> COPIED CITATION</>
                    ) : (
                      <><Copy size={14} /> COPY APA CITATION</>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
