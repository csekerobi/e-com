import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaPhone, FaPinterest } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { footerLinks } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import payment from "../../assets/payment.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">E-Commerce</h1>
        <p className="footer-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum veniam
          nihil ut fuga, sequi quidem excepturi reprehenderit odio.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebook className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e44059" }}>
            <FaInstagram className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <CiTwitter className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaLocationDot style={{ marginRight: 10 }} /> 123 Street, City
        </div>
        <div className="contact-item">
          <FaPhone style={{ marginRight: 10 }} /> +123456789
        </div>
        <div className="contact-item">
          <IoMail style={{ marginRight: 10 }} /> email@email.com
        </div>
        <img src={payment} alt="payment" className="payment" />
      </div>
    </div>
  );
}

export default Footer;
