import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="pic.jpg" alt=""></img>
      <h1>
        I'm <span style={{ color: "palevioletred" }}> Ritika Trivedi</span>, Web
        Developer.
      </h1>
      <p>
        I am a recent B.Tech graduate in Information Technology, eager to start
        my career as a Software Developer. I have a solid understanding of
        Python and strong skills in web development with HTML, CSS, JavaScript,
        and React. I thrive on learning new technologies and applying them to
        solve real-world problems.
      </p>
      <div className="heo-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>

        <div className="hero-resume">
          <a
            href="ritika.pdf"
            style={{
              color: "white",
              textDecorationLine: "none",
              alignItems: "center",
            }}
            download="ritika.pdf"
          >
            Download My Resume
          </a>
          {/* <AnchorLink
            className="resume-text"
            href="ritika.pdf"
            download=" Resume"
            target="_blank"
          >
            
          </AnchorLink>*/}
        </div>
      </div>
    </div>
  );
};
