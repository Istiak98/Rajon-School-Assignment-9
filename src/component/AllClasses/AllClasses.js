import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllClasses.css";
const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("/classes2.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  //   console.log(classes);
  return (
    <div className="team-container mt-2">
      {/* Home Page Search Section */}
      <h4 className="mt-1">Search Classes for Children</h4>
      <div className="search-box mt-2">
        <form className="d-flex flex-fill mx-5">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />{" "}
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        
      </div>

      {/* Home Page Card Section */}
      <div className="class">
        <div className="row ">
          {classes?.map((cls) => (
            <div className="col-md-6 mt-5" key={cls.id}>
              <div
                className="card mb-3 ms-5 me-3"
                style={{ maxWidth: "540px" }}
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
                        <span className="text-danger">{cls.title}</span>
                      </h5>
                      <p className="card-text">
                        <small>
                          <span className="fw-bold">Monthly Fee: $</span>
                          {cls.price}
                        </small>
                      </p>
                      <p className="card-text">
                        <small>
                          <span className="fw-bold">Class Time:</span>{" "}
                          {cls.time}
                        </small>
                      </p>
                      <p className="card-text">
                        <small>
                          <span className="fw-bold">Description:</span>{" "}
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
      <Link to="/class">
        <button type="button" className="btn btn-danger align-center mb-3">
          See More Classes
        </button>
      </Link>
      <h4 className="mt-3">Students Enrolled</h4>
        <div className="progress mt-4">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "50%" }}
          ></div>
        </div>
    </div>
  );
};

export default AllClasses;
