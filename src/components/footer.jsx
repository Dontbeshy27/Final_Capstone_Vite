import React from "react";
import "./footer.css";
import { FacebookLogo } from "phosphor-react";
import {InstagramLogo} from "phosphor-react";
import {TwitterLogo} from "phosphor-react";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>PUBG PH INC</h4>
            <h1 className="list-unstyled">
              <li>Manila, Philippines</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>STUFF</h4>
            <ui className="list-unstyled p-3">
              <li className="pb-2">EDWARD</li>
              <li>SHAUN</li>
            </ui>
          </div>
          <div className="col">
            <h4>Social Media</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookLogo size={32}/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterLogo size={32}/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookLogo size={32}/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterLogo size={32}/></a>
                    
                  </li>
                  <li>
                   
                  
                  </li>
              </ul>
</div>

        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PUBGM PHILIPPINES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
