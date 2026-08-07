import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Play, Download, MapPin, Clock, Users, X, Award, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Upcoming events header
      gsap.from('.events-section .section-subtitle', {
        scrollTrigger: { trigger: '#forthcoming-events', start: 'top 82%', once: true },
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out'
      });
      gsap.from('#forthcoming-events .section-title', {
        scrollTrigger: { trigger: '#forthcoming-events', start: 'top 82%', once: true },
        y: 40, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
      });
      // Event cards slide in from alternating sides
      gsap.from('.event-card', {
        scrollTrigger: { trigger: '.upcoming-events-grid', start: 'top 85%', once: true },
        y: 60, opacity: 0, duration: 0.75, stagger: 0.2, ease: 'power3.out'
      });
      // Conference banner
      gsap.from('.conf-banner-content', {
        scrollTrigger: { trigger: '.conf-banner', start: 'top 85%', once: true },
        x: -70, opacity: 0, duration: 0.9, ease: 'power3.out'
      });
      gsap.from('.conf-banner-img', {
        scrollTrigger: { trigger: '.conf-banner', start: 'top 85%', once: true },
        x: 70, opacity: 0, duration: 0.9, ease: 'power3.out'
      });
      // Presentation cards stagger
      gsap.from('.presentation-card', {
        scrollTrigger: { trigger: '.conference-grid', start: 'top 85%', once: true },
        y: 50, opacity: 0, duration: 0.65, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const conference2020Presentations = [
    {
      id: 'pres-1',
      title: 'Anabolic Steroid Users and Healthcare Engagement: Stigma, Trust and Harm Reduction',
      speaker: 'Prof. Jim McVeigh',
      affiliation: 'Liverpool John Moores University / ASUK Director',
      duration: '38 mins',
      abstract: 'Analyzing structural barriers preventing IPED users from seeking NHS medical care, liver/lipid monitoring, and harm reduction advice.',
      slidesPdf: '#',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'pres-2',
      title: 'Cardiovascular Risk Profiles & Biomarkers in Long-Term AAS Administration',
      speaker: 'Dr. Harrison Cox',
      affiliation: 'Royal Brompton & Harefield NHS Foundation Trust',
      duration: '45 mins',
      abstract: 'Echocardiographic findings, systolic/diastolic dysfunction, arterial stiffness, and apoB/HDL ratio alterations in weight trainers.',
      slidesPdf: '#',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'pres-3',
      title: 'Post-Steroid Induced Hypogonadism (ASIH): Clinical Protocols & Recovery',
      speaker: 'Dr. Joseph Underwood',
      affiliation: 'Consultant Endocrinologist, Birmingham Health Partners',
      duration: '42 mins',
      abstract: 'Evidence-based hormonal restoration pathways using SERMs, gonadotropins (hCG/hMG), and androgen replacement therapies.',
      slidesPdf: '#',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'pres-4',
      title: 'The Underground Market & Chemical Analysis of UK IPED Products',
      speaker: 'Dr. Michael Evans-Brown',
      affiliation: 'European Monitoring Centre for Drugs and Drug Addiction (EMCDDA)',
      duration: '34 mins',
      abstract: 'Lab testing results detailing contamination rates, heavy metal risks, and under-dosing prevalence in illicit UGL anabolic steroids.',
      slidesPdf: '#',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const upcomingEvents = [
    {
      id: 'event-1',
      title: 'ASUK Annual Scientific Conference 2026: The Next Decade in IPED Research',
      date: '14-15 November 2026',
      location: 'Royal College of Physicians, London & Hybrid Stream',
      type: 'National Symposium',
      desc: 'Bringing together over 400 international delegates to discuss clinical management, SARMs emergence, and public health policy.'
    },
    {
      id: 'event-2',
      title: 'Practical Harm Reduction Masterclass for NSP & Healthcare Practitioners',
      date: '28 September 2026',
      location: 'Online Interactive Workshop',
      type: 'Clinical Workshop',
      desc: 'Hands-on webinar covering bloodwork reading, needle exchange harm reduction advice, and recognizing cardiac distress signs.'
    }
  ];

  return (
    <section className="section-padding events-section" id="events-section" ref={sectionRef}>
      <div className="container">
        {/* Forthcoming Events Sub-Section */}
        <div className="events-block" id="forthcoming-events">
          <div className="section-header">
            <span className="section-subtitle">NETWORKING & SYMPOSIA</span>
            <h2 className="section-title">FORTHCOMING EVENTS</h2>
            <p className="section-desc">
              Join leading academic researchers, NHS clinicians, and public health advocates at our upcoming events.
            </p>
          </div>

          <div className="grid-2 upcoming-events-grid">
            {upcomingEvents.map(event => (
              <div className="asuk-card event-card" key={event.id}>
                <div className="event-date-badge">
                  <Calendar size={18} className="gold-icon" />
                  <span>{event.date}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span><MapPin size={14} /> {event.location}</span>
                  <span className="badge-gold">{event.type}</span>
                </div>
                <p className="event-desc">{event.desc}</p>
                <div className="event-actions">
                  <button className="btn-primary mini-btn">REGISTER DELEGATE PASS</button>
                  <button className="btn-outline mini-btn">SUBMIT ABSTRACT</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference 2020 Sub-Section */}
        <div className="events-block conf-block" id="conference2020">
          <div className="conf-banner">
            <div className="conf-banner-content">
              <div className="badge-gold">FEATURED ARCHIVE</div>
              <h2 className="conf-banner-title">ASUK VIRTUAL CONFERENCE 2020 RECAP</h2>
              <p className="conf-banner-desc">
                Access video presentations, slide decks, and transcripts from our landmark 2020 scientific conference on Anabolic Steroids & IPEDs.
              </p>
            </div>
            <div className="conf-banner-img">
              <img src="/assets/conference_stage.png" alt="Conference Stage" />
            </div>
          </div>

          <div className="grid-2 conference-grid">
            {conference2020Presentations.map(pres => (
              <div className="asuk-card presentation-card" key={pres.id}>
                <div className="pres-header">
                  <span className="duration-tag"><Clock size={12} /> {pres.duration}</span>
                  <span className="badge-gold">2020 KEYNOTE</span>
                </div>
                
                <h3 className="pres-title">{pres.title}</h3>
                <p className="pres-speaker"><strong>{pres.speaker}</strong> ({pres.affiliation})</p>
                <p className="pres-abstract">{pres.abstract}</p>

                <div className="pres-actions">
                  <button 
                    className="btn-primary mini-btn" 
                    onClick={() => setSelectedPresentation(pres)}
                  >
                    <Play size={14} /> WATCH PRESENTATION
                  </button>

                  <button className="btn-outline mini-btn">
                    <Download size={14} /> SLIDES (PDF)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Presentation Modal */}
      {selectedPresentation && (
        <div className="modal-backdrop" onClick={() => setSelectedPresentation(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge-gold">ASUK CONFERENCE PRESENTATION</span>
                <h3>{selectedPresentation.title}</h3>
                <p className="modal-sub">{selectedPresentation.speaker} — {selectedPresentation.affiliation}</p>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedPresentation(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-video-container">
              <iframe 
                src={selectedPresentation.videoUrl} 
                title={selectedPresentation.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="modal-footer">
              <p>{selectedPresentation.abstract}</p>
              <div className="modal-actions">
                <button className="btn-primary mini-btn" onClick={() => alert('Downloading presentation transcript PDF...')}>
                  <Download size={14} /> DOWNLOAD TRANSCRIPT (PDF)
                </button>
                <button className="btn-outline mini-btn" onClick={() => setSelectedPresentation(null)}>
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
