import WelcomeData from "./WelcomeData";
import "./WelcomeStyles.css";
import WelcomeImg1 from "../images/about.png";
import WelcomeImg2 from "../images/about2.jpg";
// create arrow function in Welcome Component
const Welcome = () => {
  return (
    <>
      {/* <h1>This is {props.heading}</h1> */}
      <section className="Welcome">
        <div className="container">
          <WelcomeData
            cName="Welcome_grid"
            heading="An extension to your own laboratory"
            text="ENergon Labs private limited started in the year 2019, offering
              contract analytical services to pharmaceutical and allied industries
              in an environment that is in total compliance to cGMP requirements
              using state-of-the art equipment and with work culture that is a
              paragon of integrity , involvement and intelligence.
              
              ENergon Labs is a customer focused Analytical Testing
              Laboratory, providing services across Pharmaceutical,
              Biopharmaceutical, Medical Devices & Packaging Industries with focus
              on Quality & Compliance. Founded in the year 2018, with a vision to
              be an Extension to your Laboratory delivering reliable analytical
              services in a timely manner.
              
              
              Our Goal is to enhance patient health by providing High Quality &
              Cost-Effective Analytical Solutions. ENergon stands for Integrity,
              Involvement & Intelligence."
            img1={WelcomeImg1}
          />
          <WelcomeData
            cName="Welcome_grid Welcome_grid_reverse"
            heading="Quality through Integrity and performance "
            text="
              
              ENergon Labs is a customer focused Analytical Testing
              Laboratory, providing services across Pharmaceutical,
              Biopharmaceutical, Medical Devices & Packaging Industries with focus
              on Quality & Compliance. Founded in the year 2018, with a vision to
              be an Extension to your Laboratory delivering reliable analytical
              services in a timely manner.
              
              
              Our Goal is to enhance patient health by providing High Quality &
              Cost-Effective Analytical Solutions. ENergon stands for Integrity,
              Involvement & Intelligence."
            img1={WelcomeImg2}
          />
        </div>
      </section>
    </>
  );
};
export default Welcome;
