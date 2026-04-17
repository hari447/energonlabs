import "./ServicesStyles.css";
import ServicesCards from "./ServicesCards";
import serviceImg1 from "../images/services/1.png";
import serviceImg2 from "../images/services/2.png";
import serviceImg3 from "../images/services/3.png";
import serviceImg4 from "../images/services/4.png";
import serviceImg5 from "../images/services/5.png";
import serviceImg6 from "../images/services/6.png";
import serviceImg7 from "../images/services/7.png";
import serviceImg8 from "../images/services/8.png";
import serviceImg9 from "../images/services/9.png";

// create arrow function in Services Component
const Services = () => {
  return (
    <div className="Services">
      <div className="container">
        <h2>Your Partner in Pharmaceutical Excellence</h2>
        <div className="services_pg_grid">
          <ServicesCards
            image={serviceImg1}
            heading="Analytical method development and validations"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
          <ServicesCards
            image={serviceImg2}
            heading="Stability and Photo Stability
            Studies"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
          <ServicesCards
            image={serviceImg3}
            heading="Physico-Chemical
            Characterisation"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
          <ServicesCards
            image={serviceImg4}
            heading="Extractables and
            Leachables"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
          <ServicesCards
            image={serviceImg5}
            heading="Elemental Impurities as
            per ICHQ3D"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
          <ServicesCards
            image={serviceImg6}
            heading="QC Release Analysis of APIs, Formulations, Excipients"
            content="Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy."
            linkTitle="Read More"
            link="./Services"
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
