import React from "react";

const Footer = () => {
  return (
    <div className="footer">
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
          title="site web du developpeur"
        >
          Lebolloch-Dev
        </a>
      </div>
    </div>
  );
};

export default Footer;
