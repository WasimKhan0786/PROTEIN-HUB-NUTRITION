import React from 'react';
import { UserCheck, PieChart, FileSpreadsheet, ArrowUpRight, HelpCircle, AlertCircle } from 'lucide-react';

export default function ResearchSection({ handleNavClick }) {
  const activeCalls = [
    {
      id: 'call-1',
      title: 'UK National IPED Bloodwork & Cardiovascular Health Study 2026',
      institution: 'Liverpool John Moores University & ASUK Research Team',
      lead: 'Dr. Joseph Underwood & Prof. James McVeigh',
      target: 'UK-based male & female AAS users (aged 18-60) currently on or off cycle.',
      deadline: '31 October 2026',
      incentive: 'Confidential full lipid, liver, renal & blood pressure diagnostic panel provided free of charge.',
      badge: 'URGENT RECRUITMENT'
    },
    {
      id: 'call-2',
      title: 'Female IPED Use & Endocrine Disruptions: Qualitative Survey',
      institution: 'Manchester Metropolitan University Sub-Group',
      lead: 'Dr. Katrina Hope',
      target: 'Female athletes, bodybuilders, and fitness enthusiasts using oxandrolone, SARMs, or fat burners.',
      deadline: '15 November 2026',
      incentive: '£25 Amazon voucher upon completion of confidential interview.',
      badge: 'OPEN FOR PARTICIPANTS'
    },
    {
      id: 'call-3',
      title: 'Post-Cycle Therapy (PCT) Efficacy in Restoring HPTA Function',
      institution: 'Imperial College London Clinical Endocrinology',
      lead: 'Dr. Marcus Vance',
      target: 'Former long-term AAS users who discontinued use in the past 6-24 months.',
      deadline: '30 December 2026',
      incentive: 'Endocrine hormonal assessment & access to specialist clinical guidance.',
      badge: 'NEW STUDY'
    }
  ];

  return (
    <section className="section-padding research-section" id="research-section">
      <div className="container">
        {/* Calls for Participants Sub-Section */}
        <div className="research-block" id="calls-for-participants">
          <div className="section-header">
            <span className="section-subtitle">RESEARCH & PARTICIPATION</span>
            <h2 className="section-title">CALLS FOR PARTICIPANTS</h2>
            <p className="section-desc">
              Contribute to groundbreaking ethical research. All studies are vetted by university ethics committees and guarantee 100% strict anonymity.
            </p>
          </div>

          <div className="grid-3 research-calls-grid">
            {activeCalls.map(call => (
              <div className="asuk-card call-card" key={call.id}>
                <span className="badge-gold">{call.badge}</span>
                <h3 className="call-title">{call.title}</h3>
                
                <div className="call-meta">
                  <p><strong>Institution:</strong> {call.institution}</p>
                  <p><strong>Lead Researchers:</strong> {call.lead}</p>
                  <p><strong>Target Group:</strong> {call.target}</p>
                </div>

                <div className="call-incentive">
                  <strong>Participant Benefit:</strong> {call.incentive}
                </div>

                <div className="call-footer">
                  <span className="deadline-tag">Deadline: {call.deadline}</span>
                  <button className="btn-primary mini-btn">
                    TAKE SURVEY <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IPED Use in the UK Sub-Section */}
        <div className="research-block stats-block" id="iped-uk-stats">
          <div className="section-header">
            <span className="section-subtitle">EPIDEMIOLOGICAL DATA</span>
            <h2 className="section-title">IPED USE IN THE UNITED KINGDOM</h2>
            <p className="section-desc">
              Key empirical insights from national needle syringe programs (NSP), crime surveys, and ASUK annual epidemiological reporting.
            </p>
          </div>

          <div className="grid-4 uk-stats-grid">
            <div className="stat-box">
              <span className="stat-value">56%</span>
              <span className="stat-label">NSP Client Majority</span>
              <p className="stat-detail">IPED users now constitute over half of all service attendees at needle exchanges in England and Wales.</p>
            </div>

            <div className="stat-box">
              <span className="stat-value">4.2 YRS</span>
              <span className="stat-label">Average Use Duration</span>
              <p className="stat-detail">Mean continuous or cyclic administration period reported among regular UK strength athletes.</p>
            </div>

            <div className="stat-box">
              <span className="stat-value">78%</span>
              <span className="stat-label">Poly-Substance Use</span>
              <p className="stat-detail">Concomitant use of AAS alongside growth hormone, insulin, SARMs, or fat burners.</p>
            </div>

            <div className="stat-box">
              <span className="stat-value">31%</span>
              <span className="stat-label">SARM & Peptide Growth</span>
              <p className="stat-detail">Rapid growth in non-injectable selective androgen receptor modulator use among younger demographics (18-24).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
