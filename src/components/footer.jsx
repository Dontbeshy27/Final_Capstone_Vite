import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>PUBGM PH INC</h4>
            <h1 className="list-unstyled">
              <li>Manila, Philippines</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>STUFF</h4>
            <ui className="list-unstyled">
              <li>EDWARD</li>
              <li>SHAUN</li>
            </ui>
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
