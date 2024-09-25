import "./Services.css";
import theme_pattern from "./theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1> My Projects</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3 style={{ height: "2" }}>{service.s_no}</h3>
              <h2 style={{ height: "10" }}>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              {/* { <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt=""></img>
              </div>} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};