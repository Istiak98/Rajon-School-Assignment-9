import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="image-aboutus-banner2" style={{ "marginTop": "70px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="lg-text">Contact US</h1>
                <p className="image-aboutus-para">RAJON SCHOOL</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us From */}
        <div className="col">
          <div className="p-3">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="English"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label" rows="3">
                  Your Message
                </label>
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message"
                  style={{ "width": "100%", "height": "150px" }}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
