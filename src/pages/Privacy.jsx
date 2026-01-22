import React from "react";
import Footer from "./Footer";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>

        <p className="privacy-intro">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>

        <section className="privacy-section">
          <h3>Information We Collect</h3>
          <ul>
            <li>Name and job title</li>
            <li>Phone number and email address</li>
            <li>Delivery address</li>
            <li>Preferences and interests</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>How We Use Your Information</h3>
          <p>
            We use your information to deliver food, improve our services,
            send promotional offers, and conduct market research.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Security</h3>
          <p>
            We are committed to keeping your data secure using physical,
            electronic, and managerial safeguards.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Cookies</h3>
          <p>
            Cookies help us understand how users interact with our website so
            we can improve your experience.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Third-Party Links</h3>
          <p>
            Our website may contain links to other websites. We are not
            responsible for the privacy practices of those sites.
          </p>
        </section>

        <section className="privacy-section">
          <h3>Your Rights</h3>
          <p>
            You may request access, correction, or deletion of your personal
            data at any time by contacting us.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
