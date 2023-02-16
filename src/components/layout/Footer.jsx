import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BIGBurger</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @BIGBurger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/abhisek-rout-a13886225/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/abhisek_rout__/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Abhisekrout135">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
