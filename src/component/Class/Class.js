import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Class = () => {
  const [classes2, setClasses2] = useState([]);
  useEffect(() => {
    fetch("/classes.json")
      .then((res) => res.json())
      .then((data) => setClasses2(data));
  }, []);
  return (
    // Full data second jeson file
    <div className="team-container">
      <div className="class">
        <div className="row ">
          {classes2?.map((cls) => (
            <div className="col-md-4 mt-5" key={cls.id}>
              <div
                className="card mb-3 ms-5 me-3"
                style={{ "maxWidth": "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-5 image">
                    <img  
                      src={cls.image}
                      className="img-fluid rounded ms-2 mt-2 img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span  className="text-danger">{cls.title}</span>
                      </h5>
                      <p className="card-text">
                        <small>
                          <span  className="fw-bold">Monthly Fee: $</span>
                          {cls.price}
                        </small>
                      </p>
                      <p className="card-text">
                        <small>
                          <span   className="fw-bold">Class Time:</span>{" "}
                          {cls.time}
                        </small>
                      </p>
                      <p className="card-text">
                        <small>
                          <span  className="fw-bold">Description:</span>{" "}
                          {cls.des}
                        </small>
                      </p>
                      <button
                        type="button"
                        className="btn btn-dark align-left far fa-circle"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/home">
        <button type="button" className="btn btn-danger align-center mb-3">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Class;
