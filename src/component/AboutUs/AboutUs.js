import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <div className="image-aboutus-banner" style={{ "marginTop": "70px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About Us</h1>
              <p className="image-aboutus-para">
                RAJON SCHOOL
              </p>
            </div>
          </div>
        </div>
      </div>
     <div className="aboutus-secktion paddingTB60">
    <div className="container">
        <div className="row">
                	<div className="col-md-6">
                    	<h1 className="strong">Who we are and <br /> what we do
                        </h1>
                        <p className="lead">This is the world's Online Learning Education<br/>easy and quick</p>
                    </div>
                    <div className="col-md-6">
                    	<p>This is where online learning platforms really come to the fore, as reading made platforms for education that make the most of modern technology. That’s not to say traditional means of education are dying, but academic institutions and businesses have identified that we can achieve a lot more by utilizing our tech.</p>
                        <p>Through digital means, learning is on tap. It doesn’t take long to find out a fact, or to develop a specific skill. With this in mind, the way training organizations and educators create courses is also dramatically changing. In this article, we’re looking at the best e-learning authoring tools available right now..</p>
                    </div>
</div>
    </div>
</div>
<Link to='/home'>
    <button
              type="button"
                        className="btn btn-danger align-center mb-3"
                      >
                       Back to Home
                      </button>
    </Link>
    </div>
  );
};

export default AboutUs;
