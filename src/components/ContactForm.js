import "./AddressStyles.css";
import arrowImg from "../images/arrow.svg";
function ContactForm() {
  return (
    <>
      <div className="careers_form">
        <div className="container">
          <h2 className="heading-secondary text-center">Send Us a Line</h2>
          <p className="text-center">
            We'd love to hear from you, so don't hesitate to drop us a line.
          </p>
          <form action="" className="form-group">
            <div className="grid grid--3-cols">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>

              <div className="grid-full">
                <textarea
                  name=""
                  placeholder="Additional Information"
                  className="form-control"
                  id=""
                ></textarea>
              </div>
              <div className="grid-full">
                <button className="btn">
                  Submit
                  <img src={arrowImg} alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default ContactForm;
