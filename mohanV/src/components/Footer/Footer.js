import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer>
    <h2 class="footer-logo"> Mohan Ventures</h2>
        <div id="footer-content">
        <div >
        <a className="footer-atag" href="/"><i class="fab fa-facebook itag"></i>Facebook</a> <br/>
        <a className="footer-atag" href="/"><i class="fab fa-twitter itag"></i>Twitter</a> <br/>
        <a className="footer-atag" href="/"><i class="fab fa-instagram itag"></i>Instagram</a> <br/>
        <a className="footer-atag" href="/"><i class="fab fa-youtube itag"></i>Youtube</a> <br/>
      </div>
      <div>
        <a className="footer-atag" href="/#intro-content">About us</a> <br/>
        <a className="footer-atag" href="/">Careers</a> <br/>
        <a className="footer-atag" href="/">Blogs</a> <br/>
        <a className="footer-atag" href="/">Privacy Policy</a> <br/>
        <a className="footer-atag" href="/">Terms & Condition</a>
      </div>
        </div>
        <p class="copyright-line">© 2021 Mohan Ventures all rights reserved.</p>
    </footer>
  );
}

export default Footer;
