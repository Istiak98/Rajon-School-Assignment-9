import React from "react";
const Gallary = () => {
  return (
    <div>
      <div className="row">
        <h2 className="mb-3">Moment from kids</h2>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

        {/* KIDS PHOTO GALLARY */}
          <img
            src="../images/image_about1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="../images/image_about2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../images/image_about3.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="../images/image_about4.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../images/image_about5.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="../images/image_about6.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
