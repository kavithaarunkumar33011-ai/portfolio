import React from 'react'
import '../Style/GetinTouch.css';
import { FaGithub, FaLinkedin, FaTwitter, FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const GetInTouch = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <div className="header-line"></div>

      <div className="contact-container row g-4">
        
        {/* Left: Info */}
        <div className="contact-info col-12 col-lg-6">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

          <div className="info-item">
            <div className="icon">
            <FaLocationDot />  </div>
            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
        

          <div className="info-item">
            <div className="icon">
            <MdEmail />  </div>
            <div>
              <h4>Email</h4>
              <p>kavithaarunkumar33011@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <FaPhone />  </div>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 9080042787</p>
            </div>
          </div>

          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href='https://github.com/kavithaarunkumar33011-ai' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/kavitha-arunkumar-5b8745370/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a href='https://twitter.com/yourhandle' target='_blank' rel='noopener noreferrer'>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form col-12 col-lg-6">
          <h3>Send Me a Message</h3>
          <form action="https://formsubmit.co/kavithaarunkumar33011@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from Portfolio!" />

            <div className="form-row row g-3">
              <div className="form-group col-12 col-md-6">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group col-12 col-md-6">
                <label>Your Email</label>
                <input type="email" name="kavithaarunkumar33011@gmail.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-send">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
export default GetInTouch;