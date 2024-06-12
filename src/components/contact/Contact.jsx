import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-component">
      <div className="logo-contact">
        <img src="./logo.png" alt="logo-icon" />
        <div className="company-name">
          <h3>SES</h3>
          <p>Synergy ERP Solution</p>
        </div>
      </div>
      <div className="email-phone">
        <div className="phone">
          <FaPhone color="orange" />
          <span>(021) 2345 6789</span>
        </div>
        <div className="email">
          <IoMdMail color="orange" />
          <span>sales@ses.gmail.com</span>
        </div>
      </div>
      <div className="social-media">
        <div className="box-sosmed">
          <FaInstagram color="orange" />
        </div>
        <div className="box-sosmed">
          <TbBrandFacebookFilled color="orange" />
        </div>
        <div className="box-sosmed">
          <FaTwitter color="orange" />
        </div>
        <div className="box-sosmed">
          <IoLogoYoutube color="orange" />
        </div>
      </div>
    </div>
  );
}
