import React from "react";
import { useState } from "react/cjs/react.development";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("***TEMPLAYE_ID***", {
      name,
      email,
      subject,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(() => {
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(
        (err) =>
          (document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div id="about-us">
      <div className="bg-about-us">
        <div className="video-info">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rg654omdf3A"
            title="Aftermovie Polytone showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* </div> */}
          <div className="info">
            <h2>ABOUT US</h2>
            <p>
              <b>Labo T</b> is an electronic music label focused on Melodic
              Techno and Electronica.
            </p>
            <br />
            <p>
              Founded in November 2016, the idea of this label came to its
              creator, <b>Teho</b>, with the desire to create a sound
              laboratory, a place where artists can try new things, a place
              where they can cross genres, styles and work both electronic and
              acoustic music. Labo T. wants to highlight an organic and melodic
              music filled with emotions.
            </p>
            <div className="staff-team">
              <div className="sound-engineer">
                <h3>OUR SOUND ENGINEER : </h3>
                <a
                  href="https://www.pushuptheaudio.com/mastering"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Push up the audio"
                >
                  Push Up The Audio
                </a>
              </div>
              <div className="graphic-design">
                <h3>GRAPHIC DESIGN :</h3>
                <a
                  href="http://www.antoinedevictor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Antoine Devictor"
                >
                  Antoine Devictor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="for-contact">
          <div className="demo">
            <h3>DEMO Policy :</h3>
            <p>WE DON'T ACCEPT DEMOS ANYMORE !</p>
            <p>Thank you anyway for your interrest ...</p>
          </div>
          <div className="booking">
            <h3>BOOKING :</h3>
            <p>
              If you want to book one of our artists or book a Labo T showcase,
              use Contact Us section down below
            </p>
          </div>
        </div>

        <div className="contact">
          <h2>CONTACT US</h2>
          <form>
            <div className="contact-groupe-info">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
                required="required"
                value={name}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required="required"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message *"
              required="required"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <input
              type="submit"
              name="send"
              value="SEND"
              onClick={handleSubmit}
            />
            <div className="form-message"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
