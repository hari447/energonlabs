import "./AddressStyles.css";

import locImg from "../images/loc1.svg";
import mailImg from "../images/mail.svg";
import phoneImg from "../images/phone.svg";

function ContactAddress() {
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="contact_address1">
            <div className="contact_address1_left">
              <h3>Energon Labs Private Limited </h3>
              <ul>
                <li>
                  <img src={locImg} alt="location" />
                  Plot No 10-B, H No 5-36/1/10B TSIIC, Kukatpally Village,
                  Balanagar Mandal, Hyderabad, Telangana 500072, India (IND)
                </li>
                <li>
                  <img src={mailImg} alt="envelope" />
                  info@energonlabs.com, bd@energonlabs.com
                  registrations@energonlabs.com
                </li>
                <li>
                  <img src={phoneImg} alt="phone" />
                  +91 40 401 721 71, +91 910 0051 068, +91 720 7912 563
                </li>
              </ul>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.35582073792!2d78.4272163!3d17.4793771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917116a227cb%3A0x273ed9818ef42c02!2sEnergon%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1697192601787!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactAddress;
