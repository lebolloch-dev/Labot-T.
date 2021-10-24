import React from "react";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="video-info">
        {/* <div className="video"> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rg654omdf3A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* </div> */}
        <div className="info">
          <h2>ABOUT US</h2>
          <p>
            <b>Labo T</b> is an electronic music label focused on Melodic Techno
            and Electronica.
          </p>
          <br />
          <p>
            Founded in November 2016, the idea of this label came to its
            creator, <b>Teho</b>, with the desire to create a sound laboratory,
            a place where artists can try new things, a place where they can
            cross genres, styles and work both electronic and acoustic music.
            Labo T. wants to highlight an organic and melodic music filled with
            emotions.
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>CONTACT US</h2>
        <form method="post" action="#">
          <div className="contact-groupe-info">
            <input
              type="text"
              name="nom"
              placeholder="Name *"
              required="required"
              autofocus
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              required="required"
            />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea placeholder="Message *" required="required"></textarea>
          <input type="submit" name="send" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
