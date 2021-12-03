import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-footer">
        <div className="copyright">
          <p>Copyright</p>
          <i className="far fa-copyright"></i>
          <p>Labo T.</p>
        </div>
        <div className="dev">
          <p>Developed by</p>
          <a
            href="https://lebolloch.tech/index.html"
            target="_blank"
            title="Lebolloch_Dev"
            rel="noreferrer"
          >
            Lebolloch_Dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
