import "./About.css";
import theme_pattern from "./theme_pattern.svg";
import pic2 from "./pic2.jpg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pic2}></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I am Ritika Trivedi, a dedicated frontend developer with a
              passion for creating beautiful and responsive web interfaces.
            </p>
            <p>
              As a fresher, I am eager to apply my skills and grow in the
              dynamic field of web development.
            </p>
          </div>

          <div id="skill" className="about-skills">
            <div className="about-skill">
              <p>HTML& CSS </p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT </p>

              <hr style={{ width: "40%" }}></hr>
            </div>
            <div className="about-skill">
              <p>REACT JS </p>
              <hr style={{ width: "30%" }}></hr>
            </div>
            <div className="about-skill">
              <p>SQL </p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JAVA </p>
              <hr style={{ width: "40%" }}></hr>
            </div>
            <div className="about-skill">
              <p>PYTHON </p>
              <hr style={{ width: "20%" }}></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
