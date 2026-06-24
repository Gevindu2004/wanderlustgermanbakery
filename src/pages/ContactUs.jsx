import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page animate-fade-in section">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Drop us a message or visit our bakery.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-cards">
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Visit Us</h3>
              <p>Unit 9/23-29 Civic Dr, Greensborough VIC 3088, Australia</p>
              
            </div>
            
            <div className="info-card">
              <Phone className="info-icon" />
              <h3>Call Us</h3>
              <p>+61 493 935 658</p>
              <p>For custom orders</p>
            </div>
            
            <div className="info-card">
              <Clock className="info-icon" />
              <h3>Hours</h3>
              <p>Mon - Fri: 5:30 AM - 3:00 PM</p>
              <p>Sat : 7:30 AM - 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
