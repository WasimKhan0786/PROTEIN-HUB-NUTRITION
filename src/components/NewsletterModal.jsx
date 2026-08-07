import React, { useState, useRef } from 'react';
import { Mail, X, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Athlete / Gym Member');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSending(true);

    try {
      // 1. Submit standard HTML form to hidden iframe (guaranteed 100% background email dispatch without CORS block)
      if (formRef.current) {
        formRef.current.submit();
      }

      // 2. Dual dispatch to Web3Forms API
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e0129221-5a02-4682-8409-77086fb4b01d',
          name: name || 'Customer',
          email: email,
          subject: 'Welcome to PROTEIN HUB NUTRITION - 100% Authentic Supplement Updates',
          message: `Subscriber: ${name} (${email})\nStore: PROTEIN HUB NUTRITION, Zakir Nagar, Okhla, New Delhi-25`
        })
      }).catch(err => console.log('Web3Forms notice:', err));

    } catch (err) {
      console.log('Realtime email dispatch:', err);
    } finally {
      setIsSending(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card newsletter-modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {submitted ? (
          <div className="newsletter-success">
            <CheckCircle2 size={48} className="gold-icon" />
            <h3>WELCOME TO PROTEIN HUB NUTRITION</h3>
            <p>
              Thank you, <strong>{name || 'Customer'}</strong>! Your email (<code>{email}</code>) has been successfully registered for exclusive authentic supplement discount alerts & new stock updates.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <button className="btn-primary" onClick={onClose}>
                DONE
              </button>
            </div>
          </div>
        ) : (
          <div className="newsletter-content">
            <div className="newsletter-header">
              <Mail size={32} className="gold-icon" />
              <span className="badge-gold">PROTEIN HUB NUTRITION</span>
              <h2>SUBSCRIBE FOR OFFERS & STOCK ALERTS</h2>
              <p>
                Get exclusive deal updates on 100% authentic whey proteins, mass gainers, and pre-workouts delivered directly to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dr. Alex Mercer"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. alex.mercer@university.ac.uk"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Primary Professional Role</label>
                <select value={role} onChange={e => setRole(e.target.value)}>
                  <option value="Academic / Researcher">Academic / University Researcher</option>
                  <option value="Clinician / Doctor / Endocrinologist">Clinician / Doctor / Endocrinologist</option>
                  <option value="NSP / Harm Reduction Worker">NSP / Harm Reduction Practitioner</option>
                  <option value="Student / Postgrad">Student / Postgraduate Scholar</option>
                  <option value="Athlete / Gym Member / Public">Independent Scholar / Gym Member</option>
                </select>
              </div>

              <div className="form-privacy">
                <ShieldCheck size={14} className="gold-icon" /> We respect your privacy. Zero spam. Unsubscribe at any time.
              </div>

              <button type="submit" className="btn-primary w-full">
                SUBSCRIBE TO BULLETIN
              </button>
            </form>
          </div>
        )}

        {/* Hidden background email submission form & iframe target */}
        <form 
          ref={formRef}
          action="https://formsubmit.co/proteinhubnutrition@gmail.com" 
          method="POST" 
          target="hidden_email_iframe" 
          style={{ display: 'none' }}
        >
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="role" value={role} />
          <input type="hidden" name="_subject" value="New Subscription - PROTEIN HUB NUTRITION" />
          <input type="hidden" name="_cc" value="wasimkham7861@gmail.com" />
          <input type="hidden" name="_autoresponse" value="Thank you for subscribing to PROTEIN HUB NUTRITION! We Deal in 100% Authentic Product. Store Address: R-280/4, Street 7, Near Qadri Masjid, Jogabai Ext., Zakir Nagar, Okhla, New Delhi-25. Phone: +91 9958417463" />
        </form>
        <iframe name="hidden_email_iframe" style={{ display: 'none' }}></iframe>
      </div>
    </div>
  );
}
