import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="logo.png"></img>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder="Enter your email"></input>
          </div>
          <div className="footer-subscribe"> sumbit</div>
          <hr />
          <div className="footer-bottom">
            <p className="footer-bottom-left">
              @2024 Ritika Trivedi All rights
            </p>
            <div className="footer-bottom-right">
              <p>Term of Services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
