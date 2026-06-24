import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Drop us a message or visit our bakery.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info-cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div className="info-card" variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              <MapPin className="info-icon" />
              <h3>Visit Us</h3>
              <p>Unit 9/23-29 Civic Dr, Greensborough VIC 3088, Australia</p>
              
            </motion.div>
            
            <motion.div className="info-card" variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              <Phone className="info-icon" />
              <h3>Call Us</h3>
              <p>+61 493 935 658</p>
              <p>For custom orders</p>
            </motion.div>
            
            <motion.div className="info-card" variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              <Clock className="info-icon" />
              <h3>Hours</h3>
              <p>Mon - Fri: 5:30 AM - 3:00 PM</p>
              <p>Sat : 7:30 AM - 2:00 PM</p>
              <p>Sun: Closed</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
