import React, { useRef } from "react";
import { faEnvelope, faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

const Contact = ({ theme }) => {
  const form = useRef(); // Create a ref for the form
  const image3 = theme === "light" ? "/shape-top-grey-80.png" : "/shape-top-dark-grey-80.png";

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_iv2nb18", // Replace with your EmailJS service ID
        "template_j8xoe9h", // Replace with your EmailJS template ID
        form.current, // Pass the form reference
        "zZvNP0ejMOExAsSTs" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!"); // Alert success message
          form.current.reset(); // Optional: Clear form fields after success
        },
        (error) => {
          alert("Failed to send message. Please try again."); // Alert failure message
          console.error("Error:", error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact-info-section">
        <div className="top-grey">
          {/* Optional Background Image */}
        </div>
        <div className="flex-container">
          {/* Left Info Box */}
          <div className="info-boxes">
            <h3>For More Information:</h3>
            <p><strong>Hotlines:</strong> 09024845509</p>
            <p><strong>Email:</strong> honeytreatacademy45@gmail.com</p>
            <p><strong>Audition Location:</strong> 19, Tijani Bello Street,Ojodu</p>
          </div>

          {/* Right Form Box */}
          <div className="form-box">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <FontAwesomeIcon icon={faUser} className="fas fa-user" /> Name
                  <input
                    type="text"
                    name="user_name" // Field name must match EmailJS template variables
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" /> Email Address
                  <input
                    type="email"
                    name="user_email" // Field name must match EmailJS template variables
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-full">
                <div className="form-group2">
                  <FontAwesomeIcon icon={faPencil} className="fas fa-pencil" /> How can we help you? Feel free to get in touch!
                  <textarea
                    name="message" // Field name must match EmailJS template variables
                    rows={3}
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="button-box">
                <button type="submit" className="contact-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
